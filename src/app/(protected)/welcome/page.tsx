import IntroPointers from '@/features/login/intro-pointers'
import Link from 'next/link'
import React from 'react'

function Welcome() {
  return (
    <div className="hero h-4/5 bg-base-200">
    <div className="hero-content">
      <div className="max-w-md">
          <IntroPointers />
          <Link href="/dashboard"><button className="btn bg-base-100 btn-outline">Get Started</button></Link>
      </div>
    </div>
  </div>
  )
}

export default Welcome