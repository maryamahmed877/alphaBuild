import React from 'react'
import heroImg from '../../assets/images/header.jpg'

export default function Home() {
  return (
    <>
      <header>
      
        <div className='relative'>
        <img className=' w-full min-h-screen object-cover object-center' src={heroImg} alt="" />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60"></div>
        <h2 className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center  text-white capitalize md:text-6xl text-5xl '>welcome to alpha build </h2>
        
        </div>
      </header>
    </>
  )
}
