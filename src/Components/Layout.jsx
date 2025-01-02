import React from 'react'
import About from './About'
import Project from './Project'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Index from './Index'
import Certificate from './Certificate'



const Layout = () => {
  return (
    <div>
        <div className='h-screen w-full'>
            <Index />
            <About />
            <Certificate />
            <Project />
            <Testimonials />
            <Contact />
        </div>
    </div>
  )
}

export default Layout
