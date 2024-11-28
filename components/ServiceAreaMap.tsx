"use client";

import { Card } from "@/components/ui/card";
import { businessData } from "@/lib/business-data";

const serviceAreas = businessData.serviceArea.map(city => ({
  name: city,
  radius: city === "Plano" ? "Primary" : "Secondary",
  response: city === "Plano" ? "30-60 minutes" : "60-90 minutes"
}));

export function ServiceAreaMap() {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold mb-4">Service Areas</h3>
      <div className="relative aspect-[4/3] mb-6">
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Plano,TX&zoom=11`}
          className="absolute inset-0 w-full h-full rounded-lg"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="grid gap-4">
        {serviceAreas.map((area) => (
          <div key={area.name} className="flex justify-between items-center p-3 bg-muted rounded-lg">
            <div>
              <h4 className="font-medium">{area.name}</h4>
              <p className="text-sm text-muted-foreground">{area.radius} Service Area</p>
            </div>
            <div className="text-sm text-right">
              <span className="font-medium">Response Time:</span>
              <br />
              {area.response}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}