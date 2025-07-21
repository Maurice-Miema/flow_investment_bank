import React from 'react'
import HeroSection from '@/components/HeroSection'
import Apropos from '@/components/Apropos'
import Service from '@/components/Service'
import Equipe from '@/components/Equipe'
import Contact from '@/components/Contact'

function page() {
  return (
    <main className='m-0 p-0 box-border'>
      < HeroSection/>
      < Apropos />
      < Service />
      < Equipe />
      < Contact />
    </main>
  )
}

export default page
