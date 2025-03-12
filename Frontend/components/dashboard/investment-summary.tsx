"use client"

import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "@/components/ui/chart"
import { Card, CardContent } from "@/components/ui/card"

const data = [
  { name: "Stocks", value: 45 },
  { name: "Bonds", value: 25 },
  { name: "Real Estate", value: 15 },
  { name: "Crypto", value: 10 },
  { name: "Cash", value: 5 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

export function InvestmentSummary() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Card>
        <CardContent className="p-6">
          <h3 className="mb-4 text-lg font-medium">Portfolio Allocation</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <h3 className="mb-4 text-lg font-medium">Investment Recommendations</h3>
          <div className="space-y-4">
            <div className="rounded-lg border p-3">
              <div className="font-medium">Increase Bond Allocation</div>
              <p className="text-sm text-muted-foreground">Market volatility suggests increasing stable assets</p>
              <div className="mt-2 text-xs text-green-600">Expected Impact: Lower Risk</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="font-medium">Diversify Tech Stocks</div>
              <p className="text-sm text-muted-foreground">Current portfolio is overweight in technology sector</p>
              <div className="mt-2 text-xs text-blue-600">Expected Impact: Better Balance</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="font-medium">Consider ESG Investments</div>
              <p className="text-sm text-muted-foreground">Sustainable investments showing strong performance</p>
              <div className="mt-2 text-xs text-purple-600">Expected Impact: Long-term Growth</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

