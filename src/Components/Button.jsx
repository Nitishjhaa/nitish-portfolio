import React from 'react'

const Button = (props) => {
  return (
    <a href={props.href} download='nitish_cv.pdf'>
        <div className='h-10 w-28 grid place-items-center bg-black text-[12px] text-white rounded-lg active:bg-gray-400 active:text-black'>
                <button className='active:scale-90'>{props.text} &nbsp; &nbsp;<i className={props.icon}></i></button>
        </div>
    </a>
  )
}

export default Button
