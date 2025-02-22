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


    useEffect(()=>{
        async function fetchlanguage() {
          if (text.length === 0) return;
          const lastMessageIndex = text.length - 1;
          const lastMessage = text[lastMessageIndex];
          if (!lastMessage.language) {
            const detection = await initializeLanguageDetector(lastMessage.text);
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
        }
        fetchlanguage()

      },[text])

      const values = {
        text,
        setText, 
        translateTo, 
        setTranslateTo,
        notSupported,
        setNotSupported
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