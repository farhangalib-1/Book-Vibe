import React from 'react'
import bookImage from "../../assets/hero_img.jpg"
import Allbooks from './Allbooks'
const Homepage = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-[70vh]  w-11/12 mx-auto mt-7 rounded-2xl">
  <div className="hero-content flex flex-col justify-between lg:flex-row-reverse w-full">
    <img
      src={bookImage}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div className='space-y-6'>
      <h1 className="text-6xl font-bold">Books to freshen up <br /> your bookshelf</h1>
      <button className="btn bg-[#23BE0A] rounded-lg text-white">Get Started</button>
    </div>
  </div>
      </div>
      <Allbooks />
    </div>
  )
}

export default Homepage
