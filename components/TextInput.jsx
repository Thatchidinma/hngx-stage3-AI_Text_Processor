import { usetextContext } from '@/context/TextInputContext'
import SendIcon from '@/icons/Send'
import React, { useState } from 'react'
import TranslateButton from './TranslateButton'

const TextInput = () => {
  const [getText, setGetText ] = useState('')
  const {text, setText} = usetextContext()

  const submitText =(e)=>{
    localStorage.setItem("visited", true);

    setText((prev) => [
      ...prev,
      {
        text: getText,
        language: "",
        percentage: 0,
        translation: "",
        translationErr: null,
        notSupported: null
      }
    ])
    setGetText('')
    e.preventDefault();
  }



  return (
    <div className='absolute bottom-10 w-full'>
      {text.length > 0 && 
      <div className='flex justify-self-end md:mr-5 lg:mr-24 gap-5'>
      <TranslateButton className=''/>
      <button className="w-fit p-4 border-2 border-[#262b47] group hover:bg-[#6b76b4] hover:cursor-not-allowed hover:text-white rounded-2xl overflow-hidden flex items-center gap-4 cursor-pointer">Summarize</button>
      </div>
      }
        <form className="relative lg:mx-10 mt-2 ">
            <input value={getText} onChange={(e) => setGetText(e.target.value)} placeholder="Enter text here" className='w-full border-2 rounded-3xl focus:outline-none hover:border-[#02040F] p-4  pl-5 pr-16'/>
            <button onClick={submitText} ><SendIcon className='absolute top-3 right-5 hover:scale-105'/></button>
        </form>
    </div>
  )
}

export default TextInput
