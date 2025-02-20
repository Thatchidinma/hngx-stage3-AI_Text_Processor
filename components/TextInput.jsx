import { textContext, usetextContext } from '@/context/TextInputContext'
import SendIcon from '@/icons/Send'
import React, { useEffect, useState } from 'react'

const TextInput = () => {
  const [getText, setGetText ] = useState(null)
  const {text, setText} = usetextContext()

  useEffect(()=>{

  })
  const submitText =(e)=>{
    setText(getText)
    e.preventDefault();
  }



  return (
    <div className='absolute bottom-10 w-full'>
        <form className="relative mx-10 ">
            <input onChange={(e) => setGetText(e.target.value)} placeholder="Enter text here" className='w-full border-2 rounded-3xl focus:outline-none hover:border-[#02040F] p-4  pl-5 pr-16'/>
            <button onClick={submitText} ><SendIcon className='absolute top-3 right-5 hover:scale-105'/></button>
        </form>
    </div>
  )
}

export default TextInput
