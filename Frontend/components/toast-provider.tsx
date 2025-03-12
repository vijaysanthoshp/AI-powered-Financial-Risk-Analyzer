"use client"

import { useToast } from "@/hooks/use-toast"
import { useEffect, useState } from "react"
import { X } from "lucide-react"

export function ToastProvider() {
  const { toasts, dismiss } = useToast()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="fixed bottom-0 right-0 z-50 flex flex-col gap-2 p-4 md:max-w-[420px]">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`
            ${toast.visible ? "animate-in fade-in slide-in-from-bottom-5" : "animate-out fade-out slide-out-to-right-5"}
            ${toast.variant === "destructive" ? "border-red-500 bg-red-50 text-red-800 dark:bg-red-900 dark:text-red-300" : "border-border bg-background text-foreground"}
            flex w-full items-start gap-2 rounded-md border p-4 shadow-md
          `}
        >
          <div className="flex-1">
            <h3 className="font-medium">{toast.title}</h3>
            <p className="text-sm text-muted-foreground">{toast.description}</p>
          </div>
          <button onClick={() => dismiss(toast.id)} className="rounded-md p-1 hover:bg-muted">
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  )
}

