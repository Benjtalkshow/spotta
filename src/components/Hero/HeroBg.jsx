import React from 'react'
import herobg from "../../assets/images/herobg.svg"

const HeroBg = () => {
  return (
    <div className='h-[90%]'>
      <img src={herobg} alt="hero image" className='w-[800px]' />
    </div>
  )
}

export default HeroBg;