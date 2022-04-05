import * as React from 'react';
import { useSpeechSynthesis } from "react-speech-kit";
import { KeyboardIcon } from './keyboards/InternationalStandart';
import { upperKeysLetters, KeyboardKeyInterface } from './lettersUpperCase';
export default function LetterFind() {
    const onEnd = () => {
        document.querySelector(`svg path#key${keyDetails.keyCodePressed}`)?.setAttribute("fill", "black");
        keyDetails.keyPressed = "";
    };
    const [keyDetails] = React.useState({
        keyCodePressed: 0,
        keyPressed: "",
      });
    const { speak } = useSpeechSynthesis({onEnd});

    React.useEffect(() => {        
        const handleUserKeyDown = (event: any) => {
            if(keyDetails.keyPressed==="") {
                const { key, keyCode } = event;
                keyDetails.keyPressed=key;
                keyDetails.keyCodePressed=keyCode;
               
                speak({ text: `: ${keyDetails.keyPressed}`});
                let keyLocal:KeyboardKeyInterface|undefined = upperKeysLetters.find((obj) => {
                    return obj.key === keyDetails.keyCodePressed ||  obj.upperKey === keyDetails.keyCodePressed
                  });
                console.log(keyDetails.keyCodePressed);
                if(keyLocal?.key)
                    keyDetails.keyCodePressed=keyLocal?.key;
                document.querySelector(`svg path#key${keyLocal?.key}`)?.setAttribute("fill", "red");
            } 
        };
        window.addEventListener("keydown", handleUserKeyDown);
        return () => {
            window.removeEventListener('keydown', handleUserKeyDown);
        };
    }, [speak,keyDetails]);
    return (
        <div>
            <KeyboardIcon />
        </div>
        
    );
}