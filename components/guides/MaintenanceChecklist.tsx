```typescript
"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  ClipboardList,
  Calendar,
  AlertTriangle,
  Tool
} from "lucide-react";
import { useState } from "react";

interface ChecklistItem {
  id: string;
  task: string;
  frequency: string;
  importance: "Low" | "Medium" | "High" | "Critical";
  tools?: string[];
  notes?: string;
}

interface MaintenanceChecklistProps {
  title: string;
  description: string;
  items: ChecklistItem[];
}

export function MaintenanceChecklist({
  title,
  description,
  items
}: MaintenanceChecklistProps) {
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case "Critical":
        return "bg-red-100 text-red-800";
      case "High":
        return "bg-orange-100 text-orange-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-green-100 text-green-800";
    }
  };

  const toggleTask = (taskId: string) => {
    setCompletedTasks(prev =>
      prev.includes(taskId)
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 text-[#0caadc] mb-4">
        <ClipboardList className="w-5 h-5" />
        <h2 className="text-xl font-bold">{title}</h2>
      </div>

      <p className="text-muted-foreground mb-8">{description}</p>

      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.id}
            className={`p-4 border rounded-lg transition-opacity ${
              completedTasks.includes(item.id) ? "opacity-60" : ""
            }`}
          >
            <div className="flex items-start gap-4">
              <Checkbox
                checked={completedTasks.includes(item.id)}
                onCheckedChange={() => toggleTask(item.id)}
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-medium">{item.task}</span>
                  <Badge className={getImportanceColor(item.importance)}>
                    {item.importance}
                  </Badge>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {item.frequency}
                  </span>
                </div>

                {item.tools && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Tool className="w-4 h-4" />
                    <span>Tools needed: {item.tools.join(", ")}</span>
                  </div>
                )}

                {item.notes && (
                  <div className="flex items-center gap-2 text-sm">
                    <AlertTriangle className="w-4 h-4 text-orange-500" />
                    <span>{item.notes}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-muted rounded-lg">
        <p className="text-sm text-muted-foreground">
          Progress: {completedTasks.length} of {items.length} tasks completed
        </p>
        <div className="w-full bg-background rounded-full h-2 mt-2">
          <div
            className="bg-[#0caadc] h-2 rounded-full transition-all"
            style={{
              width: `${(completedTasks.length / items.length) * 100}%`
            }}
          />
        </div>
      </div>
    </Card>
  );
}
```