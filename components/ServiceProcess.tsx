"use client";

import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";

interface Step {
  title: string;
  description: string;
}

interface ServiceProcessProps {
  title: string;
  description: string;
  steps: Step[];
}

export function ServiceProcess({ title, description, steps }: ServiceProcessProps) {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-muted-foreground mb-8">{description}</p>
      
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0caadc]/10 flex items-center justify-center">
              {index === steps.length - 1 ? (
                <CheckCircle className="w-5 h-5 text-[#0caadc]" />
              ) : (
                <ArrowRight className="w-5 h-5 text-[#0caadc]" />
              )}
            </div>
            <div>
              <h3 className="font-semibold mb-1">Step {index + 1}: {step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}