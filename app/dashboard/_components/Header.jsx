import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
function Header() {
  return (
    <div className = "flex p-4 items-center justify-between bg-secondary shadow-sm">
        <div class = "flex flex-row">
            <Image src = {'/logo.svg'} width={100} height={85} alt='logo'></Image>
            <div class="text-2xl p-4 font-bold">InterviewX</div>
        </div>
        <ul className="flex gap-5">
            <li className="hover:text-fuchsia-500 hover:font-bold transition cursor-pointer">
                Dashboard
            </li>
            <li className="hover:text-fuchsia-500 hover:font-bold transition cursor-pointer">
                Questions
            </li>
            <li className="hover:text-fuchsia-500 hover:font-bold transition cursor-pointer">
                Upgrade
            </li>
            <li className="hover:text-fuchsia-500 hover:font-bold transition cursor-pointer">
                How it works
            </li>
        </ul>
        <UserButton></UserButton>
    </div>
  )
}

export default Header