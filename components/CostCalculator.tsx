"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calculator, Info } from "lucide-react";
import { Tooltip } from "@/components/ui/tooltip";

interface ServicePrice {
  id: string;
  name: string;
  basePrice: number;
  hourlyRate: number;
  materials?: {
    name: string;
    price: number;
  }[];
  options?: {
    name: string;
    price: number;
  }[];
}

const services: ServicePrice[] = [
  {
    id: "drain",
    name: "Drain Cleaning",
    basePrice: 150,
    hourlyRate: 85,
    options: [
      { name: "Camera Inspection", price: 99 },
      { name: "Hydro Jetting", price: 350 }
    ]
  },
  {
    id: "water-heater",
    name: "Water Heater Repair",
    basePrice: 200,
    hourlyRate: 95,
    materials: [
      { name: "Heating Element", price: 45 },
      { name: "Thermostat", price: 35 },
      { name: "Pressure Valve", price: 55 }
    ]
  },
  {
    id: "leak",
    name: "Leak Repair",
    basePrice: 175,
    hourlyRate: 90,
    materials: [
      { name: "Pipe Section", price: 25 },
      { name: "Fittings", price: 15 },
      { name: "Solder Kit", price: 20 }
    ]
  },
  {
    id: "toilet",
    name: "Toilet Installation",
    basePrice: 250,
    hourlyRate: 85,
    materials: [
      { name: "Wax Ring", price: 8 },
      { name: "Supply Line", price: 12 },
      { name: "Mounting Bolts", price: 10 }
    ],
    options: [
      { name: "Toilet Removal", price: 75 },
      { name: "New Flange", price: 45 }
    ]
  }
];

export function CostCalculator() {
  const [selectedService, setSelectedService] = useState("");
  const [urgency, setUrgency] = useState("standard");
  const [hours, setHours] = useState(1);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [estimate, setEstimate] = useState<{
    basePrice: number;
    laborCost: number;
    materialsCost: number;
    optionsCost: number;
    total: number;
  } | null>(null);

  const calculateEstimate = () => {
    const service = services.find(s => s.id === selectedService);
    if (!service) return;

    let basePrice = service.basePrice;
    const laborCost = service.hourlyRate * hours;
    
    const materialsCost = selectedMaterials.reduce((total, materialName) => {
      const material = service.materials?.find(m => m.name === materialName);
      return total + (material?.price || 0);
    }, 0);

    const optionsCost = selectedOptions.reduce((total, optionName) => {
      const option = service.options?.find(o => o.name === optionName);
      return total + (option?.price || 0);
    }, 0);

    let total = basePrice + laborCost + materialsCost + optionsCost;

    // Apply urgency multipliers
    if (urgency === "emergency") total *= 1.5;
    if (urgency === "same-day") total *= 1.25;

    setEstimate({
      basePrice,
      laborCost,
      materialsCost,
      optionsCost,
      total
    });
  };

  useEffect(() => {
    // Reset selections when service changes
    setSelectedMaterials([]);
    setSelectedOptions([]);
    setEstimate(null);
  }, [selectedService]);

  const selectedServiceData = services.find(s => s.id === selectedService);

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 text-[#0caadc] mb-4">
        <Calculator className="w-5 h-5" />
        <h3 className="font-semibold">Cost Calculator</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-1 block">Select Service</label>
          <Select
            value={selectedService}
            onValueChange={setSelectedService}
          >
            <option value="">Choose a service...</option>
            {services.map(service => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </Select>
        </div>

        {selectedServiceData && (
          <>
            <div>
              <label className="text-sm font-medium mb-1 block">Service Type</label>
              <Select
                value={urgency}
                onValueChange={setUrgency}
              >
                <option value="standard">Standard Service</option>
                <option value="same-day">Same Day Service (+25%)</option>
                <option value="emergency">Emergency Service (+50%)</option>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Estimated Hours</label>
              <Input
                type="number"
                min="1"
                max="8"
                value={hours}
                onChange={(e) => setHours(Math.max(1, parseInt(e.target.value) || 1))}
              />
            </div>

            {selectedServiceData.materials && (
              <div>
                <label className="text-sm font-medium mb-1 block">Required Materials</label>
                <div className="space-y-2">
                  {selectedServiceData.materials.map(material => (
                    <div key={material.name} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id={material.name}
                        checked={selectedMaterials.includes(material.name)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedMaterials([...selectedMaterials, material.name]);
                          } else {
                            setSelectedMaterials(selectedMaterials.filter(m => m !== material.name));
                          }
                        }}
                      />
                      <label htmlFor={material.name} className="text-sm">
                        {material.name} (${material.price})
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedServiceData.options && (
              <div>
                <label className="text-sm font-medium mb-1 block">Additional Options</label>
                <div className="space-y-2">
                  {selectedServiceData.options.map(option => (
                    <div key={option.name} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id={option.name}
                        checked={selectedOptions.includes(option.name)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedOptions([...selectedOptions, option.name]);
                          } else {
                            setSelectedOptions(selectedOptions.filter(o => o !== option.name));
                          }
                        }}
                      />
                      <label htmlFor={option.name} className="text-sm">
                        {option.name} (${option.price})
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        <Button 
          onClick={calculateEstimate}
          className="w-full bg-[#0caadc] hover:bg-[#1481ba]"
          disabled={!selectedService}
        >
          Calculate Estimate
        </Button>

        {estimate && (
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Cost Breakdown</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Base Service Price:</span>
                <span>${estimate.basePrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Labor Cost ({hours} hours):</span>
                <span>${estimate.laborCost.toFixed(2)}</span>
              </div>
              {estimate.materialsCost > 0 && (
                <div className="flex justify-between">
                  <span>Materials:</span>
                  <span>${estimate.materialsCost.toFixed(2)}</span>
                </div>
              )}
              {estimate.optionsCost > 0 && (
                <div className="flex justify-between">
                  <span>Additional Options:</span>
                  <span>${estimate.optionsCost.toFixed(2)}</span>
                </div>
              )}
              <div className="border-t pt-1 mt-2 font-semibold flex justify-between">
                <span>Estimated Total:</span>
                <span>${estimate.total.toFixed(2)}</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
              <Info className="w-4 h-4" />
              Final price may vary based on specific conditions
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}