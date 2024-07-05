"use client"

import React, { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

function Page() {
  const router = useRouter()

  useEffect(() => {
    router.replace(`/login`)
  }, [])

  return (
    <div>Loading...</div>
  )
}

export default Page