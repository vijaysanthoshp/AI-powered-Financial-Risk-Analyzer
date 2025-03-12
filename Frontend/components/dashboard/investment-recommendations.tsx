import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react"

interface InvestmentRecommendationsProps {
  riskProfile: string
  timeHorizon: number
}

export function InvestmentRecommendations({ riskProfile, timeHorizon }: InvestmentRecommendationsProps) {
  // Recommendations based on risk profile and time horizon
  const recommendations = [
    {
      title: "Increase US Tech Allocation",
      description: "Technology sector shows strong growth potential",
      impact: "High Growth Potential",
      risk: "Medium",
      timeframe: "Long-term",
      action: "Buy",
      suitable: riskProfile === "Aggressive" || (riskProfile === "Moderate" && timeHorizon > 5),
    },
    {
      title: "Add Treasury Inflation-Protected Securities",
      description: "Hedge against inflation risks in current market",
      impact: "Inflation Protection",
      risk: "Low",
      timeframe: "Medium-term",
      action: "Buy",
      suitable: riskProfile === "Conservative" || riskProfile === "Moderate",
    },
    {
      title: "Reduce Exposure to High-Yield Bonds",
      description: "Increasing default risk in current economic conditions",
      impact: "Risk Reduction",
      risk: "Medium",
      timeframe: "Short-term",
      action: "Sell",
      suitable: true,
    },
    {
      title: "Consider ESG Investments",
      description: "Sustainable investments showing strong performance",
      impact: "Balanced Returns",
      risk: "Medium",
      timeframe: "Long-term",
      action: "Research",
      suitable: timeHorizon > 3,
    },
    {
      title: "Diversify International Exposure",
      description: "Add emerging markets to capture global growth",
      impact: "Diversification",
      risk: "Medium-High",
      timeframe: "Long-term",
      action: "Buy",
      suitable: riskProfile === "Aggressive" || (riskProfile === "Moderate" && timeHorizon > 7),
    },
  ]

  // Filter recommendations based on risk profile and time horizon
  const filteredRecommendations = recommendations.filter((rec) => rec.suitable)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">Personalized Recommendations</h3>
          <p className="text-sm text-muted-foreground">
            Based on your {riskProfile.toLowerCase()} risk profile and {timeHorizon}-year time horizon
          </p>
        </div>
        <Button variant="outline" size="sm">
          Refresh
        </Button>
      </div>

      <div className="space-y-3">
        {filteredRecommendations.map((rec, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">{rec.title}</h4>
                    <Badge
                      variant={rec.action === "Buy" ? "default" : rec.action === "Sell" ? "destructive" : "outline"}
                    >
                      {rec.action}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{rec.description}</p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="flex items-center gap-1">
                      {rec.action === "Buy" ? (
                        <TrendingUp className="h-3 w-3" />
                      ) : rec.action === "Sell" ? (
                        <TrendingDown className="h-3 w-3" />
                      ) : (
                        <AlertTriangle className="h-3 w-3" />
                      )}
                      {rec.impact}
                    </Badge>
                    <Badge variant="outline">Risk: {rec.risk}</Badge>
                    <Badge variant="outline">{rec.timeframe}</Badge>
                  </div>
                </div>

                <Button variant="ghost" size="icon">
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

