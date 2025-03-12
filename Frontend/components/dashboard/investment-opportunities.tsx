import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowUpRight } from "lucide-react"

interface InvestmentOpportunitiesProps {
  riskProfile: string
}

export function InvestmentOpportunities({ riskProfile }: InvestmentOpportunitiesProps) {
  // Investment opportunities based on risk profile
  const opportunities = [
    {
      name: "AI & Machine Learning ETF",
      ticker: "AIML",
      description: "Exposure to companies leading in artificial intelligence",
      expectedReturn: 15.2,
      risk: "High",
      matchScore: riskProfile === "Aggressive" ? 92 : riskProfile === "Moderate" ? 75 : 45,
      trend: "Bullish",
    },
    {
      name: "Green Energy Fund",
      ticker: "GRNE",
      description: "Portfolio of renewable energy companies",
      expectedReturn: 12.8,
      risk: "Medium-High",
      matchScore: riskProfile === "Aggressive" ? 85 : riskProfile === "Moderate" ? 80 : 60,
      trend: "Bullish",
    },
    {
      name: "Healthcare Innovation",
      ticker: "HLTH",
      description: "Companies transforming healthcare with technology",
      expectedReturn: 11.5,
      risk: "Medium",
      matchScore: riskProfile === "Aggressive" ? 78 : riskProfile === "Moderate" ? 88 : 70,
      trend: "Neutral",
    },
    {
      name: "Dividend Aristocrats",
      ticker: "DIVD",
      description: "Companies with consistent dividend growth",
      expectedReturn: 8.3,
      risk: "Low-Medium",
      matchScore: riskProfile === "Aggressive" ? 65 : riskProfile === "Moderate" ? 85 : 95,
      trend: "Bullish",
    },
    {
      name: "Municipal Bond Fund",
      ticker: "MUNI",
      description: "Tax-advantaged municipal bonds portfolio",
      expectedReturn: 5.2,
      risk: "Low",
      matchScore: riskProfile === "Aggressive" ? 45 : riskProfile === "Moderate" ? 75 : 98,
      trend: "Neutral",
    },
  ]

  // Sort opportunities by match score
  const sortedOpportunities = [...opportunities].sort((a, b) => b.matchScore - a.matchScore)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">Market Opportunities</h3>
          <p className="text-sm text-muted-foreground">
            AI-identified investment opportunities matching your {riskProfile.toLowerCase()} profile
          </p>
        </div>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      <div className="space-y-3">
        {sortedOpportunities.map((opportunity, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">{opportunity.name}</h4>
                      <p className="text-xs text-muted-foreground">{opportunity.ticker}</p>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        opportunity.trend === "Bullish"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          : opportunity.trend === "Bearish"
                            ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                            : ""
                      }
                    >
                      {opportunity.trend}
                    </Badge>
                  </div>

                  <p className="text-sm">{opportunity.description}</p>

                  <div className="flex justify-between text-sm">
                    <span>
                      Expected Return: <span className="font-medium">{opportunity.expectedReturn}%</span>
                    </span>
                    <span>
                      Risk: <span className="font-medium">{opportunity.risk}</span>
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>Profile Match</span>
                      <span className="font-medium">{opportunity.matchScore}%</span>
                    </div>
                    <Progress
                      value={opportunity.matchScore}
                      className="h-2"
                      indicatorClassName={
                        opportunity.matchScore >= 80
                          ? "bg-green-500"
                          : opportunity.matchScore >= 60
                            ? "bg-yellow-500"
                            : "bg-red-500"
                      }
                    />
                  </div>
                </div>

                <Button variant="ghost" size="icon" className="ml-2">
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

