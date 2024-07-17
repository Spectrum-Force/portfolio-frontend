import React from 'react'
import { Rings } from 'react-loader-spinner'
const Loader = () => {
  return (
    <Rings
    visible={true}
    height="50"
    width="50"
    color="#4fa94d"
    ariaLabel="rings-loading"
    wrapperStyle={{}}
    wrapperClass=""
    />
  )
}

export default Loader