import { usetextContext } from '@/context/TextInputContext';
import ArrDown from '@/icons/ArrDown'
import React, { useEffect, useState } from 'react'
import { initializeLanguageTranslator } from "@/lib/actions/translate";


const TranslateButton = () => {
  const [selected, setSelected] = useState("");
  const { text, language,translateTo, setTranslateTo, setTranslation,setTranslationErr, loadingTrans, setLoadingTrans} = usetextContext()

  useEffect(()=>{
    setLoadingTrans(true)
    console.log(loadingTrans, '-------------before')
    setTranslateTo(selected)
  },[selected])

  useEffect(() => {

    if (translateTo) {
      translateLanguage();
      setLoadingTrans(false)
      console.log(loadingTrans, '-------------after')
    }

  }, [translateTo]);


  async function translateLanguage() {
    console.log('i am clicked--------------------')
    console.log(language, '--------',translateTo, '------------', text )
    const translate = await initializeLanguageTranslator(language, translateTo, text)
     setTranslation(translate.translatedText)
     setTranslationErr(translate.ErrorMsg)
 }



  return (
    <div className='flex gap-2 items-center w-fit'>
        <div className='w-fit p-4 border-2 border-[#262b47] group hover:bg-[#262b47] hover:text-white rounded-2xl overflow-hidden flex items-center gap-4 cursor-pointer'>
        <select  onChange={(e) => {setSelected(e.target.value)}} name="" id="" className='appearance-none focus:outline-none group-hover:bg-[#262b47] cursor-pointer'>
        <option value="">Translate</option>
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
