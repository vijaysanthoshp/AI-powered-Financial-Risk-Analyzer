"use client"

import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "@/components/ui/chart"

export function RiskReturnAnalysis() {
  // Risk-return data for different investments
  const data = [
    { name: "US Large Cap", risk: 15, return: 10, size: 100 },
    { name: "US Small Cap", risk: 22, return: 12, size: 80 },
    { name: "International Developed", risk: 18, return: 9, size: 70 },
    { name: "Emerging Markets", risk: 25, return: 11, size: 60 },
    { name: "REITs", risk: 17, return: 8, size: 50 },
    { name: "Corporate Bonds", risk: 8, return: 5, size: 60 },
    { name: "Treasury Bonds", risk: 5, return: 3, size: 70 },
    { name: "High Yield Bonds", risk: 12, return: 7, size: 40 },
    { name: "Your Portfolio", risk: 14, return: 9.5, size: 120 },
  ]

  return (
    <div className="h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis
            type="number"
            dataKey="risk"
            name="Risk (%)"
            domain={[0, 30]}
            label={{ value: "Risk (%)", position: "bottom" }}
          />
          <YAxis
            type="number"
            dataKey="return"
            name="Return (%)"
            domain={[0, 15]}
            label={{ value: "Return (%)", angle: -90, position: "insideLeft" }}
          />
          <ZAxis type="number" dataKey="size" range={[40, 160]} />
          <Tooltip
            cursor={{ strokeDasharray: "3 3" }}
            formatter={(value: any, name: any) => [`${value}%`, name]}
            labelFormatter={(value) => {
              const item = data.find((d) => d.risk === value)
              return item ? item.name : ""
            }}
          />
          <Scatter name="Investments" data={data} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  )
}

