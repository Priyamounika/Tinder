import React from 'react'

const Hero = () => {
  return (
   <div className='text-white h-[80vh] flex flex-col justify-center items-center gap-12'>
    <h1 className='text-center font-bold text-3xl md:text-6xl lg:text-7xl xl:text-7xl'>Satrt something epic. </h1>
    <button className='px-20 md:px-10 lg:px-8 xl:px-8 py-2 text-white bg-red-500 rounded-full shadow hover:bg-red-500 text-xl font-semibold '>Create account</button>
    <div className="space-y-2 md:hidden xl:hidden lg:hidden">
        <button className='px-28 py-2 text-white border rounded-full hover:border-white text-xl font-semibold'>Log in</button></div>
        <div className='md:hidden lg:hidden xl:hidden'>
 <img src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' className='w-22 h-16'/> 
 </div>
 <div>
 <p className='text-gray-900 text-center md:hidden lg:hidden xl:hidden '>All photos are models and used for illustrative porpuses only</p></div>
 {/* <div className='flex justify-end items-end'>
 <p className='text-gray-900  hidden md:flex lg:flex xl:flex '>All photos are models and used for illustrative porpuses only</p>
 </div> */}
  </div>
        
//        <div className='container mx-auto flex flex-col justify-center items-center h-[100vh] gap-6'>
//         <h1 className='text-white font-bold text-xl md:text-5xl lg:text-6xl xl:text-6xl'>Satrt something epic.</h1>

// <div>
// <div><button className='px-20 md:px-10 lg:px-8 xl:px-8 py-2 text-white bg-red-500 rounded-full shadow hover:bg-red-500 text-xl font-semibold '>Create account</button>
// <button className='text-white px-20 py-3 md:px-8 md:py-3 lg:px-8 lg:py-3 xl:px-8 xl:py-2 md:hidden lg:hidden xl:hidden'>Log in</button></div>
// <div className='md:hidden lg:hidden xl:hidden'>
//   <img src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' className=''/>
// </div>
// </div>



//        </div> 
    

  )
}

export default Hero
