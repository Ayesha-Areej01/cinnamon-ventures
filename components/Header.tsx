"use client";

import { ClerkLoaded, SignedIn, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Form from "next/form";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";
import Image from "next/image";
import CSV from "../public/CSV.jpg";
import useBasketStore from "@/app/categories/[slug]/store";

function Header() {
  const { user } = useUser();
  //console.log(user);
  const itemCount = useBasketStore((state) => 
  state.items.reduce((total, itemCount) => total + itemCount.quantity, 0));

  const createClerkPasskey = async () => {
    try{
        const response = await user?.createPasskey();
        console.log(response);
    } catch (err) {
        console.error("Error:", JSON.stringify(err, null, 2))
    }
  }

  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2 sticky z-[100] h-30 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/50 backdrop-blur-lg transition-all bg-[#FCFAEE]">
      <div className="flex w-full flex-wrap justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-green-500 cursor-pointer mx-auto sm:mx-0"
        >
          <Image
            src={CSV}
            alt={"CSV"} width={100} height={100} 
            className="rounded-full w-12 h-12"/>
        </Link>
        <Form
          action="/search"
          className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
        >
          <input
            type="text"
            name="query"
            placeholder="Search products"
            className="grainy-light text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border w-full max-w-4xl"
          />
        </Form>

        <div className="flex items-center space-x-4 mt-4 sm:mt-0 flex-1 sm:flex-none">
          <Link
            href="/basket"
            className="flex-1 relative flex justify-center sm:jutify-start sm:flex-none items-center bg-[#587927] hover:bg-[#384f16] text-white font-bold py-2 px-4 rounded"
          >
          <TrolleyIcon className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">{itemCount}</span>
          <span>My Basket</span>
          </Link>
          <ClerkLoaded>
            <SignedIn>
                <Link 
                href="/orders"
                className="flex-1 relative flex justify-center sm:jutify-start sm:flex-none items-center bg-[#587927] hover:bg-[#384f16] text-white font-bold py-2 px-4 rounded"
                >
                    <PackageIcon className="w-6 h-6" />
                    <span>My Orders</span>
                </Link>
                </SignedIn>

            {user ? (
                <div className="flex items-center space-x-2">
                    <UserButton />

                    <div className="hidden sm:block text-xs">
                        <p className="text-gray-400">Welcome Back</p>
                        <p className="font-bold">{user.fullName}!</p>
                    </div>
                </div>
            ): (
                <SignInButton mode="modal"/>
            )}

          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
}

export default Header;
