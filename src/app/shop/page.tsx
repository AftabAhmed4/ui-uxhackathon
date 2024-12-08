import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Ashirt from "../../../public/Frame 34.png"
import Shirt from "../../../public/Frame 33.png"
import Asd from "../../../public/image 7.png"

const page = () => {
  return (
    <div>
    
                
  <div className="max-w-7xl mx-auto px-4 py-6">
    {/* <!-- Breadcrumb --> */}
    <nav className="text-sm mb-6">
      <Link href="/" className="text-gray-500 hover:text-gray-900">Home</Link> 
      <span className="mx-2 text-gray-500">/</span>
      <span className="text-black font-bold">shop</span>
    </nav>

    {/* <!-- Main Container --> */}
  <div className="container mx-auto py-8 px-4">
    {/* <!-- Header --> */}
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-semibold">Casual</h1>
      <p className="text-gray-600">Showing 1-10 of 100 Products • Sort by: <span className="font-medium">Most Popular</span></p>
    </header>

    {/* <!-- Content --> */}
    <div className="flex gap-6">
      {/* <!-- Filters Sidebar --> */}
      <aside className="w-1/4 bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-medium mb-4">Filters</h2>

        {/* <!-- Price Filter --> */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Price</h3>
          <input type="range" min="50" max="200" className="w-full"/>
          <div className="flex justify-between text-xs text-gray-600 mt-2">
            <span>$50</span>
            <span>$200</span>
          </div>
        </div>

        {/* <!-- Colors --> */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Colors</h3>
          <div className="flex gap-2">
            <span className="w-6 h-6 bg-red-500 rounded-full border"></span>
            <span className="w-6 h-6 bg-blue-500 rounded-full border"></span>
            <span className="w-6 h-6 bg-yellow-500 rounded-full border"></span>
            <span className="w-6 h-6 bg-green-500 rounded-full border"></span>
            <span className="w-6 h-6 bg-purple-500 rounded-full border"></span>
          </div>
        </div>

        {/* <!-- Sizes --> */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Size</h3>
          <div className="grid grid-cols-3 gap-2 text-center">
            <span className="py-1 px-2 border rounded-lg text-gray-600">S</span>
            <span className="py-1 px-2 border rounded-lg text-gray-600">M</span>
            <span className="py-1 px-2 border rounded-lg text-gray-600">L</span>
            <span className="py-1 px-2 border rounded-lg text-gray-600">XL</span>
          </div>
        </div>
{/* 
        <!-- Dress Style --> */}
        <div>
          <h3 className="text-sm font-medium mb-2">Dress Style</h3>
          <ul className="text-gray-600 space-y-1">
            <li><input type="checkbox" className="mr-2"/> Casual</li>
            <li><input type="checkbox" className="mr-2"/> Formal</li>
            <li><input type="checkbox" className="mr-2"/> Party</li>
            <li><input type="checkbox" className="mr-2"/> Gym</li>
          </ul>
        </div>

        <button className="mt-6 w-full py-2 bg-black text-white rounded-lg">Apply Filter</button>
      </aside>

      {/* <!-- Product Grid --> */}
      <div className="w-3/4">
        <div className="grid grid-cols-3 gap-6">
          {/* <!-- Product Card --> */}
          <div className="bg-white p-4 rounded-lg shadow">
      
          <Image src={Ashirt} alt="Ashirt" className="rounded-xl " />

            <h3 className="text-sm font-medium">Gradient Graphic T-shirt</h3>
            <p className="text-gray-600">$145</p>
          </div>
       
          {/* <!-- Product Card --> */}
          <div className="bg-white p-4 rounded-lg shadow">
      
          <Image src={Shirt} alt="Ashirt" className="rounded-xl " />

            <h3 className="text-sm font-medium">Gradient Graphic T-shirt</h3>
            <p className="text-gray-600">$145</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
      
      <Image src={Shirt} alt="Ashirt" className="rounded-xl " />

        <h3 className="text-sm font-medium">Gradient Graphic T-shirt</h3>
        <p className="text-gray-600">$145</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
      
      <Image src={Shirt} alt="Ashirt" className="rounded-xl " />

        <h3 className="text-sm font-medium">Gradient Graphic T-shirt</h3>
        <p className="text-gray-600">$145</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
      
      <Image src={Asd} alt="Ashirt" className="rounded-xl " />

        <h3 className="text-sm font-medium">Gradient Graphic T-shirt</h3>
        <p className="text-gray-600">$145</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
      
      <Image src={Asd} alt="Ashirt" className="rounded-xl " />

        <h3 className="text-sm font-medium">Gradient Graphic T-shirt</h3>
        <p className="text-gray-600">$145</p>
      </div>
      


      
      
{/* 
          <!-- Add more product cards below --> */}
        </div>

        {/* <!-- Pagination --> */}
        <div className="flex justify-center mt-8">
          <button className="px-4 py-2 mx-1 bg-gray-300 rounded">Previous</button>
          <button className="px-4 py-2 mx-1 bg-black text-white rounded">1</button>
          <button className="px-4 py-2 mx-1 bg-gray-300 rounded">2</button>
          <button className="px-4 py-2 mx-1 bg-gray-300 rounded">Next</button>
        </div>
      </div>
    </div>
  </div>
    </div>
    </div>
  )
}

export default page