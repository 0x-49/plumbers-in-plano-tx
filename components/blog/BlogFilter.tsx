```typescript
"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Search, Calendar as CalendarIcon, SlidersHorizontal } from "lucide-react";
import { format } from "date-fns";

interface BlogFilterProps {
  onFilterChange: (filters: {
    search: string;
    dateRange: { start: Date | undefined; end: Date | undefined };
    sortBy: 'date' | 'popular';
  }) => void;
}

export function BlogFilter({ onFilterChange }: BlogFilterProps) {
  const [search, setSearch] = useState("");
  const [dateRange, setDateRange] = useState<{
    start: Date | undefined;
    end: Date | undefined;
  }>({ start: undefined, end: undefined });
  const [sortBy, setSortBy] = useState<'date' | 'popular'>('date');

  const handleSearchChange = (value: string) => {
    setSearch(value);
    onFilterChange({ search: value, dateRange, sortBy });
  };

  const handleDateRangeChange = (range: typeof dateRange) => {
    setDateRange(range);
    onFilterChange({ search, dateRange: range, sortBy });
  };

  const handleSortChange = (value: typeof sortBy) => {
    setSortBy(value);
    onFilterChange({ search, dateRange, sortBy: value });
  };

  return (
    <Card className="p-4 mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search articles..."
            className="pl-10"
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full md:w-auto">
              <CalendarIcon className="w-4 h-4 mr-2" />
              {dateRange.start ? (
                dateRange.end ? (
                  <>
                    {format(dateRange.start, "LLL dd, y")} -{" "}
                    {format(dateRange.end, "LLL dd, y")}
                  </>
                ) : (
                  format(dateRange.start, "LLL dd, y")
                )
              ) : (
                "Pick a date"
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="range"
              selected={{
                from: dateRange.start,
                to: dateRange.end
              }}
              onSelect={(range) => 
                handleDateRangeChange({
                  start: range?.from,
                  end: range?.to
                })
              }
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <Button
          variant="outline"
          className="w-full md:w-auto"
          onClick={() => handleSortChange(sortBy === 'date' ? 'popular' : 'date')}
        >
          <SlidersHorizontal className="w-4 h-4 mr-2" />
          Sort by: {sortBy === 'date' ? 'Latest' : 'Popular'}
        </Button>
      </div>
    </Card>
  );
}
```