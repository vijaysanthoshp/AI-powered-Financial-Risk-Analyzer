import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function CreditFactors() {
  // Credit risk factors data
  const factors = [
    {
      name: "Payment History",
      impact: "High",
      score: 85,
      description: "Consistent on-time payments with few delinquencies",
    },
    {
      name: "Credit Utilization",
      impact: "High",
      score: 65,
      description: "Accounts are using 35% of available credit",
    },
    {
      name: "Credit Age",
      impact: "Medium",
      score: 72,
      description: "Average account age is 6.5 years",
    },
    {
      name: "Account Mix",
      impact: "Medium",
      score: 78,
      description: "Good diversity of credit types",
    },
    {
      name: "Recent Inquiries",
      impact: "Low",
      score: 90,
      description: "Few recent credit applications",
    },
  ]

  return (
    <div className="space-y-4">
      {factors.map((factor) => (
        <Card key={factor.name} className="overflow-hidden">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="font-medium">{factor.name}</div>
                <div className="text-xs text-muted-foreground">{factor.description}</div>
              </div>
              <div className="text-sm font-medium">{factor.score}/100</div>
            </div>
            <Progress
              value={factor.score}
              className="h-2"
              indicatorClassName={
                factor.score >= 80 ? "bg-green-500" : factor.score >= 60 ? "bg-yellow-500" : "bg-red-500"
              }
            />
            <div className="mt-1 text-xs text-right text-muted-foreground">Impact: {factor.impact}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

