'use client'
import ArrDownIcon from '@/icons/ArrDownCircled'
import HamburgerIcon from '@/icons/Hamburger'
import PlusIcon from '@/icons/Plus'
import Link from 'next/link'
import React, { useState } from 'react'

const SideBar = () => {
    const [extended, setExtended] = useState(true)

  return (
    <nav className='hidden bg-[#02040F] h-full rounded-2xl text-white p-8 lg:flex flex-col justify-between'>
        <div className='flex flex-col gap-2 items-end'>
            <HamburgerIcon onClick={()=>{setExtended(!extended)}} />
            {extended &&
            <div className="mt-5 grid gap-2">
                <Link href='/'>
                    <div className="border-2 bg-[#0A0C19] border-[#282934] p-4 rounded-2xl flex justify-between items-center gap-20 hover:bg-[#262b47]">
                        <PlusIcon/>
                        <p className='text-nowrap'>New Text</p>
                    </div>
                </Link> 

                <Link href='/About'>
                    <div className="border-2 bg-[#0A0C19] border-[#282934] p-4 rounded-2xl flex justify-between items-center gap-20 hover:bg-[#262b47]">
                        <PlusIcon/>
                        <p className='text-nowrap'>About Text Processor</p>
                    </div>
                </Link> 

                <Link href={'https://github.com/Thatchidinma/hngx-stage3-AI_Text_Processor'}> 
                <div className="border-2 bg-[#0A0C19] border-[#282934] w-full p-4 rounded-2xl flex justify-between items-center gap-2 hover:bg-[#262b47]">
                    <ArrDownIcon/>
                    <p>Veiw on Github</p>
                </div>
                </Link>
            </div>}
        </div>
        {extended && <div className='mx-auto w-fit hover:animate-bounce hover:text-[#6a78c6] '>
            <Link href='https://thatchidinma.com' className=''>Thatchidinma 2025</Link>
        </div>}
    </nav>
  )
}

export default SideBar
