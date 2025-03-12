"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PortfolioPerformance } from "@/components/dashboard/portfolio-performance"
import { AssetAllocation } from "@/components/dashboard/asset-allocation"
import { InvestmentRecommendations } from "@/components/dashboard/investment-recommendations"
import { RiskReturnAnalysis } from "@/components/dashboard/risk-return-analysis"
import { InvestmentOpportunities } from "@/components/dashboard/investment-opportunities"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

export default function InvestmentsPage() {
  const [riskTolerance, setRiskTolerance] = useState(50)
  const [timeHorizon, setTimeHorizon] = useState(5)

  const getRiskProfile = (value: number) => {
    if (value < 30) return "Conservative"
    if (value < 70) return "Moderate"
    return "Aggressive"
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Investment Optimization</h2>
        <Button>Rebalance Portfolio</Button>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Portfolio Value</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,245,678</div>
                <p className="text-xs text-muted-foreground">+8.2% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">YTD Return</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12.4%</div>
                <p className="text-xs text-muted-foreground">+2.1% above benchmark</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Risk Profile</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{getRiskProfile(riskTolerance)}</div>
                <p className="text-xs text-muted-foreground">Based on your preferences</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Diversification Score</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">82/100</div>
                <p className="text-xs text-muted-foreground">Well diversified portfolio</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Portfolio Performance</CardTitle>
                <CardDescription>Historical performance and benchmark comparison</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <PortfolioPerformance />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Asset Allocation</CardTitle>
                <CardDescription>Current portfolio allocation by asset class</CardDescription>
              </CardHeader>
              <CardContent>
                <AssetAllocation />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Risk-Return Analysis</CardTitle>
                <CardDescription>Visualizing risk vs. return for your investments</CardDescription>
              </CardHeader>
              <CardContent>
                <RiskReturnAnalysis />
              </CardContent>
            </Card>
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Investment Preferences</CardTitle>
                <CardDescription>Adjust your risk tolerance and investment horizon</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="risk-tolerance">Risk Tolerance</Label>
                    <Badge variant="outline">{getRiskProfile(riskTolerance)}</Badge>
                  </div>
                  <Slider
                    id="risk-tolerance"
                    min={0}
                    max={100}
                    step={1}
                    value={[riskTolerance]}
                    onValueChange={(value) => setRiskTolerance(value[0])}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Conservative</span>
                    <span>Moderate</span>
                    <span>Aggressive</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="time-horizon">Investment Horizon (Years)</Label>
                    <Badge variant="outline">{timeHorizon} years</Badge>
                  </div>
                  <Slider
                    id="time-horizon"
                    min={1}
                    max={20}
                    step={1}
                    value={[timeHorizon]}
                    onValueChange={(value) => setTimeHorizon(value[0])}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Short-term</span>
                    <span>Medium-term</span>
                    <span>Long-term</span>
                  </div>
                </div>

                <Button className="w-full">Update Investment Profile</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="recommendations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI-Powered Investment Recommendations</CardTitle>
              <CardDescription>
                Personalized investment suggestions based on your profile and market conditions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <InvestmentRecommendations riskProfile={getRiskProfile(riskTolerance)} timeHorizon={timeHorizon} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="opportunities" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Investment Opportunities</CardTitle>
              <CardDescription>Explore new investment opportunities identified by our AI</CardDescription>
            </CardHeader>
            <CardContent>
              <InvestmentOpportunities riskProfile={getRiskProfile(riskTolerance)} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

