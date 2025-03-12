"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Edit, Trash2 } from "lucide-react"

// Sample scheduled reports data
const scheduledReports = [
  {
    id: "SCH-1234",
    name: "Weekly Financial Summary",
    type: "Financial Summary",
    frequency: "Weekly",
    nextRun: "2023-07-22",
    recipients: "finance@example.com",
    active: true,
  },
  {
    id: "SCH-1235",
    name: "Monthly Risk Analysis",
    type: "Risk Analysis",
    frequency: "Monthly",
    nextRun: "2023-08-01",
    recipients: "risk@example.com, ceo@example.com",
    active: true,
  },
  {
    id: "SCH-1236",
    name: "Daily Fraud Detection",
    type: "Fraud Detection",
    frequency: "Daily",
    nextRun: "2023-07-16",
    recipients: "security@example.com",
    active: true,
  },
  {
    id: "SCH-1237",
    name: "Quarterly Investment Performance",
    type: "Investment Performance",
    frequency: "Quarterly",
    nextRun: "2023-10-01",
    recipients: "investments@example.com",
    active: false,
  },
  {
    id: "SCH-1238",
    name: "Monthly Credit Risk Assessment",
    type: "Credit Risk",
    frequency: "Monthly",
    nextRun: "2023-08-01",
    recipients: "credit@example.com",
    active: true,
  },
]

export function ScheduledReports() {
  const [reports, setReports] = useState(scheduledReports)

  const handleToggleActive = (id: string) => {
    setReports(reports.map((report) => (report.id === id ? { ...report, active: !report.active } : report)))
  }

  const handleDelete = (id: string) => {
    setReports(reports.filter((report) => report.id !== id))
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button>Schedule New Report</Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Frequency</TableHead>
              <TableHead>Next Run</TableHead>
              <TableHead>Recipients</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reports.map((report) => (
              <TableRow key={report.id}>
                <TableCell className="font-medium">{report.name}</TableCell>
                <TableCell>{report.type}</TableCell>
                <TableCell>
                  <Badge variant="outline">{report.frequency}</Badge>
                </TableCell>
                <TableCell>{report.nextRun}</TableCell>
                <TableCell className="max-w-[200px] truncate" title={report.recipients}>
                  {report.recipients}
                </TableCell>
                <TableCell>
                  <Switch checked={report.active} onCheckedChange={() => handleToggleActive(report.id)} />
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>Run Now</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600" onClick={() => handleDelete(report.id)}>
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

