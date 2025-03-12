"use client"

import { useState, useEffect } from "react"

type ToastProps = {
  title: string
  description: string
  variant?: "default" | "destructive"
}

type ToastState = ToastProps & {
  id: string
  visible: boolean
}

export function toast({ title, description, variant = "default" }: ToastProps) {
  // This is a simple implementation for the demo
  // In a real app, you would use a more robust toast library
  const toastEvent = new CustomEvent("toast", {
    detail: {
      title,
      description,
      variant,
      id: Math.random().toString(36).substring(2, 9),
    },
  })

  document.dispatchEvent(toastEvent)
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastState[]>([])

  useEffect(() => {
    const handleToast = (e: Event) => {
      const detail = (e as CustomEvent).detail as ToastProps & { id: string }

      setToasts((prev) => [...prev, { ...detail, visible: true }])

      // Auto-dismiss after 5 seconds
      setTimeout(() => {
        setToasts((prev) => prev.map((toast) => (toast.id === detail.id ? { ...toast, visible: false } : toast)))

        // Remove from DOM after animation
        setTimeout(() => {
          setToasts((prev) => prev.filter((toast) => toast.id !== detail.id))
        }, 300)
      }, 5000)
    }

    document.addEventListener("toast", handleToast)

    return () => {
      document.removeEventListener("toast", handleToast)
    }
  }, [])

  return {
    toasts,
    dismiss: (id: string) => {
      setToasts((prev) => prev.map((toast) => (toast.id === id ? { ...toast, visible: false } : toast)))

      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id))
      }, 300)
    },
  }
}

