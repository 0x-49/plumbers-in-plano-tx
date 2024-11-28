```typescript
"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle,
  ShieldAlert,
  Phone,
  Tool,
  FileDown,
  CheckCircle2
} from "lucide-react";

interface EmergencyContact {
  name: string;
  phone: string;
  available: string;
}

interface EmergencySupply {
  item: string;
  quantity: string;
  notes?: string;
}

interface EmergencyStep {
  title: string;
  description: string;
  actions: string[];
  tools?: string[];
  warnings?: string[];
}

interface EmergencyPreparednessProps {
  contacts: EmergencyContact[];
  supplies: EmergencySupply[];
  steps: EmergencyStep[];
}

export function EmergencyPreparedness({
  contacts,
  supplies,
  steps
}: EmergencyPreparednessProps) {
  return (
    <div className="space-y-8">
      <Card className="p-6">
        <div className="flex items-center gap-2 text-red-500 mb-6">
          <ShieldAlert className="w-5 h-5" />
          <h2 className="text-xl font-bold">Emergency Preparedness Guide</h2>
        </div>

        <div className="space-y-8">
          {/* Emergency Contacts */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Emergency Contacts
            </h3>
            <div className="grid gap-4">
              {contacts.map((contact, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium">{contact.name}</p>
                    <p className="text-sm text-muted-foreground">{contact.available}</p>
                  </div>
                  <Button variant="outline" asChild>
                    <a href={`tel:${contact.phone}`} className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      {contact.phone}
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Supplies */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Tool className="w-4 h-4" />
              Emergency Supply Checklist
            </h3>
            <div className="grid gap-4">
              {supplies.map((supply, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium">{supply.item}</p>
                    <p className="text-sm text-muted-foreground">{supply.notes}</p>
                  </div>
                  <Badge variant="secondary">
                    Qty: {supply.quantity}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Steps */}
          <div>
            <h3 className="font-semibold mb-4">Emergency Response Steps</h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <Card key={index} className="p-4">
                  <h4 className="font-medium mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{step.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h5 className="text-sm font-medium mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Required Actions:
                      </h5>
                      <ul className="space-y-2">
                        {step.actions.map((action, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1">•</span>
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {step.tools && (
                      <div>
                        <h5 className="text-sm font-medium mb-2 flex items-center gap-2">
                          <Tool className="w-4 h-4" />
                          Tools Needed:
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          {step.tools.join(", ")}
                        </p>
                      </div>
                    )}

                    {step.warnings && (
                      <div>
                        <h5 className="text-sm font-medium mb-2 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-orange-500" />
                          Important Warnings:
                        </h5>
                        <ul className="space-y-2">
                          {step.warnings.map((warning, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-orange-500">
                              <span className="mt-1">•</span>
                              <span>{warning}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <Button className="mt-8 w-full" variant="outline">
          <FileDown className="w-4 h-4 mr-2" />
          Download Emergency Guide PDF
        </Button>
      </Card>
    </div>
  );
}
```