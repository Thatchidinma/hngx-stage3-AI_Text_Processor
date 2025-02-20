'use client'
import Greet from "@/components/Greet";
import Header from "@/components/Header";
import TextInput from "@/components/TextInput";
import TranslateButton from "@/components/TranslateButton";
import { usetextContext } from "@/context/TextInputContext";
import {initializeLanguageDetector} from '@/lib/actions/detectLang'
import { useEffect } from "react";

export default function Home() {


  const {text, language, setLanguage,percentage, setPercentage} = usetextContext()


  return (
    <main className='relative border w-full flex flex-col'>
      <Header/>
      {!text && <div className="max-w-[900px] mx-auto mt-20 border">
        <Greet/>
      </div> }
      <div className="overflow-y-scroll mb-32 lg:mx-32">
      {text && <div className="ml-auto max-w-[80%] lg:max-w-[50%]">
        <p className="p-4 border-l-8 rounded-3xl rounded-br  border"> {text}</p>
        <p className="italic text-sm text-end">{percentage} {language}</p>
        <TranslateButton/>
        </div>}
      </div>
      <TextInput/>
    </main>
  );
}
