import React from 'react'
import logo from "../assets/logo.png"
import banner from "../assets/banner.jpg"

const Navbar = () => {
  return (
    <nav className=' bg-[#3C3D37]'>
      <div className='max-w-container mx-auto'>
            <div className='flex items-center pt-2'>
                <div className='w-2/4'>
                    <img src={logo} alt="" />
                </div>
                <div className='w-2/4 items-center'>
                  <ul className='flex justify-end gap-x-6'>
                    <li className='text-[16px] font-pops text-[#000] font-semibold hover:text-[#fff] duration-300 ease-in-out p-4'>Home</li>
                    <li className='text-[16px] font-pops text-[#000] font-semibold hover:text-[#fff] duration-300 ease-in-out p-4'>About</li>
                    <li className='text-[16px] font-pops text-[#000] font-semibold hover:text-[#fff] duration-300 ease-in-out p-4'>Service</li>
                    <li className='text-[16px] font-pops text-[#000] font-semibold hover:text-[#fff] duration-300 ease-in-out p-4'>works</li>
                    <li className='text-[16px] font-pops text-[#000] font-semibold hover:text-[#fff] duration-300 ease-in-out p-4'>Blog</li>
                    <li className='text-[16px] font-pops text-[#000] font-semibold hover:text-[#fff] duration-300 ease-in-out border-2 border-[#000] rounded-full hover:border-[#FFEB00] p-4'>contact</li>
                  </ul>
                </div>
            </div>
        </div> 
           <div className='w-[100%] pt-2 h-[400px]'>
               <img src={banner} alt="" />
           </div>
    </nav>
  )
}

export default Navbar
