import React from 'react'
import { FaLinkedin } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'
import { FaTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className="flex flex-shrink-0 items-center">
            <h2 className='text-4xl'>RD</h2>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="www.linkedin.com/in/ronak-dhanda-232436253"><FaLinkedin/></a>
            <a href="https://github.com/"><FaGithub/></a>
            <a href="https://x.com/home"><FaTwitter/></a>
            <a href="https://www.instagram.com/?utm_source=pwa_homescreen&__pwa=1"><FaInstagram/></a>
        </div>
    </nav>
  )
}

export default Navbar
