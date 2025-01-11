import React, { useRef,useState,useEffect } from 'react'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from 'gsap'
import bg from '/images/bg.jpg'

const Contact = () => {
  gsap.registerPlugin(ScrollTrigger)
  const [translate, setTranslate] = useState("translateX(-70%)")
  const [result, setResult] = useState("");
  const [style,setStyle] = useState({color:"green",display:"block"})

  let loader = <i className="fa-solid fa-spinner fa-spin-pulse text-lg"></i>
  let refName = useRef()
 
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(loader);
    const formData = new FormData(event.target);

    formData.append("access_key", "20d17933-24bb-472a-a367-9ecd04344cd1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setTimeout( () => {
        setResult("")
      },3500)
      event.target.reset();
    } else {
      setStyle({color:"red"})
      setResult(data.message);
      setTimeout( () => {
        setResult("")
      },3500)
      event.target.reset();

    }
  };

  let ref = useRef()

      useGSAP( () => {
        gsap.to(ref.current, {
            transform:translate,
            duration:2,
            scrollTrigger:{
                trigger:".contactContainer",
                scroller:"body",
                start:"top 0",
                end:"top -150%",
                scrub:1,
                pin:true,          
              }
        })

        let tl = gsap.timeline()
        tl.from(".formContainer form input", {
          y:-300,
          opacity:0,
          stagger:0.2,
          ease:"elastic.out(1,0.1)",
          scrollTrigger:{
            trigger:".formContainer",
            scroller:"body",
            start:"top 40% ",
            end:"top 40%",
            // markers:"true",
            scrub:1
          }
        })

        tl.from(".formContainer form textarea", {
          y:-500,
          opacity:0,
          stagger:0.2,
          ease:"elastic.out(1,0.1)",
          scrollTrigger:{
            trigger:".formContainer",
            scroller:"body",
            start:"top 40% ",
            end:"top 40%",
            // markers:"true",
            scrub:1
          }
        })
    })

    let focus = (e) => {
      refName.current.focus()
    }

  return (
    <div className='relative'>
      <div className='contactContainer font-QuickSand overflow-x-hidden bg-black text-white max-md:hidden'>
            <h1 ref={ref} className='text-[30rem] w-[170rem] ml-80 max-lg:w-[170rem] max-lg:ml-0'>Contact me</h1>
      </div>
        <div className='h-[40rem] flex flex-col justify-center items-center gap-3 max-md:h-[60rem]'>
          <h1 className='hidden max-md:block text-center text-3xl'>Contact me!</h1>
          <div className='h-full w-[80%] max-md:w-[95%] max-md:h-[40rem] flex max-md:flex-col justify-between max-lg:w-[100%]'>
            <div className='w-[50%] max-md:w-[100%] max-lg:h-[45rem] flex flex-col justify-between h-[45rem] max-md:hidden'>
              <div className='w-full h-[20rem] pt-10 text-center max-lg:pt-0'>
                <h1 className='text-9xl max-xl:text-7xl max-lg:mt-20 max-2xl:text-8xl'>Let's chat.</h1>
                <h1 className='text-5xl pt-5 max-lg:hidden max-xl:text-4xl max-2xl:text-4xl'>Tell me About your Project</h1>
                <h1 className='text-lg pt-14'>Let's create something together</h1>
              </div>
              <div className='w-full h-[25rem] flex flex-col items-center gap-10 mt-5'>
                <div className='w-96 h-16 shadow-xl border rounded-lg active:scale-95 [&_div]:hover:bg-black [&_a]:hover:text-black'>
                  <a href="mailto:nj9876543210p@gmail.com" className='flex items-center text-gray-500'>
                    <div className='text-2xl border text-center h-10 w-11 text-white bg-gray-500 rounded-md ml-5 mt-3 flex justify-center items-center'>
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                    <p className='ml-3 mt-1'>Mail me at <br /> <strong>nj9876543210p@gmail.com</strong></p>
                  </a>
                </div>
                <div className='w-96 h-16 shadow-xl border rounded-lg active:scale-95  [&_div]:hover:bg-black [&_a]:hover:text-black'>
                  <a href="https://wa.me/919810135752" target='_blank' className='flex items-center text-gray-500'>
                    <div className='text-2xl border text-center h-10 w-11 text-white bg-gray-500 rounded-md ml-5 mt-3 flex justify-center items-center'>
                      <i className="fa-brands fa-whatsapp"></i>
                    </div>
                    <p className='ml-3 mt-1'>let's chat on <br /> <strong>WhatsApp</strong></p>
                  </a>
                </div>
                <div className='w-96 h-16 shadow-xl border rounded-lg active:scale-95  [&_div]:hover:bg-black [&_a]:hover:text-black'>
                  <a href="tel:9810135752" className='flex items-center text-gray-500'>
                    <div className='text-2xl border text-center h-10 w-11 text-white bg-gray-500 rounded-md ml-5 mt-3 flex justify-center items-center'>
                      <i className="fa-solid fa-mobile"></i>
                    </div>
                    <p className='ml-3 mt-1'>Call me  <br /> <strong>+91 9810135752</strong></p>
                  </a>
                </div>
              </div>
            </div>
            <div className='formContainer w-[50%] max-md:w-[95%] max-md:h-[50%] pt-20 max-md:grid max-md:place-items-center '>
              <form onSubmit={onSubmit} className=' flex flex-col items-center gap-5 justify-center' >
                <input ref={refName} type="text" name="name" id="name" placeholder='Name' className='w-96 p-4 shadow-lg rounded-xl max-lg:w-80 border border-black' required />
                <input type="email" name="email" id="email" placeholder='Email' className='w-96 border shadow-lg border-black p-4 rounded-xl max-lg:w-80' required/>
                <input type="number" name="number" id="number" placeholder='Contact Number' className='w-96 border shadow-lg border-black p-4 rounded-xl max-lg:w-80' required/>
                <textarea type="text" name="massage" id="massage" className='w-96 h-60 border border-black p-4 shadow-lg rounded-xl resize-none max-lg:w-80' placeholder='Enter your massage'></textarea>
                <div className='flex gap-10 max-lg:gap-3'>
                  <button className='w-40 max-lg:w-36 border border-black h-12 rounded-lg active:scale-95 hover:text-white hover:bg-black shadow-lg hover:shadow-2xl' type="submit">Submit Form</button>
                  <button className='w-40 max-lg:w-36 border border-black h-12 rounded-lg active:scale-95 hover:text-white hover:bg-black shadow-lg hover:shadow-2xl' onClick={focus} type="reset">Reset Form</button>
                </div>
              </form>
              <div className=' text-center mt-10' style={style}>
                {result}
              </div>
            </div>
          </div>
        </div>
        <div className='absolute top-[100%] w-full text-center text-lg mt-7 max-md:mt-3 '>
          Made with love ❤️ by Nitish
        </div>
    </div>
  )
}

export default Contact
