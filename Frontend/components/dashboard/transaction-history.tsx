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
import { Search, Filter, MoreHorizontal } from "lucide-react"

const transactions = [
  {
    id: "T-1234",
    date: "2023-07-15",
    merchant: "Amazon.com",
    amount: 245.67,
    status: "completed",
    riskScore: "low",
  },
  {
    id: "T-1235",
    date: "2023-07-14",
    merchant: "Unknown Vendor",
    amount: 1892.0,
    status: "flagged",
    riskScore: "high",
  },
  {
    id: "T-1236",
    date: "2023-07-14",
    merchant: "Starbucks",
    amount: 5.67,
    status: "completed",
    riskScore: "low",
  },
  {
    id: "T-1237",
    date: "2023-07-13",
    merchant: "International Transfer",
    amount: 750.0,
    status: "under review",
    riskScore: "medium",
  },
  {
    id: "T-1238",
    date: "2023-07-12",
    merchant: "Netflix",
    amount: 15.99,
    status: "completed",
    riskScore: "low",
  },
  {
    id: "T-1239",
    date: "2023-07-12",
    merchant: "Unusual IP Address",
    amount: 350.0,
    status: "flagged",
    riskScore: "high",
  },
  {
    id: "T-1240",
    date: "2023-07-11",
    merchant: "Apple Store",
    amount: 999.0,
    status: "completed",
    riskScore: "low",
  },
]

export function TransactionHistory() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.merchant.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search transactions..."
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
              <TableHead>Transaction ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Merchant</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Risk</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">{transaction.id}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.merchant}</TableCell>
                <TableCell className="text-right">${transaction.amount.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      transaction.status === "completed"
                        ? "outline"
                        : transaction.status === "flagged"
                          ? "destructive"
                          : "secondary"
                    }
                  >
                    {transaction.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      transaction.riskScore === "high"
                        ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                        : transaction.riskScore === "medium"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                          : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                    }
                  >
                    {transaction.riskScore}
                  </Badge>
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
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuItem>Flag as suspicious</DropdownMenuItem>
                      <DropdownMenuItem>Mark as reviewed</DropdownMenuItem>
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

