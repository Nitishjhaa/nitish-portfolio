import React from 'react'
import { useState,useRef } from 'react'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from 'gsap'
import project1 from '../images/project-1.jpg'


const Project = () => {
    gsap.registerPlugin(ScrollTrigger)
    const [translate, setTranslate] = useState("translateX(-60%)")
    const [project, setProject] = useState([
        {
            id:1,
            className:"w-80 h-80 overflow-hidden max-md:w-72 max-md:h-72 border border-black relative rounded-tl-2xl rounded-br-2xl max-lg:h-60 max-lg:w-60 [&_a]:hover:bottom-7 [&_a]:hover:transition-all [&_img]:hover:grayscale-0",
            imgClassName :"w-80 h-80 hover:scale-105 max-md:w-72 max-md:h-72  max-lg:h-60 max-lg:w-60 grayscale",
            src:"src/images/project-6.jpg",
            link:"",
            gitLink:"",
        },
        {
            id:2,
            className:"w-80 h-80 overflow-hidden max-md:w-72 max-md:h-72 border border-black relative rounded-tl-2xl rounded-br-2xl max-lg:h-60 max-lg:w-60 [&_a]:hover:bottom-7 [&_a]:hover:transition-all [&_img]:hover:grayscale-0",
            imgClassName :"w-80 h-80 hover:scale-105 max-md:w-72 max-md:h-72 max-lg:h-60 max-lg:w-60 grayscale",
            src:"src/images/project-1.jpg",
            link:"/",
            gitLink:"/",
        },
        {            
            id:3,
            className:"w-80 h-80 overflow-hidden max-md:w-72 max-md:h-72 border border-black relative rounded-tl-2xl rounded-br-2xl max-lg:h-60 max-lg:w-60 [&_a]:hover:bottom-7 [&_a]:hover:transition-all [&_img]:hover:grayscale-0",
            imgClassName :"w-80 h-80 hover:scale-105 max-md:w-72 max-md:h-72 max-lg:h-60 max-lg:w-60 grayscale",
            src:"src/images/project-2.jpg",
            link:"/",
            gitLink:"/",
        },
        {
            id:4,
            className:"w-80 h-80 overflow-hidden max-md:w-72 max-md:h-72 border border-black relative rounded-tl-2xl rounded-br-2xl max-lg:h-60 max-lg:w-60 [&_a]:hover:bottom-7 [&_a]:hover:transition-all [&_img]:hover:grayscale-0",
            imgClassName :"w-80 h-80 hover:scale-105 max-md:w-72 max-md:h-72 max-lg:h-60 max-lg:w-60 grayscale object-cover",
            src:"src/images/preview.png",
            link:"/",
            gitLink:"/",
        },
        {
            id:5,
            className:"w-80 h-80 overflow-hidden max-md:w-72 max-md:h-72 border border-black relative rounded-tl-2xl rounded-br-2xl max-lg:h-60 max-lg:w-60 [&_a]:hover:bottom-7 [&_a]:hover:transition-all [&_img]:hover:grayscale-0",
            imgClassName :"w-80 h-80 hover:scale-105 max-md:w-72 max-md:h-72 max-lg:h-60 max-lg:w-60 grayscale",
            src:"src/images/project-4.jpg",
            link:"/",
            gitLink:"/",
        },
        {
            id:6,
            className:"w-80 h-80 overflow-hidden max-md:w-72 max-md:h-72 border border-black relative rounded-tl-2xl rounded-br-2xl max-lg:h-60 max-lg:w-60 [&_a]:hover:bottom-7 [&_a]:hover:transition-all [&_img]:hover:grayscale-0",
            imgClassName :"w-80 h-80 hover:scale-105 max-md:w-72 max-md:h-72 max-lg:h-60 max-lg:w-60 grayscale",
            src:"src/images/project-5.jpg",
            link:"/",
            gitLink:"/",
            
        },
    ])

    let ref = useRef()
    useGSAP( () => {
        gsap.to(ref.current, {
            transform:translate,
            duration:2,
            scrollTrigger:{
                trigger:".projectContainer",
                scroller:"body",
                start:"top 0",
                end:"top -150%",
                scrub:1,
                pin:true,          
              }
        })

        gsap.from(".projectList div", {
            y:-2000,
            opacity:0,
            stagger:0.1,
            scrollTrigger:{
                trigger:".projectList",
                scroller:"body",
                start:"top 55%",
                end:"top 70%",
                // markers:"true",
                scrub:1,
                pin:true,          
              }
        })
    })

  return (
    <div>
        <div className='projectContainer font-QuickSand overflow-x-hidden bg-black text-white max-md:hidden'>
            <h1 ref={ref} className='text-[30rem] w-[150rem] ml-96 max-lg:w-[168rem] max-lg:ml-0 max-xl:w-[178rem]'>My Project</h1>
        </div>
        <div className='h-[50rem] border mt-10 max-md:mt-96 flex flex-col justify-center items-center max-md:h-[120rem] max-lg:h-[70rem] max-xl:h-[70rem] max-xl:mt-2'>
            <h1 className='text-center text-3xl'>Project</h1>
            <div className='w-[80%] max-md:w-[95%] h-full mt-7 max-lg:mt-2'>
                <div className='projectList flex flex-wrap gap-5 justify-center max-md:flex-col max-md:items-center overflow-y-hidden' >
                    {
                        project.map(items =>{
                            return (
                                <div key={items.id} className={items.className}>
                                    <img src={items.src} className={items.imgClassName}/>
                                    <a href={items.link} target='_blank' className='w-14 h-14 rounded-full bg-black text-white absolute -bottom-20 left-5 text-xl grid place-items-center hover:bg-white hover:text-black transition-all delay-75 [&_span]:hover:block'>
                                        <i className="fa-solid fa-up-right-from-square"></i>
                                        <span className='text-[10px] absolute -bottom-6 hidden text-red-500 max-md:text-center max-md:w-20'>Visit website</span>
                                    </a>
                                    <a href={items.gitLink} target='_blank' className='w-14 h-14 rounded-full bg-black text-white absolute -bottom-20 right-5 text-xl grid place-items-center hover:bg-white hover:text-black transition-all delay-75 [&_span]:hover:block'>
                                        <i className="fa-solid fa-code"></i>
                                        <span className='text-[10px] absolute -bottom-6 hidden text-green-500'>View Code</span>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project
