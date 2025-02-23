import { usetextContext } from '@/context/TextInputContext';
import ArrDown from '@/icons/ArrDown'
import React, { useEffect, useState } from 'react'
import { initializeLanguageTranslator } from "@/lib/actions/translate";


const TranslateButton = ({className}) => {
  const [selected, setSelected] = useState("");
  const { text, setText,translateTo, setTranslateTo} = usetextContext()

  useEffect(()=>{
    setTranslateTo(selected)
  },[selected])

  useEffect(() => {

    if (translateTo) {
      translateLanguage();
    }

  }, [translateTo]);


  async function translateLanguage() {
    if (text.length === 0) return;

    const lastMessageIndex = text.length - 1;
    const lastMessage = text[lastMessageIndex]; 
    const lastText = lastMessage?.text; 
    const lastLanguage = lastMessage?.language;
    console.log('i am clicked--------------------')
    console.log(lastLanguage, '--------',translateTo, '------------', lastText )
    const translate = await initializeLanguageTranslator(lastLanguage, translateTo, lastText)
      setText((prev) => {
            const updatedMessages = [...prev];
            updatedMessages[lastMessageIndex] = {
                ...updatedMessages[lastMessageIndex],
                translation: translate.translatedText,
                translationErr: lastLanguage === translateTo ? "can't translate to same language" : translate.ErrorMsg
            };
            return updatedMessages;
        });

 }



  return (
    <div className={`flex gap-2 items-center w-fit ${className}`}>
        <div className='w-fit p-4 border-2 border-[#262b47] group hover:bg-[#262b47] hover:text-white rounded-2xl overflow-hidden flex items-center gap-4 cursor-pointer'>
        <select onChange={(e) => {setSelected(e.target.value)}} name="" id="" className='appearance-none focus:outline-none group-hover:bg-[#262b47] cursor-pointer w-fit'>
        <option >Translate</option>
        <option value="en" >English(en)</option>
        <option value="pt">Portuguese(pt)</option>
        <option value="es">Spanish(es)</option>
        <option value="ru">Russian(ru)</option>
        <option value="tr">Turkish(tr)</option>
        <option value="fr">French(fr)</option>
      </select>
        <ArrDown className='fill-[#262b47] stroke-[#262b47] h-5 w-5 group-hover:fill-white group-hover:stroke-white'/>
        </div>
    </div>
  )
}

export default TranslateButton
