import { NextRequest } from 'next/server'

export default function middleware(request: NextRequest) {
  console.log('middleware')
}

export const config = {
  matcher: ['/', '/dashboard/:path*'],
}
