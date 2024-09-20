/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    DATABASE_URL_SUPA: process.env.DATABASE_URL_SUPA,
    DIRECT_URL: process.env.DIRECT_URL,
    NEXT_PUBLIC_AUTHOR: process.env.NEXT_PUBLIC_AUTHOR,
    API_KEY: process.env.API_KEY,
    API_SECRET: process.env.API_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET
  }
}

export default nextConfig
