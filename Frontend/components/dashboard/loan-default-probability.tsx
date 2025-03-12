"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function LoanDefaultProbability() {
  // Loan default probability data
  const data = [
    { category: "Mortgage", probability: 1.2 },
    { category: "Auto", probability: 2.8 },
    { category: "Credit Card", probability: 4.5 },
    { category: "Personal", probability: 5.7 },
    { category: "Business", probability: 3.2 },
  ]

  return (
    <div className="space-y-4">
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis label={{ value: "Default Probability (%)", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Bar dataKey="probability" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Overall Default Probability:</span>
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
              3.2% (Medium Risk)
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

