import ArrDown from '@/icons/ArrDown'
import React from 'react'

const TranslateButton = () => {
  return (
    <div className='flex gap-2 items-center w-fit'>
        Translate to:
        <div className='w-fit p-4 border-2 border-[#262b47] group hover:bg-[#262b47] hover:text-white rounded-2xl overflow-hidden flex items-center gap-4 cursor-pointer'>
        <select name="" id="" className='appearance-none focus:outline-none group-hover:bg-[#262b47] cursor-pointer'>
        <option value="en" >English</option>
        <option value="pt">Portuguese</option>
        <option value="es">Spanish</option>
        <option value="ru">Russian</option>
        <option value="tr">Turkish</option>
        <option value="fr">French</option>
      </select>
        <ArrDown className='fill-[#262b47] stroke-[#262b47] h-5 w-5 group-hover:fill-white group-hover:stroke-white'/>
        </div>
    </div>
  )
}

export default TranslateButton
