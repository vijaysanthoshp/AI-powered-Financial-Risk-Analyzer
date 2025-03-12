import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"

interface ReportPreviewProps {
  reportType: string
}

export function ReportPreview({ reportType }: ReportPreviewProps) {
  // Different preview based on report type
  if (reportType === "financial-summary") {
    return (
      <div className="space-y-4">
        <div className="rounded-lg border p-4">
          <h3 className="font-medium mb-2">Executive Summary</h3>
          <p className="text-sm text-muted-foreground">
            This financial summary report provides an overview of key financial metrics for the period ending June 30,
            2023. Overall financial health remains strong with a 12% increase in revenue compared to the previous
            quarter.
          </p>
        </div>

        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={[
                { month: "Jan", revenue: 4000, expenses: 2400 },
                { month: "Feb", revenue: 3000, expenses: 1398 },
                { month: "Mar", revenue: 2000, expenses: 9800 },
                { month: "Apr", revenue: 2780, expenses: 3908 },
                { month: "May", revenue: 1890, expenses: 4800 },
                { month: "Jun", revenue: 2390, expenses: 3800 },
              ]}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#8884d8" name="Revenue" />
              <Bar dataKey="expenses" fill="#82ca9d" name="Expenses" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    )
  }

  if (reportType === "risk-analysis") {
    return (
      <div className="space-y-4">
        <div className="rounded-lg border p-4">
          <h3 className="font-medium mb-2">Risk Analysis Summary</h3>
          <p className="text-sm text-muted-foreground">
            This report analyzes key risk factors across the organization. Overall risk profile has improved by 8%
            compared to the previous assessment period.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <h4 className="text-sm font-medium mb-2">Risk Distribution</h4>
              <div className="h-[150px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: "High", value: 15, color: "#ef4444" },
                        { name: "Medium", value: 35, color: "#f97316" },
                        { name: "Low", value: 50, color: "#22c55e" },
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {[
                        { name: "High", value: 15, color: "#ef4444" },
                        { name: "Medium", value: 35, color: "#f97316" },
                        { name: "Low", value: 50, color: "#22c55e" },
                      ].map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 space-y-4">
              <h4 className="text-sm font-medium">Key Risk Indicators</h4>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Fraud Risk</span>
                  <span>Medium (65/100)</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Credit Risk</span>
                  <span>Low (32/100)</span>
                </div>
                <Progress value={32} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Market Risk</span>
                  <span>High (78/100)</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (reportType === "credit-risk") {
    return (
      <div className="space-y-4">
        <div className="rounded-lg border p-4">
          <h3 className="font-medium mb-2">Credit Risk Assessment</h3>
          <p className="text-sm text-muted-foreground">
            This report provides a comprehensive analysis of the current credit risk portfolio. Overall credit quality
            has improved with a 0.5% decrease in default rates.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <h4 className="text-sm font-medium mb-2">Credit Score Distribution</h4>
              <div className="h-[150px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: "Excellent", value: 35, color: "#22c55e" },
                        { name: "Good", value: 25, color: "#84cc16" },
                        { name: "Fair", value: 20, color: "#facc15" },
                        { name: "Poor", value: 15, color: "#f97316" },
                        { name: "Very Poor", value: 5, color: "#ef4444" },
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {[
                        { name: "Excellent", value: 35, color: "#22c55e" },
                        { name: "Good", value: 25, color: "#84cc16" },
                        { name: "Fair", value: 20, color: "#facc15" },
                        { name: "Poor", value: 15, color: "#f97316" },
                        { name: "Very Poor", value: 5, color: "#ef4444" },
                      ].map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h4 className="text-sm font-medium mb-2">Default Rates by Category</h4>
              <div className="h-[150px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={[
                      { category: "Mortgage", rate: 1.2 },
                      { category: "Auto", rate: 2.8 },
                      { category: "Credit Card", rate: 4.5 },
                      { category: "Personal", rate: 5.7 },
                      { category: "Business", rate: 3.2 },
                    ]}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="rate" fill="#8884d8" name="Default Rate (%)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Default preview
  return (
    <div className="space-y-4">
      <div className="rounded-lg border p-4">
        <h3 className="font-medium mb-2">Report Preview</h3>
        <p className="text-sm text-muted-foreground">
          This is a preview of your {reportType.replace(/-/g, " ")} report. The full report will include detailed
          analysis, charts, and recommendations.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 flex items-center justify-center h-[150px]">
            <p className="text-muted-foreground text-sm">Chart preview will appear here</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center justify-center h-[150px]">
            <p className="text-muted-foreground text-sm">Data preview will appear here</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

