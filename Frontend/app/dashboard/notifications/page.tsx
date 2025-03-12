"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/hooks/use-toast"
import { Bell, CheckCheck, AlertTriangle, Info, CreditCard, Shield, User, Settings } from "lucide-react"

// Sample notifications data
const initialNotifications = [
  {
    id: "notif-1",
    title: "Suspicious Login Detected",
    description: "A login attempt from an unrecognized device in Berlin, Germany was detected.",
    time: "10 minutes ago",
    type: "security",
    read: false,
    icon: Shield,
  },
  {
    id: "notif-2",
    title: "Credit Score Updated",
    description: "Your credit score has been updated. View the latest report.",
    time: "1 hour ago",
    type: "credit",
    read: false,
    icon: CreditCard,
  },
  {
    id: "notif-3",
    title: "New Investment Opportunity",
    description: "AI has identified a new investment opportunity matching your profile.",
    time: "3 hours ago",
    type: "investment",
    read: true,
    icon: Info,
  },
  {
    id: "notif-4",
    title: "System Maintenance",
    description: "Scheduled maintenance will occur on July 20, 2023 from 2:00 AM to 4:00 AM UTC.",
    time: "Yesterday",
    type: "system",
    read: true,
    icon: Settings,
  },
  {
    id: "notif-5",
    title: "New Team Member",
    description: "Sarah Johnson has joined your team as an Analyst.",
    time: "2 days ago",
    type: "team",
    read: true,
    icon: User,
  },
  {
    id: "notif-6",
    title: "Fraud Alert",
    description: "Multiple transactions in short succession detected on your account.",
    time: "3 days ago",
    type: "security",
    read: true,
    icon: AlertTriangle,
  },
]

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(initialNotifications)

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id: string) => {
    setNotifications(notifications.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((notif) => ({ ...notif, read: true })))

    toast({
      title: "All notifications marked as read",
      description: `${unreadCount} notifications have been marked as read.`,
    })
  }

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter((notif) => notif.id !== id))

    toast({
      title: "Notification deleted",
      description: "The notification has been removed.",
    })
  }

  const clearAllNotifications = () => {
    setNotifications([])

    toast({
      title: "All notifications cleared",
      description: "All notifications have been removed.",
    })
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Notifications</h2>
        <div className="flex gap-2">
          {unreadCount > 0 && (
            <Button variant="outline" onClick={markAllAsRead}>
              <CheckCheck className="mr-2 h-4 w-4" />
              Mark All as Read
            </Button>
          )}
          {notifications.length > 0 && (
            <Button variant="outline" onClick={clearAllNotifications}>
              Clear All
            </Button>
          )}
        </div>
      </div>
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">
            All
            {notifications.length > 0 && (
              <Badge className="ml-2" variant="secondary">
                {notifications.length}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="unread">
            Unread
            {unreadCount > 0 && (
              <Badge className="ml-2" variant="secondary">
                {unreadCount}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Notifications</CardTitle>
              <CardDescription>View and manage all your notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {notifications.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <Bell className="h-12 w-12 text-muted-foreground/50" />
                  <h3 className="mt-4 text-lg font-medium">No notifications</h3>
                  <p className="text-sm text-muted-foreground">
                    You're all caught up! There are no notifications to display.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`relative rounded-lg border p-4 ${notification.read ? "" : "bg-muted/50"}`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`rounded-full p-2 ${
                            notification.type === "security"
                              ? "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300"
                              : notification.type === "credit"
                                ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                                : notification.type === "investment"
                                  ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
                                  : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                          }`}
                        >
                          <notification.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">{notification.title}</h3>
                            <span className="text-xs text-muted-foreground">{notification.time}</span>
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">{notification.description}</p>
                          <div className="mt-2 flex gap-2">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                            {!notification.read && (
                              <Button variant="ghost" size="sm" onClick={() => markAsRead(notification.id)}>
                                Mark as Read
                              </Button>
                            )}
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-2"
                          onClick={() => deleteNotification(notification.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </Button>
                      </div>
                      {!notification.read && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-lg bg-primary" />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="unread" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Unread Notifications</CardTitle>
              <CardDescription>Notifications you haven't read yet</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {unreadCount === 0 ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <CheckCheck className="h-12 w-12 text-muted-foreground/50" />
                  <h3 className="mt-4 text-lg font-medium">All caught up!</h3>
                  <p className="text-sm text-muted-foreground">You have no unread notifications.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {notifications
                    .filter((notification) => !notification.read)
                    .map((notification) => (
                      <div key={notification.id} className="relative rounded-lg border p-4 bg-muted/50">
                        <div className="flex items-start gap-4">
                          <div
                            className={`rounded-full p-2 ${
                              notification.type === "security"
                                ? "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300"
                                : notification.type === "credit"
                                  ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                                  : notification.type === "investment"
                                    ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
                                    : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                            }`}
                          >
                            <notification.icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">{notification.title}</h3>
                              <span className="text-xs text-muted-foreground">{notification.time}</span>
                            </div>
                            <p className="mt-1 text-sm text-muted-foreground">{notification.description}</p>
                            <div className="mt-2 flex gap-2">
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                              <Button variant="ghost" size="sm" onClick={() => markAsRead(notification.id)}>
                                Mark as Read
                              </Button>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-2"
                            onClick={() => deleteNotification(notification.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4"
                            >
                              <line x1="18" y1="6" x2="6" y2="18" />
                              <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                          </Button>
                        </div>
                        <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-lg bg-primary" />
                      </div>
                    ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

