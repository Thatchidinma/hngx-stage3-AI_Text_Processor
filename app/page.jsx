'use client'
import Greet from "@/components/Greet";
import Header from "@/components/Header";
import TextInput from "@/components/TextInput";
import TranslateButton from "@/components/TranslateButton";
import { usetextContext } from "@/context/TextInputContext";
import { useEffect } from "react";

export default function Home() {


  const {text, language, setLanguage,percentage, setPercentage,translation, setTranslation, translationErr} = usetextContext()

  return (
    <main className='relative border w-full flex flex-col'>
      <Header/>
      {!text && <div className="max-w-[900px] mx-auto mt-20">
        <Greet/>
      </div> }
      <div className="overflow-y-scroll mb-32 md:mx-5 lg:mx-24">
      {text && <div className="flex flex-col gap-5">
        <p className="p-4 border-l-8 rounded-3xl rounded-br max-w-[80%] lg:max-w-[50%] border ml-auto "> {text}</p>
        <p className="p-4 border-r-8 rounded-3xl rounded-bl max-w-[80%] lg:max-w-[50%] border">The above text is {percentage} {language}</p>
        <TranslateButton/>
        <div className="p-4 border-l-8 rounded-3xl rounded-br max-w-[80%] lg:max-w-[50%] border ml-auto ">
          {translation &&
          <>
          <p className="font-bold">Translation:</p>
          <p className="">{translation}</p>
          </>}
          {
            translationErr && 
            <p className="italic text-red-600 ">Sorry, unfortunately this translation can't be performed at this time </p>
          }
        </div>
        </div>}
      </div>
      <TextInput/>
    </main>
  );
}
