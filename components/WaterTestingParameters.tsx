"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle,
  AlertTriangle,
  Info
} from "lucide-react";

const parameters = [
  {
    category: "Basic Parameters",
    items: [
      {
        name: "pH Level",
        description: "Measures water acidity/alkalinity",
        normalRange: "6.5-8.5",
        importance: "high"
      },
      {
        name: "Total Dissolved Solids",
        description: "Measures dissolved minerals",
        normalRange: "< 500 ppm",
        importance: "high"
      },
      {
        name: "Hardness",
        description: "Calcium and magnesium content",
        normalRange: "< 120 ppm",
        importance: "medium"
      }
    ]
  },
  {
    category: "Chemical Parameters",
    items: [
      {
        name: "Chlorine",
        description: "Disinfectant levels",
        normalRange: "0.2-2.0 ppm",
        importance: "high"
      },
      {
        name: "Nitrates",
        description: "Fertilizer/waste contamination",
        normalRange: "< 10 ppm",
        importance: "high"
      },
      {
        name: "Iron",
        description: "Metal content",
        normalRange: "< 0.3 ppm",
        importance: "medium"
      }
    ]
  },
  {
    category: "Biological Parameters",
    items: [
      {
        name: "Bacteria",
        description: "Coliform presence",
        normalRange: "0 CFU/100mL",
        importance: "critical"
      },
      {
        name: "Algae",
        description: "Organic contamination",
        normalRange: "Not present",
        importance: "medium"
      }
    ]
  }
];

function getImportanceColor(importance: string) {
  switch (importance) {
    case 'critical':
      return 'bg-red-100 text-red-800';
    case 'high':
      return 'bg-orange-100 text-orange-800';
    case 'medium':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

function getImportanceIcon(importance: string) {
  switch (importance) {
    case 'critical':
      return <AlertTriangle className="w-4 h-4" />;
    case 'high':
      return <Info className="w-4 h-4" />;
    default:
      return <CheckCircle className="w-4 h-4" />;
  }
}

export function WaterTestingParameters() {
  return (
    <div className="space-y-8">
      {parameters.map((category, index) => (
        <div key={index}>
          <h4 className="font-semibold mb-4">{category.category}</h4>
          <div className="grid gap-4">
            {category.items.map((item, itemIndex) => (
              <Card key={itemIndex} className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h5 className="font-semibold">{item.name}</h5>
                      <Badge className={getImportanceColor(item.importance)}>
                        <span className="flex items-center gap-1">
                          {getImportanceIcon(item.importance)}
                          {item.importance}
                        </span>
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                    <div className="text-sm">
                      <span className="font-medium">Normal Range: </span>
                      {item.normalRange}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}