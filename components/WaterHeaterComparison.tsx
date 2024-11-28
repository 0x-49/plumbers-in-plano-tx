"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle } from "lucide-react";

const heaterTypes = [
  {
    type: "Traditional Tank",
    description: "Storage tank water heaters keep hot water ready for use",
    initialCost: "Low",
    operatingCost: "Moderate",
    lifespan: "8-12 years",
    spaceNeeded: "Large",
    features: [
      { name: "Lower upfront cost", included: true },
      { name: "Simple installation", included: true },
      { name: "Continuous hot water", included: false },
      { name: "Energy efficient", included: false },
      { name: "Space saving", included: false }
    ]
  },
  {
    type: "Tankless",
    description: "On-demand water heating without storage",
    initialCost: "High",
    operatingCost: "Low",
    lifespan: "20+ years",
    spaceNeeded: "Small",
    features: [
      { name: "Lower upfront cost", included: false },
      { name: "Simple installation", included: false },
      { name: "Continuous hot water", included: true },
      { name: "Energy efficient", included: true },
      { name: "Space saving", included: true }
    ]
  },
  {
    type: "Hybrid/Heat Pump",
    description: "Combines heat pump and traditional technology",
    initialCost: "High",
    operatingCost: "Very Low",
    lifespan: "12-15 years",
    spaceNeeded: "Large",
    features: [
      { name: "Lower upfront cost", included: false },
      { name: "Simple installation", included: false },
      { name: "Continuous hot water", included: true },
      { name: "Energy efficient", included: true },
      { name: "Space saving", included: false }
    ]
  }
];

export function WaterHeaterComparison() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {heaterTypes.map((heater) => (
        <Card key={heater.type} className="p-6">
          <h4 className="font-semibold text-lg mb-2">{heater.type}</h4>
          <p className="text-sm text-muted-foreground mb-4">{heater.description}</p>
          
          <div className="space-y-4 mb-6">
            <div>
              <span className="text-sm font-medium">Initial Cost:</span>
              <Badge variant="secondary" className="ml-2">{heater.initialCost}</Badge>
            </div>
            <div>
              <span className="text-sm font-medium">Operating Cost:</span>
              <Badge variant="secondary" className="ml-2">{heater.operatingCost}</Badge>
            </div>
            <div>
              <span className="text-sm font-medium">Lifespan:</span>
              <Badge variant="secondary" className="ml-2">{heater.lifespan}</Badge>
            </div>
            <div>
              <span className="text-sm font-medium">Space Needed:</span>
              <Badge variant="secondary" className="ml-2">{heater.spaceNeeded}</Badge>
            </div>
          </div>

          <div className="space-y-2">
            {heater.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                {feature.included ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-500" />
                )}
                <span>{feature.name}</span>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}