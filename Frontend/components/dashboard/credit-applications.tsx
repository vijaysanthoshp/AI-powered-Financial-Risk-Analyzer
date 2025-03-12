"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, Filter, MoreHorizontal, CheckCircle, XCircle } from "lucide-react"

// Sample credit applications data
const applications = [
  {
    id: "APP-1234",
    applicant: "John Smith",
    type: "Mortgage",
    amount: 250000,
    date: "2023-07-15",
    score: 720,
    status: "pending",
    aiRecommendation: "approve",
  },
  {
    id: "APP-1235",
    applicant: "Sarah Johnson",
    type: "Auto Loan",
    amount: 35000,
    date: "2023-07-14",
    score: 680,
    status: "pending",
    aiRecommendation: "review",
  },
  {
    id: "APP-1236",
    applicant: "Michael Brown",
    type: "Personal Loan",
    amount: 15000,
    date: "2023-07-14",
    score: 590,
    status: "pending",
    aiRecommendation: "deny",
  },
  {
    id: "APP-1237",
    applicant: "Emily Davis",
    type: "Credit Card",
    amount: 10000,
    date: "2023-07-13",
    score: 750,
    status: "approved",
    aiRecommendation: "approve",
  },
  {
    id: "APP-1238",
    applicant: "Robert Wilson",
    type: "Business Loan",
    amount: 75000,
    date: "2023-07-12",
    score: 705,
    status: "pending",
    aiRecommendation: "approve",
  },
  {
    id: "APP-1239",
    applicant: "Jennifer Lee",
    type: "Mortgage",
    amount: 320000,
    date: "2023-07-12",
    score: 630,
    status: "denied",
    aiRecommendation: "deny",
  },
]

export function CreditApplications() {
  const [searchTerm, setSearchTerm] = useState("")
  const [applicationData, setApplicationData] = useState(applications)

  const filteredApplications = applicationData.filter(
    (app) =>
      app.applicant.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.type.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleApprove = (id: string) => {
    setApplicationData(applicationData.map((app) => (app.id === id ? { ...app, status: "approved" } : app)))
  }

  const handleDeny = (id: string) => {
    setApplicationData(applicationData.map((app) => (app.id === id ? { ...app, status: "denied" } : app)))
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search applications..."
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
              <TableHead>Application ID</TableHead>
              <TableHead>Applicant</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Credit Score</TableHead>
              <TableHead>AI Recommendation</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredApplications.map((application) => (
              <TableRow key={application.id}>
                <TableCell className="font-medium">{application.id}</TableCell>
                <TableCell>{application.applicant}</TableCell>
                <TableCell>{application.type}</TableCell>
                <TableCell className="text-right">${application.amount.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      application.score >= 700
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        : application.score >= 650
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                    }
                  >
                    {application.score}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      application.aiRecommendation === "approve"
                        ? "outline"
                        : application.aiRecommendation === "deny"
                          ? "destructive"
                          : "secondary"
                    }
                  >
                    {application.aiRecommendation}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      application.status === "approved"
                        ? "outline"
                        : application.status === "denied"
                          ? "destructive"
                          : "secondary"
                    }
                    className={
                      application.status === "approved"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        : application.status === "denied"
                          ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                          : ""
                    }
                  >
                    {application.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  {application.status === "pending" ? (
                    <div className="flex space-x-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleApprove(application.id)}
                        className="text-green-600 hover:text-green-700 hover:bg-green-50"
                      >
                        <CheckCircle className="h-4 w-4" />
                        <span className="sr-only">Approve</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeny(application.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <XCircle className="h-4 w-4" />
                        <span className="sr-only">Deny</span>
                      </Button>
                    </div>
                  ) : (
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
                        <DropdownMenuItem>View details</DropdownMenuItem>
                        <DropdownMenuItem>View documents</DropdownMenuItem>
                        <DropdownMenuItem>Contact applicant</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

