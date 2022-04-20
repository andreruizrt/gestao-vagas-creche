import { NextRequest, NextResponse } from 'next/server'
import { setUserCookie } from '../lib/auth'

export function middleware(req: NextRequest) {
  return setUserCookie(req, NextResponse.next())
}