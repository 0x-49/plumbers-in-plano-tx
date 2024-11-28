"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Maximize2, ZoomIn, Target } from "lucide-react";

const inspectionPoints = [
  {
    id: 1,
    title: "Main Line Entry",
    description: "Initial access point for camera inspection",
    status: "clear",
    depth: "0 ft"
  },
  {
    id: 2,
    title: "Branch Connection",
    description: "Junction where branch lines connect to main sewer",
    status: "monitoring",
    depth: "15 ft"
  },
  {
    id: 3,
    title: "Pipe Bend",
    description: "90-degree turn in main sewer line",
    status: "attention",
    depth: "25 ft"
  },
  {
    id: 4,
    title: "City Connection",
    description: "Connection point to municipal sewer system",
    status: "clear",
    depth: "40 ft"
  }
];

function getStatusColor(status: string) {
  switch (status) {
    case 'clear':
      return 'bg-green-100 text-green-800';
    case 'attention':
      return 'bg-orange-100 text-orange-800';
    case 'monitoring':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

export function DrainInspectionViewer() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <Camera className="w-5 h-5 text-[#0caadc]" />
            <h3 className="font-semibold">Live Feed</h3>
          </div>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <Target className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm">Camera View</p>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <Badge variant="outline" className="flex items-center gap-1">
              <ZoomIn className="w-4 h-4" />
              Zoom: 1.0x
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Maximize2 className="w-4 h-4" />
              Depth: 25 ft
            </Badge>
          </div>
        </Card>

        <div className="space-y-4">
          {inspectionPoints.map((point) => (
            <Card key={point.id} className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold">{point.title}</h4>
                    <Badge className={getStatusColor(point.status)}>
                      {point.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {point.description}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Depth: </span>
                    {point.depth}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}