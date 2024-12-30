import React, { useRef,useEffect,useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ReactTyped } from "react-typed";


const Welcome = () => {
    const [display,SetDisplay] = useState() 

    let refA=useRef()
    let refB=useRef()

    useGSAP( () => {
        let tl = gsap.timeline()
        tl.to(refA.current, {
            y:-750,
            delay:3,
            duration:1,
        })

    })

  return (
    <div className='overflow-hidden'>
      <div ref={refA} className='w-full h-screen bg-black absolute flex justify-center items-center text-white'>
        <span>
            <ReactTyped className='text-4xl font-Pacifico' strings={["Welcome..."]} typeSpeed={200} />
        </span>
      </div>
    </div>
  )
}

export default Welcome
