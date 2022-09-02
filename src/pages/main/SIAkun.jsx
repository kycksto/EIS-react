import React from 'react'
import { Link } from 'react-router-dom';
import { useStateContext } from '../../contexts/ContextProvider'
import { EBudgetingModul } from '../../data/dummy';
import HomeBtn from '../../components/dashboard/HomeBtn'

const SIAkun = () => {
  const { currentColor, currentMode, activeMenu,screenSize,setActiveMenu } = useStateContext();

  return (
    <>
    <HomeBtn/>
    <div className='flex flex-wrap gap-10 justify-center mt-20 '>
      
      {EBudgetingModul.map((submenu) => (
        <Link key={submenu.key} to={`/${submenu.link}`}>
        <div key={submenu.key} className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 w-32 p-4 pt-3 justify-items-center rounded-2xl ">
          <p className='text-center  text-xs md:text-xl '>{submenu.message}</p>
          <img className='rounded-2xl mt-6' src={submenu.image} />
        </div>
        </Link>
      ))}
    </div>    </>
  )
}

export default SIAkun