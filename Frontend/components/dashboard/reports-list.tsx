"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, FileDown, Eye, Trash2 } from "lucide-react"

// Sample reports data
const reports = [
  {
    id: "REP-1234",
    name: "Q2 Financial Summary",
    type: "Financial Summary",
    created: "2023-07-15",
    format: "PDF",
    size: "2.4 MB",
  },
  {
    id: "REP-1235",
    name: "Monthly Risk Analysis - June",
    type: "Risk Analysis",
    created: "2023-07-01",
    format: "Excel",
    size: "4.1 MB",
  },
  {
    id: "REP-1236",
    name: "Fraud Detection Report",
    type: "Fraud Detection",
    created: "2023-06-28",
    format: "PDF",
    size: "1.8 MB",
  },
  {
    id: "REP-1237",
    name: "Investment Performance Q2",
    type: "Investment Performance",
    created: "2023-06-15",
    format: "PDF",
    size: "3.2 MB",
  },
  {
    id: "REP-1238",
    name: "Credit Risk Assessment",
    type: "Credit Risk",
    created: "2023-06-10",
    format: "Excel",
    size: "5.7 MB",
  },
  {
    id: "REP-1239",
    name: "Annual Compliance Report",
    type: "Compliance",
    created: "2023-05-30",
    format: "PDF",
    size: "8.3 MB",
  },
]

export function ReportsList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [reportData, setReportData] = useState(reports)

  const filteredReports = reportData.filter(
    (report) =>
      report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.type.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleDelete = (id: string) => {
    setReportData(reportData.filter((report) => report.id !== id))
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search reports..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Report ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Format</TableHead>
              <TableHead>Size</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredReports.map((report) => (
              <TableRow key={report.id}>
                <TableCell className="font-medium">{report.id}</TableCell>
                <TableCell>{report.name}</TableCell>
                <TableCell>{report.type}</TableCell>
                <TableCell>{report.created}</TableCell>
                <TableCell>
                  <Badge variant="outline">{report.format}</Badge>
                </TableCell>
                <TableCell>{report.size}</TableCell>
                <TableCell>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <FileDown className="h-4 w-4" />
                      <span className="sr-only">Download</span>
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(report.id)}>
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

