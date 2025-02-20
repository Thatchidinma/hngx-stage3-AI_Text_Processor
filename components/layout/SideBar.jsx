'use client'
import ArrDownIcon from '@/icons/ArrDownCircled'
import HamburgerIcon from '@/icons/Hamburger'
import PlusIcon from '@/icons/Plus'
import React, { useState } from 'react'

const SideBar = () => {
    const [extended, setExtended] = useState(true)

  return (
    <nav className='hidden bg-[#02040F] h-full rounded-2xl text-white p-8 md:flex flex-col justify-between'>
        <div className='flex flex-col gap-2 items-end'>
            <HamburgerIcon onClick={()=>{setExtended(!extended)}} />
            {extended &&
            <div className="mt-5 grid gap-2">
                <div className="w-fit border-2 bg-[#0A0C19] border-[#282934] p-4 rounded-2xl flex justify-between items-center gap-20 hover:bg-[#262b47]">
                    <PlusIcon/>
                    <p className='text-nowrap'>New Text</p>
                </div>
                <div className="border-2 bg-[#0A0C19] border-[#282934] w-full p-4 rounded-2xl flex justify-between items-center gap-2 hover:bg-[#262b47]">
                    <ArrDownIcon/>
                    <p>Recent</p>
                </div>
            </div>}
        </div>
        {extended && <div className='text-center'>
            Thatchidinma 2025
        </div>}
    </nav>
  )
}

export default SideBar
