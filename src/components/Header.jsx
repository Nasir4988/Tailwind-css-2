import React from 'react'
import { MdMarkEmailUnread } from "react-icons/md";
import { MdAddCall } from "react-icons/md";

import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Header = () => {
  return (
    <header className='py-2 bg-[#4379F2] '>
        <div className='max-w-container mx-auto'>
          <div className='flex items-center flex-wrap'>
            <div className='w-full lg:w-1/4'>
              <div className='flex items-center justify-center lg:justify-start gap-x-2'>
                <MdMarkEmailUnread className='lg:text-[#fff] text-[#000]'/>
                <p className='lg:text-[#fff] text-[#000]'>mail@yourcompany.com</p>
              </div>
            </div>
            <div className='w-full lg:w-1/4 py-2 lg:py-0'>
              <div className='flex items-center justify-center gap-x-2'>
                <MdAddCall className='lg:text-[#fff] text-[#000]'/>
                <p className='lg:text-[#fff] text-[#000]'>+896 120 5889 (Toll free)</p>
              </div>
            </div>
            <div className='w-full lg:w-1/2'>
              <div className='flex lg:justify-end justify-center gap-x-5'>
                  <FaFacebookF className='lg:text-[#fff] text-[#000]'/>
                  <FaTwitter className='lg:text-[#fff] text-[#000]'/>
                  <FaLinkedin className='lg:text-[#fff] text-[#000]'/>
                  <IoLogoYoutube className='lg:text-[#fff] text-[#000]'/>
                  <FaWhatsappSquare className='lg:text-[#fff] text-[#000]'/>
              </div>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header
