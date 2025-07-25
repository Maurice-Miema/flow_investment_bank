import React from 'react'
import HeroSection from '@/components/HeroSection'
import Apropos from '@/components/Apropos'
import Service from '@/components/Service'
import Equipe from '@/components/Equipe'
import Contact from '@/components/Contact'
import BLogs from '@/components/Blogs'

function page() {
  return (
    <main className='m-0 p-0 box-border bg-gray-100'>
      < HeroSection/>
      < Apropos />
      < Service />
      <BLogs />
      < Equipe />
      < Contact />
    </main>
  )
}

export default page
