'use client'
import {
    createContext,
    useContext,
    useEffect,
    useState,
  } from "react";
  import {initializeLanguageDetector} from '@/lib/actions/detectLang'


export const textContext = createContext(null)

export const TextContextProvider =({children}) => {
  const [text, setText] = useState([]);
  const [translateTo, setTranslateTo] = useState('')
  const [notSupported, setNotSupported] = useState(null)
  const [newText, setnewText] = useState('')


    useEffect(()=>{
        async function fetchlanguage() {
          const lastMessageIndex = text.length - 1;
          const lastMessage = text[lastMessageIndex];
      
            const detection = await initializeLanguageDetector(lastMessage);
            setText((prev) => {
              const updatedMessages = [...prev];
              updatedMessages[lastMessageIndex] = {
                ...updatedMessages[lastMessageIndex],
                language: detection.language,
                percentage: detection.perc,
                notSupported: detection.notSupported
              };
              return updatedMessages;
            });
            setNotSupported(detection.notSupported)
          
        }
        fetchlanguage()

      },[text])

      const values = {
        text,
        setText, 
        translateTo, 
        setTranslateTo,
        notSupported,
        setNotSupported,
        newText,
        setnewText
      }

  
    return (
      <textContext.Provider value={values}>
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