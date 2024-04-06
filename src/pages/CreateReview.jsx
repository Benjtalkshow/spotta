import React from 'react'
import { NewReview } from '../components';

const CreateReview = () => {
  return (
    <div className={`w-full bg-customDarkBlue h-screen flex items-center justify-center px-5 md:px-20`}>
        <NewReview />
    </div>
  )
}

export default CreateReview;