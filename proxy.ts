import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Define route permissions
const routePermissions: Record<string, string[]> = {
  '/admin': ['admin'],
  '/dashboard': ['admin', 'user', 'moderator'],
  '/moderator': ['admin', 'moderator'],
  '/profile': ['admin', 'user', 'moderator'],
}

const PUBLIC_ROUTES = ['/', '/login', '/register', '/about']
const LOGIN_ROUTE = '/login'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow public routes
  if (PUBLIC_ROUTES.includes(pathname)) {
    return NextResponse.next()
  }

  // Get token and role from cookies (or headers)
  const token = request.cookies.get('auth_token')?.value
  const userRole = request.cookies.get('user_role')?.value

  // Not authenticated → redirect to login
  if (!token) {
    const loginUrl = new URL(LOGIN_ROUTE, request.url)
    loginUrl.searchParams.set('callbackUrl', pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Check role-based access
  const requiredRoles = routePermissions[pathname]
  if (requiredRoles && userRole && !requiredRoles.includes(userRole)) {
    // Authenticated but unauthorized → redirect to forbidden page
    return NextResponse.redirect(new URL('/forbidden', request.url))
  }

  return NextResponse.next()
}

// Configure which paths middleware runs on
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}