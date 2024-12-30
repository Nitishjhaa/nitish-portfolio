import React, { useRef, useState } from 'react'


const Testimonials = () => {
    const [state, setState] = useState([
        {
            id:1,
            class:"w-[30rem] h-60 border border-black rounded-2xl flex flex-col text-center items-center justify-evenly hover:bg-zinc-700 hover:text-white [&_img]:hover:border-white [&_img]:hover:border-2 [&_img]:hover:grayscale-0",
            src:"src/images/test.png",
            imgClass:"w-24 h-24 border border-black rounded-full grayscale ",
            text:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. In modi ducimus nostrum perspiciatis unde doloremque animi quisquam officia voluptatibus."
        },
        {
            id:2,
            class:"w-[30rem] h-60 border border-black rounded-2xl flex flex-col text-center items-center justify-evenly hover:bg-zinc-700 hover:text-white [&_img]:hover:border-white [&_img]:hover:border-2 [&_img]:hover:grayscale-0",
            src:"src/images/testi-1.jpg",
            imgClass:"w-24 h-24 border border-black rounded-full grayscale",
            text:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. In modi ducimus nostrum perspiciatis unde doloremque animi quisquam officia voluptatibus."
        },
        {
            id:3,
            class:"w-[30rem] h-60 border border-black rounded-2xl flex flex-col text-center items-center justify-evenly hover:bg-zinc-700 hover:text-white [&_img]:hover:border-white [&_img]:hover:border-2 [&_img]:hover:grayscale-0",
            src:"src/images/testi-3.png",
            imgClass:"w-24 h-24 border border-black rounded-full grayscale",
            text:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. In modi ducimus nostrum perspiciatis unde doloremque animi quisquam officia voluptatibus."
        },
        {
            id:4,
            class:"w-[30rem] h-60 border border-black rounded-2xl flex flex-col text-center items-center justify-evenly hover:bg-zinc-700 hover:text-white [&_img]:hover:border-white [&_img]:hover:border-2 [&_img]:hover:grayscale-0",
            src:"src/images/testi-2.jpg",
            imgClass:"w-24 h-24 border border-black rounded-full grayscale",
            text:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. In modi ducimus nostrum perspiciatis unde doloremque animi quisquam officia voluptatibus."
        },
        {
            id:5,
            class:"w-[30rem] h-60 border border-black rounded-2xl flex flex-col text-center items-center justify-evenly hover:bg-zinc-700 hover:text-white [&_img]:hover:border-white [&_img]:hover:border-2 [&_img]:hover:grayscale-0",
            src:"src/images/testi-4.png",
            imgClass:"w-24 h-24 border border-black rounded-full grayscale",
            text:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. In modi ducimus nostrum perspiciatis unde doloremque animi quisquam officia voluptatibus."
        },
    ])
    let ref = useRef()



  return (
    <div className=' h-[30rem] border max-2xl:-mt-52'>
        <h1 className='text-center text-2xl max-lg:-mt-60 max-md:-mt-0'>Testimonials</h1>
      <div className='h-[25rem] flex justify-center items-center overflow-hidden max-md:mt-0'>
        <div className='h-full w-[80%] flex flex-row items-center gap-16 overflow-x-auto'> 
            {
                state.map(items => {
                    return (
                       <div ref={ref} key={items.id}>
                        <div className={items.class}>
                            <img src={items.src} className={items.imgClass}/>
                            <h3>{items.text}</h3>
                        </div>
                       </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Testimonials
