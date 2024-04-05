import React from 'react'
import herobg from "../../assets/images/herobg.svg"
import styles from "../../assets/css/hideScrollbar.module.css"

const HeroBg = () => {
  return (
    <div className={`h-full mb-10 superMedium:mb-0 superMedium:h-[90%] overflow-y-auto ${styles['hide-scroll']}`}>
      <img src={herobg} alt="hero image" className='w-[800px]' />
    </div>
  )
}

export default HeroBg;