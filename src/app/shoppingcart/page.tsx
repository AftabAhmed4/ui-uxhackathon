import Link from 'next/link'
import React from 'react'
import Tshirt from "../../../public/image 7 (1).png"
import Jense from "../../../public/image 7.png"
import Shirt from "../../../public/Frame 33.png"
import Ashirt from "../../../public/Frame 34.png"
import Image from 'next/image'

const page = () => {
  return (
    <div> 
        {/* <div className='mt-6 py-4 px-4'>
            <Link href="/" className="hover:text-gray-900 "> HOME</Link>
            </div> */}
            
  <div className="max-w-7xl mx-auto px-4 py-6">
    {/* <!-- Breadcrumb --> */}
    <nav className="text-sm mb-6">
      <Link href="/" className="text-gray-500 hover:text-gray-900">Home</Link> 
      <span className="mx-2 text-gray-500">/</span>
      <span className="text-black font-bold">Cart</span>
    </nav>
    
    {/* <!-- Main Cart Section --> */}
    <div className="flex flex-col lg:flex-row gap-6">
      {/* <!-- Cart Items --> */}
      <div className="bg-white shadow-md rounded-lg p-6 flex-1">
        <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>
        {/* <!-- Item 1 --> */}
        <div className="flex items-center border-b pb-4 mb-4">

        <Image src={Tshirt} alt="Ashirt" className="rounded-xl w-24 " /> 
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-semibold">Gradient Graphic T-shirt</h3>
            <p className="text-gray-500">Size: Large</p>
            <p className="text-gray-500">Color: White</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-lg font-semibold">$145</span>
            <div className="flex items-center border rounded-md">
              <button className="px-3 py-1 text-gray-500 hover:bg-gray-100">-</button>
              <span className="px-4">1</span>
              <button className="px-3 py-1 text-gray-500 hover:bg-gray-100">+</button>
            </div>
            <button className="text-red-500 hover:text-red-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        {/* <!-- Item 2 --> */}
      <div  className="flex items-center border-b pb-4 mb-4">

      <Image src={Jense} alt="Ashirt" className="rounded-xl w-24" /> 
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-semibold">Checkered Shirt</h3>
            <p className="text-gray-500">Size: Medium</p>
            <p className="text-gray-500">Color: Red</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-lg font-semibold">$180</span>
            <div className="flex items-center border rounded-md">
              <button className="px-3 py-1 text-gray-500 hover:bg-gray-100">-</button>
              <span className="px-4">1</span>
              <button className="px-3 py-1 text-gray-500 hover:bg-gray-100">+</button>
            </div>
            <button className="text-red-500 hover:text-red-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        {/* <!-- Item 3 --> */}
        <div className="flex items-center border-b pb-4">
   
        <Image src={Ashirt} alt="Ashirt" className="rounded-xl w-24 " /> 
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-semibold">Skinny Fit Jeans</h3>
            <p className="text-gray-500">Size: Large</p>
            <p className="text-gray-500">Color: Blue</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-lg font-semibold">$240</span>
            <div className="flex items-center border rounded-md">
              <button className="px-3 py-1 text-gray-500 hover:bg-gray-100">-</button>
              <span className="px-4">1</span>
              <button className="px-3 py-1 text-gray-500 hover:bg-gray-100">+</button>
            </div>
            <button className="text-red-500 hover:text-red-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Order Summary --> */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-1/3">
        <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
        <div className="flex justify-between mb-4">
          <span>Subtotal</span>
          <span className="font-semibold">$565</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Discount (-20%)</span>
          <span className="text-red-500">-$113</span>
        </div>
        <div className="flex justify-between mb-6">
          <span>Delivery Fee</span>
          <span>$15</span>
        </div>
        <div className="flex justify-between text-lg font-bold mb-6">
          <span>Total</span>
          <span>$467</span>
        </div>
        <div className="flex items-center mb-4">
          <input type="text" placeholder="Add promo code" className="flex-1 px-4 py-2 border rounded-md focus:outline-none"/>
          <button className="ml-2 bg-black text-white px-4 py-2 rounded-md">Apply</button>
        </div>
        <button className="w-full bg-black text-white px-6 py-3 rounded-md text-lg font-bold hover:bg-gray-800">Go to Checkout</button>
      </div>
    </div>
  </div>
    </div>
  )
}

export default page