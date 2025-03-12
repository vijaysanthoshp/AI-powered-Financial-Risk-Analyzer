import { redirect } from "next/navigation"

export default function CatchAllPage({ params }: { params: { slug: string[] } }) {
  // Redirect to the dashboard page
  redirect("/dashboard")
}

