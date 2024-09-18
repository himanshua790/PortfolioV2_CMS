import { NextResponse } from 'next/server'
export async function GET() {
  console.log(process.env)
  return NextResponse.json({ statusCode: 200, message: 'ok' })
}