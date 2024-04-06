import React, { useState } from 'react'
import { Alert, Header, ReviewGrid, ReviewHeader } from '../components';


const Review = () => {
  const [searchValue, setSearchValue] = useState("Bonny and Clyde Street, Ajao Estate, Lagos")

  return (
    <div className='w-full bg-white'>
      <div className='w-full bg-customBg2 pb-5'>
      <Header showInput={true} searchValue={searchValue} setSearchValue={setSearchValue} />
      <ReviewHeader searchValue={searchValue} />
      </div>
      <ReviewGrid />
    </div>
  )
}

export default Review;