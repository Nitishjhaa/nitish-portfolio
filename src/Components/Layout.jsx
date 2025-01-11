import React from 'react'
import About from './About'
import Project from './Project'
import Contact from './Contact'
import Index from './Index'
import Certificate from './Certificate'



const Layout = () => {
  return (
    <div>
        <div className='h-screen w-full '>
            <Index />
            <About />
            <Certificate />
            <Project />
            <Contact />
        </div>
    </div>
  )
}

export default Layout
