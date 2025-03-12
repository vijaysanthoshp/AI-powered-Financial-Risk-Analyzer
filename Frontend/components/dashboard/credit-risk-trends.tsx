"use client"

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"

export function CreditRiskTrends() {
  // Credit risk trend data
  const data = [
    { month: "Jan", defaultRate: 3.8, avgScore: 665 },
    { month: "Feb", defaultRate: 3.7, avgScore: 668 },
    { month: "Mar", defaultRate: 3.6, avgScore: 670 },
    { month: "Apr", defaultRate: 3.5, avgScore: 673 },
    { month: "May", defaultRate: 3.4, avgScore: 675 },
    { month: "Jun", defaultRate: 3.3, avgScore: 678 },
    { month: "Jul", defaultRate: 3.2, avgScore: 682 },
  ]

  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" domain={[600, 800]} />
          <Tooltip />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="defaultRate"
            name="Default Rate (%)"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line yAxisId="right" type="monotone" dataKey="avgScore" name="Avg Credit Score" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

