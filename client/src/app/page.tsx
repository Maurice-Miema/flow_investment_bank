'use client'
import React, { useState } from 'react'
import HeroSection from '@/components/HeroSection'
import Apropos from '@/components/Apropos'
import Service from '@/components/Service'
import Contact from '@/components/Contact'
import BLogs from '@/components/Blogs'
import Footer from '@/components/Footer'
import NavMobile from '@/components/Navmobil'

function page() {
  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <main className='m-0 p-0 box-border bg-gray-100'>
      <NavMobile isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      < HeroSection/>
      < Apropos />
      < Service />
      <BLogs />
      < Contact />
      < Footer />
    </main>
  )
}

export default page
