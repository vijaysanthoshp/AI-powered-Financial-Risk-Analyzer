"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

const data = [
  {
    name: "Jan",
    Transactions: 4000,
    FraudAlerts: 240,
  },
  {
    name: "Feb",
    Transactions: 3000,
    FraudAlerts: 138,
  },
  {
    name: "Mar",
    Transactions: 2000,
    FraudAlerts: 98,
  },
  {
    name: "Apr",
    Transactions: 2780,
    FraudAlerts: 108,
  },
  {
    name: "May",
    Transactions: 1890,
    FraudAlerts: 89,
  },
  {
    name: "Jun",
    Transactions: 2390,
    FraudAlerts: 120,
  },
  {
    name: "Jul",
    Transactions: 3490,
    FraudAlerts: 178,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Transactions" fill="#8884d8" />
        <Bar dataKey="FraudAlerts" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  )
}

