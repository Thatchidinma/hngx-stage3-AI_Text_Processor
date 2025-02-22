'use client'
import Greet from "@/components/Greet";
import Header from "@/components/Header";
import TextInput from "@/components/TextInput";
import { usetextContext } from "@/context/TextInputContext";
import { useEffect, useState } from "react";

export default function Home() {
  const {text, translateTo} = usetextContext()
  const [beenHere, setBeenHere] = useState(null);

  useEffect(() => {
      const visited = localStorage.getItem("visited");
      if (!visited) {
          setBeenHere(false);
      } else {
          setBeenHere(true);
      }
  }, []);


  return (
    <main className='relative w-full flex flex-col'>

      <Header/>

      {text.length === 0 && beenHere === false && <div className="max-w-[900px] mx-auto mt-20">
        <Greet/>
      </div> }

      <div className="overflow-y-scroll mb-48 md:mx-5 lg:mx-24">
      {text.length !== 0 && 
        (
          text.map((msg, index) => (
            <div key={index} className="flex flex-col gap-5 mt-5">
              <p 
                className="p-4 border-l-8 rounded-3xl rounded-br max-w-[80%] lg:max-w-[50%] border ml-auto "
              >
                {msg.text}
              </p>
    
              {msg.language && !msg.notSupported && (
                <p className="p-4 border-r-8 rounded-3xl rounded-bl max-w-[80%] lg:max-w-[50%] border mr-auto">
                  Detected {msg.percentage} {msg.language}
                </p>
              )}

              {msg.notSupported && (
                <p className="italic text-red-600">{msg.notSupported}</p>
              )}


              {msg.translation && (
                <div className="p-4 border-l-8 rounded-3xl max-w-[80%] lg:max-w-[50%] border ml-auto">
                  <p className="font-bold">Translation ({translateTo}) :</p>
                  <p>{msg.translation}</p>
                </div>
              )}

              {msg.translationErr && (
                <p className="italic text-red-600">
                  {msg.translationErr}
                </p>
              )}
            </div>
          ))
  )
        }
      </div>
      <TextInput/>
    </main>
  );
}
