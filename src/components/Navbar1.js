
import { useState } from "react";
import Hero from "./Hero";

import { LuLanguages} from "react-icons/lu";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <div className="app"> 
        <nav className="w-full">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <div className="flex">
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA3T2MrP_G2qRYkC74xJSFT-9gjV5qbGeTYOT9NCoogf236YprkJNsWGSnJr44DDUh4a8&usqp=CAU' className="rounded-full w-10 h-10  mt-1 "/>
                        <a href="javascript:void(0)">
                            <h2 className="text-3xl md:text-2xl lg:text-4xl xl:text-4xl font-bold text-white">tinder</h2>
                        </a></div>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 md:mr-[1rem] lg:mr-[6rem] xl:mr-[6rem] ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-start space-y-8 md:flex md:space-x-6 md:space-y-0 text-xl font-semibold">
                            <li className="text-white hover:text-indigo-200">
                                <a href="javascript:void(0)">Products</a>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a href="javascript:void(0)">Learn</a>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a href="javascript:void(0)">Safety</a>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a href="javascript:void(0)">Support</a>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a href="javascript:void(0)">Download</a>
                            </li>
                        </ul>
{/* Small screen */}
                        {/* <div className="mt-3 space-y-2 md:hidden xl:hidden lg:hidden"> */}
                    {/* <a
                        href="javascript:void(0)"
                        className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                    >
                        Languages
                    </a> */}
                    {/* <a
                        href="javascript:void(0)"
                        className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                    >
                        Log in
                    </a>
                </div> */}
                    </div>
                </div>
 {/* LG screen */}
                <div className="hidden space-x-2 md:inline-block overflow-hidden">
                {/* <span className=""><LuLanguages size={0}/> */}
                <a
                        href="javascript:void(0)"
                        className="px-0 py-2 md:px-0 md:py-2 lg:px-4 lg:py-2 xl:px-4 xl:py-2 text-white shadow text-xl md:text-lg lg:text-xl xl:text-xl font-semibold"
                    >
                        Language
                    </a>
                    {/* </span> */}
                    <a
                        href="javascript:void(0)"
                        className="px-0 py-2 md:px-0 md:py-1 lg:px-6 lg:py-2 xl:px-8 xl:py-2 text-gray-800 bg-white rounded-2xl shadow hover:bg-gray-100 text-xl md:text-lg lg:text-xl xl:text-xl font-semibold"
                    >
                        Log in
                    </a>
                </div>
            </div>
        </nav>
        <Hero/>
        
        
        </div>
    );
}