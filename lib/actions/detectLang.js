export async function initializeLanguageDetector(text) {
    const languageDetectorCapabilities = await self.ai.languageDetector.capabilities();
    const canDetect = languageDetectorCapabilities.capabilities;
   let detector;
   let language
   let perc
    
    if (canDetect === 'no') {
        return; // This return is fine because it's in the main function
    }
    
    if (canDetect === 'readily') {
        detector = await self.ai.languageDetector.create();
    } else {
        detector = await self.ai.languageDetector.create({
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
            language, perc
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
         