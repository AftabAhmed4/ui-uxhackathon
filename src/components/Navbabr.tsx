
import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa'; 
import { RiArrowDropDownLine } from "react-icons/ri";
import { ImCross } from "react-icons/im";

import Link from 'next/link';




const Navbabr = () => {
  return (
    <div>

{/* <!-- Top Bar --> */}
<div className="bg-gray-900 text-white text-center py-2 text-sm flex justify-center items-center gap-11 ">
  <div className="flex-1 text-center">
    Sign up and get 20% off your first order. 
    <a href="#" className="underline hover:text-gray-300">Sign Up Now</a>
  </div>

  <div className="ml-auto mr-10">
    <ImCross />
  </div>
</div>


  {/* <!-- Navigation Bar --> */}
  <nav className="bg-white shadow">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      {/* <!-- Logo --> */}
      <div className="text-2xl font-bold text-gray-800">
      <Link href="/" className="hover:text-gray-900 ">  SHOP.CO</Link>
       
      </div>

      {/* <!-- Navigation Links --> */}
      <ul className="flex space-x-8 text-gray-600 font-medium items-center md:flex ">
        <li className='flex justify-center items-center'><Link href="/shop" className="hover:text-gray-900 ">Shop</Link><span className='text-4xl '><RiArrowDropDownLine  /></span> </li> 
        <li><a href="#sale" className="hover:text-gray-900">On Sale</a></li>
        <li><Link href="#new-arrival" className="hover:text-gray-900">New Arrivals</Link></li>
        <li><a href="#Brand" className="hover:text-gray-900">Brands</a></li>
      </ul>

      <div className="flex items-center space-x-4">
      {/* Container for the icon and input field */}
      <div className="relative w-[30vw]">
        {/* Search Icon inside the input */}
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <FaSearch  />
        </div>
        <input
          type="text"
          placeholder="Search for products..."
          className="border rounded-full bg-[#F0F0F0] px-12 py-2 w-full focus:outline-none focus:ring focus:ring-gray-300"
        />
      </div>
  
        <button className="text-gray-600 hover:text-gray-900 text-2xl">
          <ul>
          <li><Link href="/shoppingcart" className="hover:text-gray-900">   <FiShoppingCart /></Link></li>
          </ul>
     
        </button>
        <button className="text-gray-600 hover:text-gray-900 text-2xl">
        <FaRegCircleUser />

        </button>
      </div>
    </div>
  </nav>

    </div>
  )
}

export default Navbabr