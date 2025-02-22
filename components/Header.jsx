import { usetextContext } from '@/context/TextInputContext'
import React from 'react'

const Header = () => {
  const { text, setText,setTranslateTo} = usetextContext()

  const clearChat =()=>{
    setText([]),
    setTranslateTo([])
  }
  
  return (
    <header className='flex justify-between items-center p-5 text-xl'>
      <p className="">AI Text Processor</p>
      <button onClick={clearChat} className={`${text.length === 0 ? 'hidden' : ''} w-fit p-4 border-2 border-[#262b47] hover:bg-[#262b47] hover:text-white rounded-2xl cursor-pointer`}> Clear chat</button>
    </header>
  )
}

export default Header
