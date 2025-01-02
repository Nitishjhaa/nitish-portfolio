import React from 'react'
import { useState,useRef } from 'react'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from 'gsap'
import myPic from '/images/Nitish_jha_pic.png'
import tailwind from '/images/tailwind.png'
import express from '/images/express.png'
import mongoDB from '/images/mongoDB.png'
import gsap1 from '/images/gsap.svg'
import bg from '/images/bg.jpg'


const About = () => {
    let ref= useRef()
    const [translate, setTranslate] = useState("translateX(-60%)")
    const [skill, SetSkill] = useState([
      {
        id : 1,
        name:"Html",
        src:"fa-brands fa-html5 text-3xl",
        src2:null,
        className : "w-10 h-10 grid place-items-center",
        class2:"h-full w-[19rem] max-md:w-[13rem] max-lg:w-[12rem] rounded-3xl bg-gray-400 text-center pt-2 text-white",
        value:"80%"
      },
      {
        id : 2,
        name:"Css",
        src:"fa-brands fa-css text-3xl",
        src2:null,
        className : "w-10 h-10 grid place-items-center",
        class2:"h-full w-[17rem] max-md:w-[12rem] max-lg:w-[11rem] rounded-3xl bg-gray-400 text-center pt-2 text-white",
        value:"75%"
      },
      {
        id : 3,
        name:"Js",
        src:"fa-brands fa-js text-3xl",
        src2:null,
        className : "w-10 h-10 grid place-items-center",
        class2:"h-full w-[15rem] max-md:w-[10rem] max-lg:w-[9rem] rounded-3xl bg-gray-400 text-center pt-2 text-white",
        value:"60%"
      },
      {
        id : 4,
        name:"Bootstrap",
        src:"fa-brands fa-bootstrap text-3xl",
        src2:null,
        className : "w-10 h-10 grid place-items-center",
        class2:"h-full w-[12rem] max-md:w-[8rem] max-lg:w-[6.4rem] rounded-3xl bg-gray-400 text-center pt-2 text-white",
        value:"40%"
      },
      {
        id : 5,
        name:"Tailwind",
        src:null,
        src2:tailwind,
        className : "w-10 h-10",
        class2:"h-full w-[19rem] max-md:w-[13rem] max-lg:w-[12rem] rounded-3xl bg-gray-400 text-center pt-2 text-white",
        value:"80%"
      },
    ])

    const [skillx, SetSkillx] = useState([
      {
        id : 6,
        name:"React",
        src:"fa-brands fa-react text-3xl",
        src2:null,
        className : "w-10 h-10 grid place-items-center",
        class2:"h-full w-[16.8rem] max-md:w-[11.2rem] max-lg:w-[9.9rem] rounded-3xl bg-gray-400 text-center pt-2 text-white",
        value:"70%"
      },
      {
        id : 7,
        name:"Express",
        src:null,
        src2:express,
        className : "w-10 h-10 grid place-items-center",
        class2:"h-full w-[16.8rem] max-md:w-[11.2rem] max-lg:w-[9.9rem] rounded-3xl bg-gray-400 text-center pt-2 text-white",
        value:"70%"
      },
      {
        id : 9,
        name:"Node",
        src:"fa-brands fa-node-js text-3xl",
        src2:null,
        className : "w-10 h-10 grid place-items-center",
        class2:"h-full w-[15rem] max-md:w-[10rem] max-lg:w-[9rem] rounded-3xl bg-gray-400 text-center pt-2 text-white",
        value:"60%"
      },
      {
        id : 10,
        name:"MongoDB",
        src:null,
        src2:mongoDB,
        className : "w-10 h-10 grid place-items-center",
        class2:"h-full w-[12rem] max-md:w-[8rem] max-lg:w-[6.4rem] rounded-3xl bg-gray-400 text-center pt-2 text-white",
        value:"40%"
      },
      {
        id : 8,
        name:"Gsap",
        src:null,
        src2:gsap1,
        className : "w-10 h-10 grid place-items-center",
        class2:"h-full w-[12rem] max-md:w-[8rem] max-lg:w-[6.4rem] rounded-3xl bg-gray-400 text-center pt-2 text-white",
        value:"40%"
      },
    ])


    gsap.registerPlugin(ScrollTrigger)

    useGSAP( () => {
        gsap.to(ref.current, {
            transform:translate,
            duration:2,
            scrollTrigger:{
              trigger:".aboutContainer",
              scroller:"body",
              start:"top 0",
              end:"top -150%",
              scrub:1,
              pin:true,          
            }
        })

        gsap.from(".picContainer img", {
          y:-800,
          duration:2,
          scrollTrigger: {
            trigger:".picContainer",
            scroller:"body",
            start:"top 30%",
            end:"top 40%",
            scrub:1
          }
        }),

        gsap.from(".intro h1", {
          y:400,
          stagger:0.2,
          scrollTrigger: {
            trigger:".intro",
            scroller:"body",
            start:"top 40%",
            end:"top 40%",
            scrub:1
          }
        })

        gsap.from('.skill div',{
          y:-300,
          duration:2,
          delay:1,
          stagger:0.2,
          scrollTrigger:{
            trigger:".skill",
            scroller:"body",
            // markers:"true",
            start:"top 30%",
            end:"top 80%",
            scrub:1
          }
        })
        gsap.from('.skillx div',{
          y:-300,
          duration:2,
          delay:1,
          stagger:0.2,
          scrollTrigger:{
            trigger:".skillx",
            scroller:"body",
            // markers:"true",
            start:"top 20%",
            end:"top 80%",
            scrub:1
          }
        })
    })




  return (
    <>
    <div>
      <div className='aboutContainer font-QuickSand overflow-x-hidden bg-black text-white max-md:hidden'>
        <h1 ref={ref} className='text-[30rem] w-[145rem] ml-60 max-lg:ml-0 max-lg:w-[160rem]'>About me!</h1>
      </div>
      <div className='hidden max-md:block text-center mt-20 text-2xl max-md:mt-20'>
          About me!
      </div>
      <div className='mt-20 grid place-items-center h-[65rem]'>
        <div className='w-[80%] h-full max-md:w-full'>
          <div className='flex flex-row w-full max-lg:-ml-20'>
            <div className='picContainer w-96 overflow-hidden max-md:hidden'>
              <img src={myPic} className='h-96 max-md:hidden rounded-tl-3xl rounded-br-3xl drop-shadow-2xl' />
            </div>
            <div className='h-96 max-md:ml-28 w-full flex flex-col items-center '>
              <h1 className='text-center max-md:ml-10 text-2xl '>Introduction</h1>
              <div className='w-[90%] mt-4 max-md:w-full max-lg:mt-1 max-lg:w-[100%] max-md:mt-3'>
                <p className='text-sm w-[100%] text-center max-md:w-[115%]'>Hey, I’m Nitish kumar jha, a creative and versatile Web developer with a keen eye for detail. I specialize in creating visually stunning websites that convey a brand’s message and captivate its audience. I’m well-versed in a variety of design software and techniques, and I’m always looking for new ways to enhance my skills.</p>
                <div className='mt-5 h-[17.4rem] max-lg:mt-1 max-md:mt-8 max-md:w-[120%]'>
                  <div className='ml-10 pt-10 h-full flex justify-between overflow-hidden max-md:ml-0 max-md:pt-0'>
                    <div className='intro w-full h-full text-center overflow-hidden'>
                      <h1>Name :- Nitish kuamr jha</h1>
                      <hr />
                      <br />
                      <h1>Education :- B.sc</h1>
                      <hr />
                      <br />
                      <h1>Age :- 24</h1>
                      <hr />
                      <br />
                      <h1>Mobile No. :- +91 9810135752</h1>
                      <hr />
                      <br />
                      <h1>Email :- nj9876543210p@gmail.com</h1>
                      <hr />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-16 h-[33rem] max-md:mt-20 max-md:h-[60rem]'>
            <div className='flex flex-col items-center'>
              <h1 className='text-center text-3xl'>Skills</h1>
              <div className=' mt-3 w-[90%] h-[30rem] flex flex-row justify-between gap-2 max-md:flex-col max-md:h-[55rem] max-lg:w-[100%]'>
              <div className='skill w-[50%] max-md:h-[40rem] max-md:w-full overflow-hidden max-lg:w-full'>
                  {
                    skill.map(items => {
                      return (
                        <div key={items.id} className='flex justify-center items-center gap-5 mt-6 overflow-hidden'>
                          <div className='w-20 flex flex-col items-center'>
                            <div className={items.className}>
                              <i className={items.src}></i>
                              <img src={items.src2} />
                            </div>
                            <h1 className=''>{items.name}</h1>
                          </div>
                          <div  className='h-10 rounded-3xl w-96 border border-black max-md:w-60 bg-black max-lg:w-64'>
                            <div className={items.class2}>
                              <h1>{items.value}</h1>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
              </div>
              <div className='skillx w-[50%] max-md:h-[40rem] max-md:w-full overflow-hidden max-lg:w-full'>
                  {
                    skillx.map(items => {
                      return (
                        <div key={items.id} className='flex justify-center items-center gap-5 mt-6'>
                          <div className='w-20 flex flex-col items-center'>
                          <div className={items.className}>
                            <i className={items.src}></i>
                            <img src={items.src2} />
                            </div>
                            <h1 className=''>{items.name}</h1>
                          </div>
                          <div className='h-10 rounded-3xl w-96 border border-black max-md:w-60 bg-black max-lg:w-64'>
                            <div className={items.class2}>
                              <h1>{items.value}</h1>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
