
import React from 'react'
      
      import {AiOutlineInstagram} from "react-icons/ai";
      import {BiLogoTiktok} from "react-icons/bi";
      import {ImYoutube} from "react-icons/im";
      import {BsTwitter} from "react-icons/bs";
      import {FaFacebookF} from "react-icons/fa";

{/* <footer class="bg-[#EDFFFC9C] py-5">
        <div class="container mx-auto px-5 md:px-4 lg:px-2 xl:px-2 flex flex-col gap-10 items-center md:items-start lg:items-start xl:items-start shadow-xl"><div class="flex gap-2"><img class="mt-4 h-11 w-10 object-fill object-left rounded-3xl" src="./Group 2816.png">
          <h1 class="mt-6 lg:mt-5 font-bold text-[#000000] text-sm lg:text-2xl">Shrewd Business Solutions</h1>
        </div>
          
        <p class="font-bold px-2">Service</p>
          <div class="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-10 justify-between w-full">
            
            <ul class="flex flex-col gap-3 p-2">
              
              
                <li >Web Development </li>
                <li >Mobile Application Development</li>
                <li >Digital Marketing</li>
                <li >UI UX Designing</li>
            </ul>
            <ul class="flex flex-col gap-3 p-2">
                <li>Meet our Team</li>
                <li>Who we are?</li>
                <li>Our Projects</li>
                <li>Contact us</li>
            </ul>
        <ul class="flex flex-col gap-3 p-2">
                <li class=""><i class="fa-solid fa-location-dot"></i><span class="px-2">NO.175,Chandragiri Building <br> 2nd Floor, 
                  Avaram Palayam Rd, 
                  New Siddhapudur,<br> Tamil Nadu 641044</span></li>
                <li><i class="fa-solid fa-phone"></i><span class="px-2">099528 44699</span></li>
        <li class=" gap-2 "><i class="fa-solid fa-envelope"></i><span class="px-2">Shrewdbs530@gmail.com</span></li>
        </ul>
        </div>
        <div class="w-full flex justify-center">
              <div class="w-[300px] h-[2px] shadow-2xl bg-black/80"></div>
              </div>
              <div class="flex flex-row justify-center items-center gap-2">
                <p class="flex font-bold text-xl text-[#000000] md:pl-[17rem] lg:pl-[25rem] xl:pl-[33rem] mb-[8px]">Follow Us On </p>
                <div class="flex gap-2 justify-center mb-[6px]">
                  <p class="text-[#000000]"><i class="fa-brands fa-linkedin"></i></p>
                  <p class="text-[#000000]"><i class="fa-brands fa-facebook"></i></p>
                  <p class="text-[#000000]"><i class="fa-brands fa-square-instagram"></i></p>
                  <p class="text-[#000000]"><i class="fa-brands fa-youtube"></i></p>
                </div>
              </div>
            </div>
      </footer> */}

      
      
      const Footers = () => {
        return (
        
          
          <div className="container mx-auto px-5 md:px-4 lg:px-2 xl:px-2 flex flex-col gap-10 items-center md:items-start lg:items-start xl:items-start shadow-xl mt-6">
            
          
          <div class="flex flex-col md:flex-row lg:flex-row xl:flex-row lg:gap-20">
            
            <ul class="flex flex-col gap-1 text-lg">
            <h1 className="mt-4 lg:mt-2
             font-bold text-[#000000] text-sm lg:text-xl items-center md:items-start lg:items-start xl:items-start gap-8">Legal</h1>
             <div className='mt-4'>
              <li >Privacy </li>
                <li >Terms</li>
                <li >Cookie Policy</li>
                <li >Intellectual Property</li></div>
            </ul>
            
            <ul class="flex flex-col gap-1 text-lg">
            <h1 className="mt-4 lg:mt-2 font-bold text-[#000000] text-sm lg:text-xl bg-white rounded-lg shadow hover:bg-gray-300">Careers</h1>
            <div className='mt-4'>
              <li >Careers Portal</li>
                <li className=''>Tech Blog</li></div>

            </ul>


            <ul class="flex flex-col gap-1 text-lg">
            <h1 className="mt-4 lg:mt-2 font-bold text-[#000000] text-sm lg:text-xl">Social</h1>
            <div className='flex gap-4 mt-4'>
              <li className='text-gray-800 bg-white rounded-2xl shadow hover:bg-gray-100'><AiOutlineInstagram size={27}/></li>
                <li><BiLogoTiktok size={27}/></li>
                <li><ImYoutube size={27}/></li>
                <li><BsTwitter size={27}/></li>
                <li><FaFacebookF size={27}/></li></div>
            </ul>
            
            <ul class="flex flex-col gap-1 text-lg">
            <h1 className="mt-4 lg:mt-2
             text-[#000000] text-sm lg:text-xl items-center md:items-start lg:items-start xl:items-start ">FAQ</h1>
            <div className='mt-4'>
              <li >Designation</li>
                <li >Press Room</li>
                <li >Contact</li>
                <li >Promo Code</li></div>
            </ul>
            
            </div>
          
        </div>
        
          
        
          
        )
      }
      
      export default Footers