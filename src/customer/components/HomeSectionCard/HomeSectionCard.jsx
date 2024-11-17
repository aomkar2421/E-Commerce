import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
     
      <div className='h-[13rem] w-[10rem]'>
        <img className='object-cover object-top' src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/d/f/y/s-st40-vebnor-original-imah4uzgm2ryd8hx.jpeg?q=70" alt=""/>
      </div>
     
      <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'>VeBNoR</h3>
        <p className='mt-2 text-sm text-gray-500'>Men Regular Fit Self Design Spread Collar Casual Shirt</p>
      </div>
      
    </div>
  )
}

export default HomeSectionCard