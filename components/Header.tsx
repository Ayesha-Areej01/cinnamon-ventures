"use client";

import { ClerkLoaded, SignedIn, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Form from "next/form";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";
import Image from "next/image";
import CSV from "../public/CSV.jpg";
import useBasketStore from "@/app/categories/[slug]/store";
import { useState } from "react";

function Header() {
  const { user } = useUser();
  const [open, setOpen] = useState(false);
  //console.log(user);
  const itemCount = useBasketStore((state) => 
  state.items.reduce((total, itemCount) => total + itemCount.quantity, 0));


  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2 sticky z-[100] inset-x-0 top-0 w-full border-b backdrop-blur-lg transition-all">
  <div className="flex w-full justify-between items-center">
    {/* Logo */}
    <div className="flex space-x-2 items-center">
      <Link
        href="/"
        className="text-2xl font-bold text-green-500 cursor-pointer"
      >
        <Image
          src={CSV}
          alt={"CSV"}
          width={70}
          height={70}
          className="rounded-full w-10 h-10 sm:w-12 sm:h-12 sm:items-start"
        />
      </Link>
    </div>

    {/* Mobile Icons */}
    <div className="flex text-center sm:hidden">
      {/* Search Icon */}
      <Form
        action="/search"
        className="flex items-center w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
      >
        <input
          type="text"
          name="query"
          placeholder="Search products"
          className="grainy-light text-gray-800 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#587927] focus:ring-opacity-50 border border-gray-300 w-full sm:w-[300px] max-w-4xl"
        />
        <button
          type="submit"
          className="flex items-center justify-center px-4 py-2 bg-gray-100 hover:bg-gray-200 border border-l-0 border-gray-300 rounded-r-lg focus:outline-none"
          aria-label="Search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1011.5 19.5a7.5 7.5 0 005.15-2.15z"
            />
          </svg>
        </button>
      </Form>

      {/* Cart Icon */}
      <Link
        href="/basket"
        className="relative flex items-center p-2 rounded hover:bg-gray-200"
        aria-label="Basket"
      >
        <TrolleyIcon className="w-7 h-7 text-[#587927]" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
          {itemCount}
        </span>
      </Link>
    </div>

    {/* Search Bar and Cart for Large Screens */}
    <div className="hidden sm:flex items-center space-x-4 flex-1">
      {/* Search Bar */}
      <Form
        action="/search"
        className="flex items-center w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
      >
        <input
          type="text"
          name="query"
          placeholder="Search products"
          className="grainy-light text-gray-800 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-gray-300 w-full sm:w-[300px] max-w-4xl"
        />
        <button
          type="submit"
          className="flex items-center justify-center px-4 py-2 bg-gray-100 hover:bg-gray-200 border border-l-0 border-gray-300 rounded-r-lg focus:outline-none"
          aria-label="Search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1011.5 19.5a7.5 7.5 0 005.15-2.15z"
            />
          </svg>
        </button>
      </Form>

      {/* Cart */}
      <Link
        href="/basket"
        className="relative flex items-center bg-[#587927] hover:bg-[#384f16] text-white font-bold py-2 px-4 rounded"
      >
        <TrolleyIcon className="w-6 h-6" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {itemCount}
        </span>
        <span className="hidden sm:block ml-2">My Cart</span>
      </Link>
    </div>
  </div>
</header>

  );
}

export default Header;

// "use client"
// import Link from 'next/link';
// import React, { useState } from 'react'
// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { FiMenu } from "react-icons/fi";
// import Image from 'next/image';
// import { IoCloseOutline } from 'react-icons/io5';
// import clsx from 'clsx';
// type Props = {}

// export default function Header({}: Props) {

//     const [isSideMenuOpen, setMenu] = useState(false)

//     const navlinks=[
//         {
//             label:"Collection",
//             link:"/"
//         },
//         {
//             label:"Men",
//             link:"/men"
//         },
//         {
//             label:"Women",
//             link:"/women"
//         },
//         {
//             label:"Contact",
//             link:"/contact"
//         }
//         ];

//   return (
//     <main>
//     <nav className='flex justify-between px-8 items-center py-6 '>
//         <div className='flex items-center gap-4'>
//       <section className='flex items-center gap-4'>
//         {/*menu*/}
//         <FiMenu onClick={()=>setMenu(true)}
//         className='text-3xl cursor-pointer lg:hidden' 
//         /> 
//         {/* Logo */}
//         <Link href={"/"} className='text-xl md:text-4xl font-serif'>
//             E-Store
//         </Link>
//       </section>
//       {navlinks.map((d, i)=>(
//                 <Link key={i} className="hidden lg:block  text-gray-400 hover:text-black" href={d.link} >
//                 {d.label}
//                 </Link>
//             ))}
//       </div>
//       {/* sidebar mobile menu */}
//       <div className={clsx
//         ('fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all', isSideMenuOpen && 'translate-x-0')}>
//         <section className='text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex'>
//             <IoCloseOutline 
//             onClick={()=>setMenu(false)}
//             className='mt-0 mb-8 text-3xl cursor-pointer'/>
//             {navlinks.map((d, i)=>(
//                 <Link key={i} className="font-bold" href={d.link} >
//                 {d.label}
//                 </Link>
//             ))}
//         </section>
//       </div>

//       <section className='flex items-center gap-4'>
//         {/* cart icon */}
//         <Link href="/cart">
//         <AiOutlineShoppingCart 
//         className='text-3xl'/>
//         </Link>
//         {/*avatar image*/}
//         <Link href="/account">
//         <Image
//         src="" 
//         alt="avatar" 
//         width={40} 
//         height={40}
//         className='w-8 h-8 rounded-full'/>
//         </Link>
//       </section>
//     </nav>
//     <hr className=''/>
//     </main>
//   )
// }