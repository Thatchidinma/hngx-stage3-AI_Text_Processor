'use client'
import {
    createContext,
    useContext,
    useEffect,
    useState,
  } from "react";
  import {initializeLanguageDetector} from '@/lib/actions/detectLang'
import { initializeLanguageTranslator } from "@/lib/actions/translate";


export const textContext = createContext(null)

export const TextContextProvider =({children}) => {
    const [text, setText] = useState(null);
    const [language, setLanguage] = useState('')
    const [percentage, setPercentage] = useState(0)
    const [translation, setTranslation] = useState('')
    const [translationErr, setTranslationErr] = useState('')
    const [translateTo, setTranslateTo] = useState('')

    useEffect(()=>{
        async function fetchlanguage() {
            const detcetion = await initializeLanguageDetector(text)
            setLanguage(detcetion.language)
            setPercentage(detcetion.perc)
        }
        fetchlanguage()

      })

  
    return (
      <textContext.Provider value={{ text, setText,language, setLanguage,percentage, setPercentage, translation, setTranslation,translationErr, setTranslationErr, translateTo, setTranslateTo}}>
        {children}
      </textContext.Provider>
    );
  }
  
  export function usetextContext() {
    const context = useContext(textContext);
  
    if (!context) {
      throw new Error("use text context within the context provider");
    }
    return context;
  }