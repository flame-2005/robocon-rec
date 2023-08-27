import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/footer'
import Team from '@/components/team'
import Ecep from '@/components/ecep'
import Mech from '@/components/mech'
import Support from '@/components/support'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [hidden,setHidden] = useState('hidden')
  const onClick = ()=>{
    if (hidden == 'hidden') {
      setHidden("")
    } else {
      setHidden('hidden')
    }
  }
  return (
    <>
    
<nav class="bg-white border-gray-200  dark:bg-purple-800 dark:border-gray-700 shadow-xl sticky top-0 w-full">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
    <a href="#" class="flex items-center">
        <img src="https://robocon.nitk.ac.in/static/media/logo.8a3e5f8c1eae2d6d98e7.png" class="h-12 mr-3" alt="Flowbite Logo" />

    </a>
    <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false" onClick={onClick}>
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class={`${hidden} duration-300 w-full md:block md:w-auto`} id="navbar-dropdown">
      <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-purple-800 md:dark:bg-purple-800 dark:border-gray-700">
      
        
        <li className='md:w-8 md:h-7'>
          <Link href="/" class="block ml-4 py-2 pl-3 pr-4 dark:bg-purple-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-300 md:p-0 dark:text-white  font-bold dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:text-xs duration-75 md:fixed">Home</Link>
        </li>
        <li className='md:w-8 md:h-7'>
          <a href="#" class="block ml-4 py-2 pl-3 pr-4 md:hover:text-purple-300 dark:bg-purple-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  font-bold  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:text-xs duration-75 md:fixed">About</a>
        </li>
        <li className='md:w-8 md:h-7'>
          <a href="#" class="block ml-4 py-2 pl-3 pr-4 md:hover:text-purple-300 dark:bg-purple-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  font-bold dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:text-xs duration-75 md:fixed">Gallery</a>
        </li>
        <li className='md:w-8 md:h-7' >
          <a href="#" class="block ml-4 py-2 pl-3 pr-4 md:hover:text-purple-300 dark:bg-purple-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  font-bold dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:text-xs duration-75 md:fixed">Team</a>
        </li>
        <li className='md:w-8 md:h-7'>
          <a href="#" class="block ml-4 py-2 pl-3 pr-4 md:hover:text-purple-300 dark:bg-purple-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  font-bold dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:text-xs duration-75 md:fixed">Support</a>
        </li>
        <li className='md:w-8 md:h-7'>
          <a href="#" class="block ml-4 md:ml-8 py-2 pl-3 pr-4 md:hover:text-purple-300 dark:bg-purple-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  font-bold dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:text-xs duration-75 md:fixed">Sponcers</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>

<nav class="bg-white bg-transparent mx-auto mt-4 md:w-[50vw] w-full z-20  border-b border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
 
  <div class="m-auto justify-between w-full flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex items-center flex-row p-4 md:p-0 mt-4 font-medium border border-purple-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-purple-800 md:dark:bg-transparent dark:border-purple-700">
      <li>
        <Link href="#TEAM" scroll={true} class="block py-2 pl-3 pr-4 text-white rounded bg-transparent md:p-0" aria-current="page">CORE TEAM</Link>
      </li>
      <li>
        <Link href="#SUPPORT" class="block py-2 pl-3 pr-4 text-white rounded bg-transparent md:p-0">SUPPORT</Link>
      </li>
      <li>
        <Link href="#ECEP" class="block py-2 pl-3 pr-4 text-white rounded bg-transparent md:p-0">ECEP</Link>
      </li>
      <li>
        <Link href="#MECH" class="block py-2 pl-3 pr-4 text-white rounded bg-transparent md:p-0">MECHNICAL</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>
<Team/>
<Ecep/>
<Mech/>
<Support/>
  <Footer/>



    </>
  )
}
