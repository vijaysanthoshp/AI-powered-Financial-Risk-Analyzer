"use client"

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const data = [
  { name: "Jan", score: 75 },
  { name: "Feb", score: 82 },
  { name: "Mar", score: 78 },
  { name: "Apr", score: 69 },
  { name: "May", score: 72 },
  { name: "Jun", score: 65 },
  { name: "Jul", score: 60 },
]

export function RiskScoreCard() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold">65/100</p>
          <p className="text-xs text-muted-foreground">Current Risk Score</p>
        </div>
        <Badge variant="outline" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
          Medium Risk
        </Badge>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Area type="monotone" dataKey="score" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
      <Card>
        <CardContent className="p-4">
          <div className="text-sm">
            <p className="font-medium">Risk Factors:</p>
            <ul className="mt-2 space-y-1 text-muted-foreground">
              <li>• Unusual transaction patterns</li>
              <li>• Recent login from new location</li>
              <li>• Multiple failed authentication attempts</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

