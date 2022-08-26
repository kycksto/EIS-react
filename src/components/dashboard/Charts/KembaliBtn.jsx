import React from 'react'
import { Link } from 'react-router-dom'

const KembaliBtn = ({base}) => {
  return (
    <div className='inset-0 bottom-0 top-0 h-16 mt-16 md:mt-2'>
    <Link to={`/${base}`} >
        <div className=' bg-blue-500 dark:text-gray-200 dark:bg-gray-600 mx-10 p-4 rounded-2xl '>
        <p className=' text-center font-bold text-white '>Kembali</p>
        </div>
    </Link>  
    </div>
    )
}

export default KembaliBtn