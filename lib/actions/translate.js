
export async function initializeLanguageTranslator(from, to, text) {
    if ('ai' in self && 'translator' in self.ai) {
        console.log("can translate")
      }else{
        console.log('cannot translate')
      }

      const translatorCapabilities = await self.ai.translator.capabilities();
      const cantranslate = translatorCapabilities.languagePairAvailable(from, to);
      let translator;
      let translatedText
      let ErrorMsg


      if (cantranslate === 'no') {
        console.log('i am not available')
        ErrorMsg = "can't translate"
          return{
            ErrorMsg
          }; // This return is fine because it's in the main function
      }
      
      if (cantranslate === 'readily') {
          console.log('i am ready to translate')
            translator = await self.ai.translator.create({
            sourceLanguage: from,
            targetLanguage: to,
          });
      } else {
        translator = await self.ai.translator.create({
            sourceLanguage: from,
            targetLanguage: to,
            monitor(m) {
              m.addEventListener('downloadprogress', (e) => {
                console.log(`Downloaded ${e.loaded} of ${e.total} bytes.`);
              });
            },
          });
          await translator.ready

        console.log(' can translate after download')
      
          }

          if(text){
            translatedText = await translator.translate(text);
          }
    

          console.log(translatedText)

          return{
            translatedText
          }

}
