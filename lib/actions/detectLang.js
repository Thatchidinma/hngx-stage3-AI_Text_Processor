export async function initializeLanguageDetector(text) {
   let supported
    
    if ('ai' in self && 'languageDetector' in self.ai){
        console.log('supported')
        supported = true
      }else{
        const notSupported = "Your browser doesn't support Chrome's AI"
        return {
          notSupported
        }
      }

    const languageDetectorCapabilities = await window.ai.languageDetector.capabilities();
    const canDetect = languageDetectorCapabilities.capabilities;
   let detector;
   let language
   let perc
    
    if (canDetect === 'no') {
        return; // This return is fine because it's in the main function
    }
    
    if (canDetect === 'readily') {
        detector = await window.ai.languageDetector.create();
    } else {
        detector = await window.ai.languageDetector.create({
            monitor(m) {
                m.addEventListener('downloadprogress', (e) => {
                    console.log(`Downloaded ${e.loaded} of ${e.total} bytes.`);
                });
            },
        });
    
            await detector.ready;
    
        }
    
        if (text) {
            const detectedLanguages = await detector.detect(text);
            perc  = Math.round( detectedLanguages[0].confidence * 100) + '%'
            language = detectedLanguages[0].detectedLanguage
            console.log(language, perc)

        
        } else {
            
            console.log("No languages detected.");
         }


         return {
            language, perc, supported
         }
        }
        
//  initializeLanguageDetector();

// const detectedLanguages = await detector.detect(text);

//         if (detectedLanguages && detectedLanguages > 0 ) {
//             const  percentage  = Math.round( detectedLanguages[0].confidence * 100) + '%'
//             const detectlang = detectedLanguages[0].detectedLanguage
    
//             console.log(detectlang, percentage)
//             return {
//                 detectlang, percentage
//              }
        
//         } else {
//             console.log("No languages detected.");
//          }
         