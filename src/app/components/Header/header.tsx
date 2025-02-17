import Image from 'next/image'
import Logo from '../../../../public/Sachxerisgerbi-24bit.png'
import React from 'react'
import Link from 'next/link'

const header = () => {
  return (
    <div className='relative flex items-center justify-around bg-[#32404A] min-h-20 max-h-20'>
        <div className="
            absolute 
            cursor-pointer 
            top-[20%] 
            left-[12%] 
            w-32 
            h-32 
            bg-white 
            border-gray-200 
            border-4 
            rounded-full 
            shadow-xl 
            hover:shadow-2xl 
            hover:scale-105
            transform 
            transition
            duration-300 
            flex 
            items-center 
            justify-center
        ">
            <div className="relative w-[90px] h-[90px]">
                <Image 
                src={Logo.src} 
                width={50}
                height={50}
                alt="Sachkhere Logo" 
                className="w-full h-full object-contain" 
                />
            </div>
        </div>
        <ul className='flex items-center justify-center gap-14 text-white font-bold text-xl'>
            <li className='hover:scale-110 transform transition duration-300'>
                <Link href={'/'} className='py-2 px-4 hover:bg-white hover:text-black rounded-lg'>Home</Link>
            </li>
            <li className='hover:scale-110 transform transition duration-300'>
                <Link href={'/contact'} className='py-2 px-4 hover:bg-white hover:text-black rounded-lg'>Contact</Link>
            </li>
            <li className='hover:scale-110 transform transition duration-300'>
                <Link href={'/about'} className='py-2 px-4 hover:bg-white hover:text-black rounded-lg'>About</Link>
            </li>
            <li className='hover:scale-110 transform transition duration-300'>
                <Link href={'/government'} className='py-2 px-4 hover:bg-white hover:text-black rounded-lg'>Government</Link>
            </li>
        </ul>
    </div>
  )
}

export default header