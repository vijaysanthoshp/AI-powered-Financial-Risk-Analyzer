"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "@/components/ui/chart"
import { Badge } from "@/components/ui/badge"

export function AssetAllocation() {
  // Asset allocation data
  const data = [
    { name: "US Stocks", value: 45, color: "#8884d8" },
    { name: "International Stocks", value: 20, color: "#82ca9d" },
    { name: "Bonds", value: 15, color: "#ffc658" },
    { name: "Real Estate", value: 10, color: "#ff8042" },
    { name: "Alternatives", value: 5, color: "#0088fe" },
    { name: "Cash", value: 5, color: "#00c49f" },
  ]

  return (
    <div className="space-y-4">
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {data.map((asset) => (
          <div key={asset.name} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: asset.color }}></div>
              <span className="text-sm">{asset.name}</span>
            </div>
            <Badge variant="outline">{asset.value}%</Badge>
          </div>
        ))}
      </div>
    </div>
  )
}

