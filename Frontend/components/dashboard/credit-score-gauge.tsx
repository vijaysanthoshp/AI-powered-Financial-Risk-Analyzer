"use client"

import { Cell, Pie, PieChart, ResponsiveContainer } from "@/components/ui/chart"
import { Progress } from "@/components/ui/progress"

export function CreditScoreGauge() {
  // Credit score distribution data
  const data = [
    { name: "Excellent (750+)", value: 35, color: "#4ade80" },
    { name: "Good (700-749)", value: 25, color: "#a3e635" },
    { name: "Fair (650-699)", value: 20, color: "#facc15" },
    { name: "Poor (600-649)", value: 15, color: "#fb923c" },
    { name: "Very Poor (<600)", value: 5, color: "#f87171" },
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
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Current Average Score: 682</span>
            <span className="font-medium">Fair</span>
          </div>
          <Progress value={68} className="h-2" />
        </div>

        <div className="grid grid-cols-5 text-xs text-center">
          <div>Very Poor</div>
          <div>Poor</div>
          <div>Fair</div>
          <div>Good</div>
          <div>Excellent</div>
        </div>
      </div>
    </div>
  )
}

