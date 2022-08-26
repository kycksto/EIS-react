import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'

const HomeBtn = () => {
  return (
    <div className=" fixed top-12 left-14 p-3 rounded-full scale-150 bg-blue-400 dark:bg-gray-600" style={{zIndex: '1000'}}>
    <Link to={'/'}>
      <AiFillHome color='white'/>
    </Link>
    </div>
  )
}

export default HomeBtn