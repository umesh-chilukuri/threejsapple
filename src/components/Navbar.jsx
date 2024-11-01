import React from 'react';
import {appleImg,bagImg,searchImg} from '../utils';
import {navLists} from  '../constants';


const Navbar = () => {
  return (
    <header className='w-full py-5 px-5 sm:px-10
    flex justify-between items-center'>
        <nav className='flex w-full screen-max-width'>
            <img src={appleImg} alt="apple logo" width={14}
            height={18} />

            <div className='flex flex-1 justify-center
            max-sm:hidden'>
             {navLists.map((nav)=>(
                <div key={nav} className='px-5 text-gray-100 hover:text-white transition-all
                text-sm cursor-pointer'>
                    {nav}
                    </div>
             ))}   
            </div>

            <div className='flex items-baseline gap-7
            max-sm:justify-end max-sm:flex-1'>
            <img src={searchImg} alt='bag'
                width={18}
                height={18}></img>
                <img src={bagImg} alt='bag'
                width={18}
                height={18}></img>
            </div>
        
        </nav>
        </header>
  )
}

export default Navbar