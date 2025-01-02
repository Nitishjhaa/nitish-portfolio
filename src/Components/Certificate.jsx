import React, { useState, useRef, useEffect } from 'react'
import Mern from '/images/Mern.png'
import responsiveDesign from '/images/responsiveDesign.png'
import UxDesign from '/images/UXdesign.png'
import GenerativeAI from '/images/GenerativeAI.png'
import codeGuru from '/images/codeGuruAws.png'
import nodeAndExpress from '/images/nodeAndExpress.png'
import openAi from '/images/openAi.png'
import javascript from '/images/javaScript.png'
import MongoDB from '/images/MongoDB-1.png'
import nodeMongo from '/images/nodeMongo.png'

const Certificate = () => {
  const [certificates, setCertificates] = useState([
      { id: 1, src: nodeAndExpress, title: 'Node and Express' },
      { id: 2, src: UxDesign, title: 'Ux Designing' },
      { id: 3, src: Mern, title: 'Mern stack' },
    { id: 4, src: GenerativeAI, title: 'Generative AI' },
    { id: 5, src: nodeMongo, title: 'Node and MongoDB' },
    { id: 6, src: javascript, title: 'JavaScript' },
    { id: 7, src: responsiveDesign, title: 'Html, Css, Js and Responsive Design' },
    { id: 8, src: MongoDB, title: 'MongoDB' },
    { id: 9, src: codeGuru, title: 'Code Guru' },
    { id: 10, src: openAi, title: 'Open Ai' },
  ])

  const containerRef = useRef(null)
  const listRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    const list = listRef.current
    let start = Date.now() - elapsedTime
    let animationFrameId

    const animate = () => {
      if (!isHovered) {
        const timePassed = Date.now() - start
        list.style.transform = `translateX(${-timePassed / 10}px)`

        if (timePassed / 10 >= list.scrollWidth / 2) {
          start = Date.now()
        }
        setElapsedTime(timePassed)
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [isHovered, elapsedTime])

  const scrollToStart = () => {
    const container = containerRef.current
    container.scrollLeft = 0
  }

  const scrollToEnd = () => {
    const container = containerRef.current
    container.scrollLeft = container.scrollWidth
  }

  const scrollNext = () => {
    const container = containerRef.current
    container.scrollLeft += container.clientWidth
  }

  const scrollPrev = () => {
    const container = containerRef.current
    container.scrollLeft -= container.clientWidth
  }

  return (
    <>
    <div className='max-md:mt-96'>
        <h1 className='text-center text-2xl  max-md:pt-0'>Certificates</h1>
        <div className="flex justify-center items-center h-screen relative max-md:-mt-10">
            <div className='relative h-[80vh] w-[80%] border-l-2 border-r-2 border-black rounded-lg max-md:w-[95%] max-md:overflow-hidden max-md:h-[50vh] max-lg:overflow-hidden max-xl:overflow-hidden'>
                <div className='absolute top-[15rem] -right-24 z-10 '>
                    <button onClick={scrollNext} className='w-8 h-8 rounded-full text-black [&_span]:hover:block'>
                        <i className="fa-solid fa-chevron-right"></i>
                        <span className='w-10 h-7 absolute -top-5 -left-1 rounded-md hover:bg-black hover:text-white hidden'>Next</span>
                    </button>
                    <button onClick={scrollToEnd} className='w-8 h-8 rounded-full text-black [&_span]:hover:block'>
                        <i className="fa-solid fa-angles-right"></i>
                        <span className='w-10 h-7 absolute -top-5 left-7 rounded-md hover:bg-black hover:text-white hidden'>Last</span>
                    </button>
                </div>
                <div className='absolute top-[15rem] -left-24 z-10 '>
                        <button onClick={scrollToStart} className='w-8 h-8 rounded-full text-black [&_span]:hover:block'>
                            <i className="fa-solid fa-angles-left"></i>
                            <span className='w-10 h-7 absolute -top-5 -left-1 rounded-md hover:bg-black hover:text-white hidden'>First</span>
                        </button>
                        <button onClick={scrollPrev} className='w-8 h-8 rounded-full text-black [&_span]:hover:block'>
                            <i className="fa-solid fa-chevron-left"></i>
                            <span className='w-16 h-7 absolute -top-5 left-7 rounded-md hover:bg-black hover:text-white hidden'>Previous</span>
                        </button>
                </div>
                <div
                    className=' flex items-center justify-center h-full overflow-hidden relative'
                    ref={containerRef}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div
                    className='flex flex-row absolute whitespace-nowrap'
                    ref={listRef}
                    >
                    {certificates.map((i) => (
                        <div key={i.id} className='w-[40rem] h-fit flex flex-col items-center justify-center mx-5 max-md:mx-0'>
                        <h1 className='text-center text-2xl pb-3 max-md:text-xl'>{i.title}</h1>
                        {i.src ? (
                            <img src={i.src} className='w-[40rem] max-md:w-[20rem] border border-black hover:scale-105' alt={i.title} />
                        ) : (
                            <div className='w-[40rem] h-[20rem] flex items-center justify-center bg-gray-200'>
                            <p>{i.title}</p>
                            </div>
                        )}
                        </div>
                    ))}
                    {certificates.map((i) => (
                        <div key={i.id + certificates.length} className='w-[40rem] h-fit flex flex-col items-center justify-center mx-5 max-md:mx-0'>
                        <h1 className='text-center text-2xl pb-3 max-md:text-xl'>{i.title}</h1>
                        {i.src ? (
                            <img src={i.src} className='w-[40rem] max-md:w-[20rem] border border-black hover:scale-105' alt={i.title} />
                        ) : (
                            <div className='w-[40rem] h-[20rem] flex items-center justify-center bg-gray-200'>
                            <p>{i.title}</p>
                            </div>
                        )}
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Certificate