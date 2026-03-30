import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { decodeToken } from "../../lib/auth"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const token = cookieStore.get("auth_token")?.value

  // No token → redirect to login
  if (!token) {
    redirect("/login")
  }

  const user = await decodeToken(token)

  // Invalid token → redirect to login
  if (!user) {
    redirect("/login")
  }

  // Not admin → redirect to forbidden
  if (user.role !== "admin") {
    redirect("/forbidden")
  }

  return <>{children}</>
}