import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

const alerts = [
  {
    id: 1,
    title: "Unusual Transaction Pattern",
    description: "Multiple transactions in short succession",
    timestamp: "Today, 10:42 AM",
    severity: "critical",
  },
  {
    id: 2,
    title: "Login from New Location",
    description: "First time login detected from Berlin, Germany",
    timestamp: "Today, 8:15 AM",
    severity: "moderate",
  },
  {
    id: 3,
    title: "Large Transaction",
    description: "Transaction amount exceeds typical spending",
    timestamp: "Yesterday, 11:30 PM",
    severity: "moderate",
  },
  {
    id: 4,
    title: "Multiple Failed Login Attempts",
    description: "5 failed login attempts detected",
    timestamp: "Yesterday, 6:22 PM",
    severity: "critical",
  },
  {
    id: 5,
    title: "Suspicious IP Address",
    description: "Login attempt from flagged IP address",
    timestamp: "Jul 12, 2023, 3:45 PM",
    severity: "low",
  },
]

export function FraudAlerts() {
  return (
    <ScrollArea className="h-[300px]">
      <div className="space-y-4">
        {alerts.map((alert) => (
          <Card key={alert.id} className="border-l-4 border-l-red-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="font-medium">{alert.title}</div>
                <Badge
                  variant={
                    alert.severity === "critical"
                      ? "destructive"
                      : alert.severity === "moderate"
                        ? "default"
                        : "outline"
                  }
                >
                  {alert.severity}
                </Badge>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{alert.description}</p>
              <p className="mt-2 text-xs text-muted-foreground">{alert.timestamp}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
  )
}

