"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Droplets, 
  WifiIcon,
  Battery,
  Gauge,
  ShieldCheck
} from "lucide-react";

const devices = [
  {
    icon: <Droplets className="w-6 h-6" />,
    name: "Smart Water Meter",
    description: "Real-time water usage monitoring and leak detection",
    features: ["Usage Tracking", "Leak Detection", "Mobile Alerts"],
    compatibility: ["iOS", "Android"]
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    name: "Automatic Shutoff Valve",
    description: "Prevents water damage by automatically shutting off water supply",
    features: ["Auto Shutoff", "Remote Control", "Emergency Mode"],
    compatibility: ["All Plumbing Systems"]
  },
  {
    icon: <Gauge className="w-6 h-6" />,
    name: "Pressure Sensors",
    description: "Monitors water pressure throughout your plumbing system",
    features: ["Pressure Monitoring", "Burst Prevention", "System Alerts"],
    compatibility: ["All Pipe Types"]
  },
  {
    icon: <Battery className="w-6 h-6" />,
    name: "Water Quality Monitor",
    description: "Continuous monitoring of water quality parameters",
    features: ["Quality Analysis", "Contamination Alerts", "History Tracking"],
    compatibility: ["All Water Systems"]
  }
];

export function SmartDevicesList() {
  return (
    <div className="grid gap-6">
      {devices.map((device, index) => (
        <Card key={index} className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-[#0caadc]/10 rounded-lg text-[#0caadc]">
              {device.icon}
            </div>
            <div className="flex-1">
              <h4 className="font-semibold mb-2">{device.name}</h4>
              <p className="text-sm text-muted-foreground mb-4">{device.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {device.features.map((feature, i) => (
                  <Badge key={i} variant="secondary">{feature}</Badge>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <WifiIcon className="w-4 h-4" />
                <span>Compatible with: {device.compatibility.join(", ")}</span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}