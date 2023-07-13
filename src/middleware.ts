import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
  const token = request.cookies.get('rscore.token')?.value

  // const pathname = request.nextUrl.pathname

  const signInURL = new URL('/', request.url)

  if (!token) {
    return NextResponse.redirect(signInURL)
  }
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
