import React, { useRef, useState } from 'react'
import person1 from '/images/test.png'
import person2 from '/images/test-1.jpg'
import person3 from '/images/test-3.png'
import person4 from '/images/test-4.png'
import person5 from '/images/test-5.png'


const Testimonials = () => {
    const [state, setState] = useState([
        {
            id:1,
            class:"w-[30rem] h-60 border border-black rounded-2xl flex flex-col text-center items-center justify-evenly hover:bg-zinc-700 hover:text-white [&_img]:hover:border-white [&_img]:hover:border-2 [&_img]:hover:grayscale-0",
            src:person1,
            imgClass:"w-24 h-24 border border-black rounded-full grayscale ",
            text:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. In modi ducimus nostrum perspiciatis unde doloremque animi quisquam officia voluptatibus."
        },
        {
            id:2,
            class:"w-[30rem] h-60 border border-black rounded-2xl flex flex-col text-center items-center justify-evenly hover:bg-zinc-700 hover:text-white [&_img]:hover:border-white [&_img]:hover:border-2 [&_img]:hover:grayscale-0",
            src:person2,
            imgClass:"w-24 h-24 border border-black rounded-full grayscale",
            text:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. In modi ducimus nostrum perspiciatis unde doloremque animi quisquam officia voluptatibus."
        },
        {
            id:3,
            class:"w-[30rem] h-60 border border-black rounded-2xl flex flex-col text-center items-center justify-evenly hover:bg-zinc-700 hover:text-white [&_img]:hover:border-white [&_img]:hover:border-2 [&_img]:hover:grayscale-0",
            src:person3,
            imgClass:"w-24 h-24 border border-black rounded-full grayscale",
            text:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. In modi ducimus nostrum perspiciatis unde doloremque animi quisquam officia voluptatibus."
        },
        {
            id:4,
            class:"w-[30rem] h-60 border border-black rounded-2xl flex flex-col text-center items-center justify-evenly hover:bg-zinc-700 hover:text-white [&_img]:hover:border-white [&_img]:hover:border-2 [&_img]:hover:grayscale-0",
            src:person4,
            imgClass:"w-24 h-24 border border-black rounded-full grayscale",
            text:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. In modi ducimus nostrum perspiciatis unde doloremque animi quisquam officia voluptatibus."
        },
        {
            id:5,
            class:"w-[30rem] h-60 border border-black rounded-2xl flex flex-col text-center items-center justify-evenly hover:bg-zinc-700 hover:text-white [&_img]:hover:border-white [&_img]:hover:border-2 [&_img]:hover:grayscale-0",
            src:person5,
            imgClass:"w-24 h-24 border border-black rounded-full grayscale",
            text:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. In modi ducimus nostrum perspiciatis unde doloremque animi quisquam officia voluptatibus."
        },
    ])
    let ref = useRef()



  return (
    <div className=' h-[30rem] border'>
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
