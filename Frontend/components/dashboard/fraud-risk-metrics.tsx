"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"
import { Card, CardContent } from "@/components/ui/card"

const data = [
  { name: "Mon", score: 65 },
  { name: "Tue", score: 59 },
  { name: "Wed", score: 80 },
  { name: "Thu", score: 81 },
  { name: "Fri", score: 56 },
  { name: "Sat", score: 55 },
  { name: "Sun", score: 40 },
]

export function FraudRiskMetrics() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-muted-foreground">Detection Accuracy</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">False Positives</p>
          </CardContent>
        </Card>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Line type="monotone" dataKey="score" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>

      <div className="mt-4 text-sm">
        <p className="font-medium">Key Risk Indicators:</p>
        <ul className="mt-2 space-y-1 text-muted-foreground">
          <li>• Transaction velocity increased by 23%</li>
          <li>• New device logins up by 15%</li>
          <li>• Cross-border transactions increased by 8%</li>
        </ul>
      </div>
    </div>
  )
}

