"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { ChevronRight, ChevronLeft, AlertCircle } from "lucide-react";
import { businessData } from "@/lib/business-data";
import { cacheManager } from "@/lib/cache-utils";

const steps = [
  {
    title: "Service Type",
    description: "Select the type of service you need"
  },
  {
    title: "Schedule",
    description: "Choose your preferred date and time"
  },
  {
    title: "Details",
    description: "Provide additional information"
  },
  {
    title: "Contact",
    description: "Enter your contact information"
  }
];

const timeSlots = [
  "08:00", "09:00", "10:00", "11:00",
  "12:00", "13:00", "14:00", "15:00",
  "16:00", "17:00", "18:00"
];

const formSchema = z.object({
  service: z.string().min(1, "Please select a service"),
  date: z.date({
    required_error: "Please select a date",
    invalid_type_error: "Invalid date",
  }),
  time: z.string().min(1, "Please select a time"),
  details: z.string().min(10, "Please provide more details about your service needs"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^\d{10}$/, "Please enter a valid 10-digit phone number"),
  email: z.string().email("Please enter a valid email address"),
  address: z.string().min(5, "Please enter your complete address"),
  urgency: z.enum(["standard", "urgent", "emergency"]),
  propertyType: z.enum(["residential", "commercial"]),
});

type FormData = z.infer<typeof formSchema>;

export function ServiceRequestWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [availableSlots, setAvailableSlots] = useState<string[]>(timeSlots);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      service: "",
      date: new Date(),
      time: "",
      details: "",
      name: "",
      phone: "",
      email: "",
      address: "",
      urgency: "standard",
      propertyType: "residential"
    }
  });

  const { register, handleSubmit, formState: { errors }, watch, setValue } = form;

  const selectedDate = watch("date");
  const selectedService = watch("service");

  useEffect(() => {
    // Simulate checking availability for the selected date
    const checkAvailability = async () => {
      try {
        const slots = await cacheManager.get(
          `availability_${selectedDate.toISOString()}_${selectedService}`,
          async () => {
            // Simulate API call to check availability
            await new Promise(resolve => setTimeout(resolve, 500));
            return timeSlots.filter(() => Math.random() > 0.3);
          },
          { maxAge: 300, tags: ["availability"] }
        );
        setAvailableSlots(slots);
      } catch (error) {
        console.error("Error checking availability:", error);
        setAvailableSlots(timeSlots);
      }
    };

    if (selectedDate && selectedService) {
      checkAvailability();
    }
  }, [selectedDate, selectedService]);

  const nextStep = () => {
    const fieldsToValidate = getFieldsForStep(currentStep);
    form.trigger(fieldsToValidate).then((isValid) => {
      if (isValid) {
        setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
      }
    });
  };

  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  const getFieldsForStep = (step: number): (keyof FormData)[] => {
    switch (step) {
      case 0:
        return ["service", "urgency", "propertyType"];
      case 1:
        return ["date", "time"];
      case 2:
        return ["details"];
      case 3:
        return ["name", "phone", "email", "address"];
      default:
        return [];
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form submitted:", data);
      // Show success message or redirect
    } catch (error) {
      console.error("Error submitting form:", error);
      // Show error message
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Service Type</label>
              <Select {...register("service")}>
                <option value="">Select a service...</option>
                {businessData.services.map(service => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </Select>
              {errors.service && (
                <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Urgency Level</label>
              <Select {...register("urgency")}>
                <option value="standard">Standard Service</option>
                <option value="urgent">Urgent (Within 24 hours)</option>
                <option value="emergency">Emergency (Immediate)</option>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Property Type</label>
              <Select {...register("propertyType")}>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
              </Select>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Preferred Date</label>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date: Date | undefined) => date && setValue("date", date)}
                disabled={(date: Date) =>
                  date < new Date() || date > new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                }
                className="rounded-md border"
              />
              {errors.date && (
                <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Preferred Time</label>
              <Select {...register("time")}>
                <option value="">Select a time...</option>
                {availableSlots.map(slot => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </Select>
              {errors.time && (
                <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
              )}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Service Details</label>
              <Textarea
                {...register("details")}
                placeholder="Please describe your plumbing issue or service needs..."
                className="h-32"
              />
              {errors.details && (
                <p className="text-red-500 text-sm mt-1">{errors.details.message}</p>
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Full Name</label>
              <Input {...register("name")} placeholder="John Doe" />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Phone Number</label>
              <Input {...register("phone")} placeholder="1234567890" type="tel" />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Email Address</label>
              <Input {...register("email")} placeholder="john@example.com" type="email" />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Service Address</label>
              <Input {...register("address")} placeholder="123 Main St, Plano, TX" />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="p-6">
      <div className="mb-8">
        <div className="flex justify-between mb-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex-1 ${index > 0 ? "ml-2" : ""}`}
            >
              <div
                className={`h-2 rounded-full ${
                  index <= currentStep ? "bg-[#0caadc]" : "bg-muted"
                }`}
              />
              <p className="text-sm mt-2 font-medium">{step.title}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          {steps[currentStep].description}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {renderStepContent()}

        <div className="flex justify-between mt-8">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 0}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          {currentStep < steps.length - 1 ? (
            <Button type="button" onClick={nextStep}>
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </Button>
          )}
        </div>
      </form>

      {Object.keys(errors).length > 0 && (
        <div className="mt-4 p-4 bg-red-50 rounded-lg">
          <div className="flex items-center gap-2 text-red-500">
            <AlertCircle className="w-4 h-4" />
            <p className="text-sm font-medium">Please fix the following errors:</p>
          </div>
          <ul className="mt-2 text-sm text-red-500">
            {Object.entries(errors).map(([field, error]) => (
              <li key={field}>{error?.message}</li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
}