import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
  } from 'react-icons/fa';

const Footer = () => {
  return (
    <div id='footer' className='bg-[#000300]'>
    <div>
      <div className='max-w-[1140px] m-auto py-16  px-4 grid lg:grid-cols-3 gap-8 text-gray-300 '>
      <div>
        <h1 className="w-full text-3xl font-bold text-[#35A7FF] hover:text-white">BcoD.</h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400 text-center'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm text-center'>Analytics</li>
            <li className='py-2 text-sm text-center'>Marketing</li>
            <li className='py-2 text-sm text-center'>Commerce</li>
            <li className='py-2 text-sm text-center'>Insights</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400 text-center'>Support</h6>
        <ul>
            <li className='py-2 text-sm text-center'>Pricing</li>
            <li className='py-2 text-sm text-center'>Documentation</li>
            <li className='py-2 text-sm text-center'>Guides</li>
            <li className='py-2 text-sm text-center'>API Status</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400 text-center'>Company</h6>
        <ul>
            <li className="py-2 text-sm hover:text-[#35A7FF] text-center"><a href="#Hero">Home</a></li>
            <li className="py-2 text-sm hover:text-[#35A7FF] text-center"><a href="#Analytics">Company</a></li>
            <li className="py-2 text-sm hover:text-[#35A7FF] text-center"><a href="#Cards">Service</a></li>
            <li className="py-2 text-sm hover:text-[#35A7FF] text-center"><a href="#Newsletter">Contact</a></li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400 text-center'>Legal</h6>
        <ul>
            <li className='py-2 text-sm text-center'>Claim</li>
            <li className='py-2 text-sm text-center'>Policy</li>
            <li className='py-2 text-sm text-center'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Footer
