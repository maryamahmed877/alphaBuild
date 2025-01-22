import React from 'react'
import notfound from '../../assets/images/notfound.jpg'
export default function Notfound() {
  return (
  <>
  <section className=' bg-[#191919] h-screen'>
    <img className='md:w-1/2 mx-auto h-screen  w-screen' src={notfound} alt="not found image" />
  </section>
  </>
  )
}
