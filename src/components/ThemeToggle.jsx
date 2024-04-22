import React from 'react'
import { BsSunFill, BsMoonFill } from "react-icons/bs";


{/* <BsSunFill /> */}
{/* <BsMoonFill /> */}

const ThemeToggle = () => {
  return (
    <button className='dark-toggle'>
      <BsSunFill />
      <BsMoonFill />
    </button>
  )
}

export default ThemeToggle