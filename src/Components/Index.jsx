import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import line from '../images/line.png'
// import { ReactTyped } from "react-typed";
import Button from './Button'
import cv from '../Pdf/cv.pdf'

const Index = () => {
  gsap.registerPlugin(ScrollTrigger);

  let ref = useRef()

    useGSAP( () => {
      let tl = gsap.timeline()
        tl.from('.home', {
            x:-1000,
            duration:.1,
            autoAlpha:0
        })
    })

    let colorImage = () => {
      ref.current.src = "src/images/myPiccc.png"
    }

    let sameImage = () => {
      ref.current.src = "src/images/myPc.png"
    }
  return (
    <div className='home w-full h-screen flex justify-center items-center invisible'>
      <div className='h-screen w-[80%] flex flex-row gap-10 max-md:w-[95%] max-md:flex-col max-md:gap-5 max-lg:w-[95%]'>
        <div className='h-full w-10 flex flex-col justify-center items-center gap-5 max-md:hidden'>
          <a href="https://wa.me/919810135752" target='_blank'><i className="fa-brands fa-whatsapp text-2xl"></i></a>
          <a href="/"><i className="fa-brands fa-github text-2xl"></i></a>
          <a href="https://www.linkedin.com/in/nitish-jhaa" target='_blank'><i className="fa-brands fa-linkedin-in text-2xl"></i></a>
        </div>
        <div className='max-md:w-full hidden max-md:flex max-md:justify-center max-md:h-[30%] mt-10'>
          <div className='w-48 h-48 rounded-full overflow-hidden border border-black border-l-8 border-r-8 border-t-2 border-b-2'>
              <img ref={ref} src="/src/images/mypc.png" className='w-48 h-48' onMouseEnter={colorImage} onMouseLeave={sameImage}/>
          </div>        
        </div>
        <div className='w-[55%] max-md:w-full max-md:h-[70%]'>
          <h1 className='text-7xl text-center font-QuickSand mt-40 max-md:mt-2'>Nitish jha</h1>
          <div className='pt-5 flex h-16 justify-center'>
            <img src={line} className='w-40 pb-4 '/>
            <h3>Web developer</h3>
          </div>
          <div className=' ml-10 max-md:ml-0 mt-5 max-md:mt-0'>
            <p className='text-center '>
              I am creative web developer from India ,<strong>Delhi</strong>. I am very passonate, and dedicated to my work. I finish my Projects in consistance way and on time.
            </p>
          </div>
          <div className='mt-10 flex max-md:justify-center gap-5 ml-12 max-md:ml-0'>
            <Button text="Download CV" icon= "fa-solid fa-file-arrow-down fa-bounce" href = {cv} cv = {cv}/>
            <Button text="Contact me !" icon= "fa-solid fa-phone fa-shake" cv={null} href = {'tel:9810135752'}/>
          </div>
        </div>
        <div className='pic w-[35%] grid place-items-center max-md:hidden'>
          <div className='w-[30rem] h-[30rem] max-lg:w-64 max-lg:grid max-lg:place-items-center max-xl:grid max-xl:place-items-center'>
            <img src="/src/images/xx.png" className='w-[30rem] h-[30rem] ml-3 max-lg:w-72 max-lg:h-72 max-xl:h-72 max-xl:w-72 grayscale hover:grayscale-0'/>
          </div>
        </div>
      <div className='hidden max-md:block h-2 w-full border-b-2'></div>
      </div>
    </div>
  )
}

export default Index
