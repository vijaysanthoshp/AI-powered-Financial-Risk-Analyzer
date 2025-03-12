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

export function PortfolioPerformance() {
  // Portfolio performance data
  const data = [
    { month: "Jan", portfolio: 100, benchmark: 100 },
    { month: "Feb", portfolio: 105, benchmark: 102 },
    { month: "Mar", portfolio: 103, benchmark: 101 },
    { month: "Apr", portfolio: 107, benchmark: 103 },
    { month: "May", portfolio: 110, benchmark: 105 },
    { month: "Jun", portfolio: 112, benchmark: 106 },
    { month: "Jul", portfolio: 115, benchmark: 108 },
    { month: "Aug", portfolio: 118, benchmark: 110 },
    { month: "Sep", portfolio: 122, benchmark: 112 },
    { month: "Oct", portfolio: 125, benchmark: 114 },
    { month: "Nov", portfolio: 128, benchmark: 116 },
    { month: "Dec", portfolio: 132, benchmark: 118 },
  ]

  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[90, 140]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="portfolio"
            name="Your Portfolio"
            stroke="#8884d8"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="benchmark"
            name="Market Benchmark"
            stroke="#82ca9d"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

