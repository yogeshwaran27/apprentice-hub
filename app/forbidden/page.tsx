import Link from "next/link"

export default function ForbiddenPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold text-red-600">403</h1>
      <p className="text-lg text-gray-600">
        You don't have permission to access this page.
      </p>
      <Link href="/dashboard" className="text-blue-600 hover:underline">
        Go to Dashboard
      </Link>
    </div>
  )
}