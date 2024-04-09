import React from 'react'
import { TailSpin } from "react-loader-spinner";

const LittleLoader = ({color}) => {
  return (
    <TailSpin
    height="30"
    width="30"
    color={color || '#FAFCFD'}
    ariaLabel="tail-spin-loading"
    radius="1"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />
  )
}

export default LittleLoader