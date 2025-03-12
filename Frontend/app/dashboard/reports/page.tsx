"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { DatePicker } from "@/components/ui/date-picker"
import { ReportsList } from "@/components/dashboard/reports-list"
import { ReportPreview } from "@/components/dashboard/report-preview"
import { ScheduledReports } from "@/components/dashboard/scheduled-reports"
import { FileDown, FileText, Calendar, Plus } from "lucide-react"

export default function ReportsPage() {
  const [reportType, setReportType] = useState("financial-summary")
  const [dateRange, setDateRange] = useState("last-30-days")
  const [isGenerating, setIsGenerating] = useState(false)
  const [showPreview, setShowPreview] = useState(false)

  const handleGenerateReport = () => {
    setIsGenerating(true)
    // Simulate report generation
    setTimeout(() => {
      setIsGenerating(false)
      setShowPreview(true)
    }, 2000)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Reports & Analytics</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Report
        </Button>
      </div>
      <Tabs defaultValue="generate" className="space-y-4">
        <TabsList>
          <TabsTrigger value="generate">Generate Report</TabsTrigger>
          <TabsTrigger value="saved">Saved Reports</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled Reports</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>
        <TabsContent value="generate" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Report Configuration</CardTitle>
                <CardDescription>Configure your report parameters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="report-type">Report Type</Label>
                  <Select value={reportType} onValueChange={setReportType}>
                    <SelectTrigger id="report-type">
                      <SelectValue placeholder="Select report type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="financial-summary">Financial Summary</SelectItem>
                      <SelectItem value="risk-analysis">Risk Analysis</SelectItem>
                      <SelectItem value="fraud-detection">Fraud Detection</SelectItem>
                      <SelectItem value="investment-performance">Investment Performance</SelectItem>
                      <SelectItem value="credit-risk">Credit Risk</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date-range">Date Range</Label>
                  <Select value={dateRange} onValueChange={setDateRange}>
                    <SelectTrigger id="date-range">
                      <SelectValue placeholder="Select date range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="last-7-days">Last 7 Days</SelectItem>
                      <SelectItem value="last-30-days">Last 30 Days</SelectItem>
                      <SelectItem value="last-90-days">Last 90 Days</SelectItem>
                      <SelectItem value="year-to-date">Year to Date</SelectItem>
                      <SelectItem value="custom">Custom Range</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {dateRange === "custom" && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Start Date</Label>
                      <DatePicker />
                    </div>
                    <div className="space-y-2">
                      <Label>End Date</Label>
                      <DatePicker />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="report-format">Format</Label>
                  <Select defaultValue="pdf">
                    <SelectTrigger id="report-format">
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pdf">PDF</SelectItem>
                      <SelectItem value="excel">Excel</SelectItem>
                      <SelectItem value="csv">CSV</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3 pt-2">
                  <Label>Include Sections</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="section-summary" defaultChecked />
                      <label
                        htmlFor="section-summary"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Executive Summary
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="section-charts" defaultChecked />
                      <label
                        htmlFor="section-charts"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Charts & Visualizations
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="section-data" defaultChecked />
                      <label
                        htmlFor="section-data"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Detailed Data Tables
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="section-recommendations" defaultChecked />
                      <label
                        htmlFor="section-recommendations"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        AI Recommendations
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Save as Template</Button>
                <Button onClick={handleGenerateReport} disabled={isGenerating}>
                  {isGenerating ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Generating...
                    </>
                  ) : (
                    <>
                      <FileText className="mr-2 h-4 w-4" />
                      Generate Report
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>

            <Card className="md:col-span-1">
              {showPreview ? (
                <>
                  <CardHeader>
                    <CardTitle>Report Preview</CardTitle>
                    <CardDescription>Preview of your generated report</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ReportPreview reportType={reportType} />
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={() => setShowPreview(false)}>
                      Edit Report
                    </Button>
                    <div className="flex space-x-2">
                      <Button variant="outline">
                        <Calendar className="mr-2 h-4 w-4" />
                        Schedule
                      </Button>
                      <Button>
                        <FileDown className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </CardFooter>
                </>
              ) : (
                <>
                  <CardHeader>
                    <CardTitle>Report Information</CardTitle>
                    <CardDescription>Additional report details and options</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="report-name">Report Name</Label>
                      <Input id="report-name" placeholder="Enter report name" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="report-description">Description (Optional)</Label>
                      <Input id="report-description" placeholder="Enter description" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="report-recipients">Recipients (Optional)</Label>
                      <Input id="report-recipients" placeholder="Enter email addresses" />
                      <p className="text-xs text-muted-foreground">Separate multiple email addresses with commas</p>
                    </div>

                    <div className="flex items-center space-x-2 pt-2">
                      <Checkbox id="schedule-report" />
                      <label
                        htmlFor="schedule-report"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Schedule this report to run automatically
                      </label>
                    </div>
                  </CardContent>
                </>
              )}
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="saved" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Saved Reports</CardTitle>
              <CardDescription>Access your previously generated reports</CardDescription>
            </CardHeader>
            <CardContent>
              <ReportsList />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="scheduled" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Scheduled Reports</CardTitle>
              <CardDescription>Manage your automated report schedules and delivery settings</CardDescription>
            </CardHeader>
            <CardContent>
              <ScheduledReports />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

