"use client";

import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { cacheManager } from "@/lib/cache-utils";

interface WaterQualityData {
  timestamp: string;
  ph: number;
  hardness: number;
  tds: number;
  chlorine: number;
  bacteria: number;
}

interface WaterQualityMetric {
  name: string;
  unit: string;
  safe_range: [number, number];
  description: string;
}

const metrics: Record<string, WaterQualityMetric> = {
  ph: {
    name: "pH Level",
    unit: "pH",
    safe_range: [6.5, 8.5],
    description: "Measure of water acidity. Ideal range prevents pipe corrosion."
  },
  hardness: {
    name: "Water Hardness",
    unit: "gpg",
    safe_range: [3, 7],
    description: "Calcium and magnesium content. High levels cause scale buildup."
  },
  tds: {
    name: "Total Dissolved Solids",
    unit: "ppm",
    safe_range: [50, 500],
    description: "Total amount of dissolved minerals and salts."
  },
  chlorine: {
    name: "Chlorine Level",
    unit: "ppm",
    safe_range: [0.2, 4],
    description: "Disinfectant level. Required for safe drinking water."
  },
  bacteria: {
    name: "Bacteria Count",
    unit: "cfu/ml",
    safe_range: [0, 500],
    description: "Measure of bacterial contamination."
  }
};

interface WaterQualityChartProps {
  className?: string;
}

export function WaterQualityChart({ className }: WaterQualityChartProps) {
  const [selectedMetric, setSelectedMetric] = useState<string>("ph");
  const [timeRange, setTimeRange] = useState<string>("week");
  const [data, setData] = useState<WaterQualityData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await cacheManager.get(
          `water_quality_${timeRange}`,
          async () => {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            return generateMockData(timeRange);
          },
          { maxAge: 300, tags: ["water_quality"] }
        );
        setData(response);
      } catch (err) {
        setError("Failed to load water quality data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [timeRange]);

  const generateMockData = (range: string): WaterQualityData[] => {
    const points = range === "week" ? 7 : range === "month" ? 30 : 90;
    const data: WaterQualityData[] = [];
    
    for (let i = 0; i < points; i++) {
      const date = new Date();
      date.setDate(date.getDate() - (points - i - 1));
      
      data.push({
        timestamp: date.toISOString().split('T')[0],
        ph: 7 + Math.random() * 2 - 1,
        hardness: 5 + Math.random() * 4 - 2,
        tds: 250 + Math.random() * 200 - 100,
        chlorine: 2 + Math.random() * 3 - 1.5,
        bacteria: Math.max(0, 250 + Math.random() * 500 - 250)
      });
    }
    
    return data;
  };

  const selectedMetricData = metrics[selectedMetric];
  const [minSafe, maxSafe] = selectedMetricData.safe_range;

  const getValueStatus = (value: number): string => {
    if (value < minSafe) return "text-yellow-500";
    if (value > maxSafe) return "text-red-500";
    return "text-green-500";
  };

  const currentValue = data[data.length - 1]?.[selectedMetric as keyof WaterQualityData] as number;

  return (
    <Card className={`${className} p-6`}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h3 className="text-lg font-semibold">Water Quality Monitor</h3>
          <p className="text-sm text-muted-foreground">Track your water quality metrics over time</p>
        </div>
        
        <div className="flex gap-2">
          <Select
            value={selectedMetric}
            onValueChange={setSelectedMetric}
          >
            {Object.entries(metrics).map(([key, metric]) => (
              <option key={key} value={key}>{metric.name}</option>
            ))}
          </Select>
          
          <Select
            value={timeRange}
            onValueChange={setTimeRange}
          >
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="quarter">Last Quarter</option>
          </Select>
        </div>
      </div>

      {loading ? (
        <div className="h-[400px] flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      ) : error ? (
        <div className="h-[400px] flex items-center justify-center text-red-500">
          {error}
        </div>
      ) : (
        <>
          <div className="mb-6">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold">
                {currentValue?.toFixed(2)}
              </span>
              <span className="text-sm text-muted-foreground">
                {selectedMetricData.unit}
              </span>
              <span className={`text-sm ${getValueStatus(currentValue)}`}>
                {currentValue < minSafe ? "Below" : currentValue > maxSafe ? "Above" : "Within"} safe range
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              {selectedMetricData.description}
            </p>
            <p className="text-sm mt-1">
              Safe range: {minSafe} - {maxSafe} {selectedMetricData.unit}
            </p>
          </div>

          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="timestamp"
                  tickFormatter={(value) => new Date(value).toLocaleDateString()}
                />
                <YAxis
                  domain={[
                    Math.min(minSafe * 0.8, Math.min(...data.map(d => d[selectedMetric as keyof WaterQualityData] as number))),
                    Math.max(maxSafe * 1.2, Math.max(...data.map(d => d[selectedMetric as keyof WaterQualityData] as number)))
                  ]}
                />
                <Tooltip
                  labelFormatter={(value) => new Date(value).toLocaleDateString()}
                  formatter={(value: number) => [value.toFixed(2), selectedMetricData.name]}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey={selectedMetric}
                  name={selectedMetricData.name}
                  stroke="#0caadc"
                  strokeWidth={2}
                  dot={false}
                />
                {/* Safe range reference lines */}
                <Line
                  type="monotone"
                  dataKey={() => minSafe}
                  stroke="#22c55e"
                  strokeDasharray="5 5"
                  name="Min Safe"
                />
                <Line
                  type="monotone"
                  dataKey={() => maxSafe}
                  stroke="#ef4444"
                  strokeDasharray="5 5"
                  name="Max Safe"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </Card>
  );
}