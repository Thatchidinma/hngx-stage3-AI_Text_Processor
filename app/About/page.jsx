import React from 'react'

const AboutHome = () => {
  return (
    <div className='p-8'>
      AI-Powered Text Processor utilizes Chrome's AI allowing users to input text and utilize features such as summarization, translation, and language detection with a clean, responsive UI that ensures accessibility and provides meaningful feedback for errors.<br/><br/>
      <p>Language translation supported includes:</p>
      <ul className='list-disc ml-20'>
        <li>English(en)</li>
        <li>Portuguese (pt)</li>
        <li>Spanish (es)</li>
        <li>Russian (ru)</li>
        <li>Turkish (tr)</li>
        <li>French (fr)</li>
      </ul>
      <br/><br/>
      <p>Summarization is only supported for input more than 150 characters</p>
    </div>
  )
}

export default AboutHome
