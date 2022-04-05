import * as React from 'react';
import { useSpeechSynthesis } from "react-speech-kit";
import { KeyboardIcon } from './keyboards/InternationalStandart';
export default function LetterFind() {
    const iconRef = React.useRef(null);
    const onEnd = () => {
        document.querySelector(`svg path#key${keyCodePressed}`)?.setAttribute("fill", "black");
        keyPressed = "";
    };

    const { speak } = useSpeechSynthesis({onEnd});
    let keyCodePressed: number=0;
    let keyPressed: string = "";
    React.useEffect(() => {        
        const handleUserKeyDown = (event: any) => {
            const { key, keyCode } = event;
            keyPressed=key;
            keyCodePressed=keyCode;
            console.log(keyPressed);
            console.log(keyCodePressed);
            speak({ text: `: ${keyPressed}`});
            document.querySelector(`svg path#key${keyCodePressed}`)?.setAttribute("fill", "red");
        };
        window.addEventListener("keypress", handleUserKeyDown);
        return () => {
            window.removeEventListener('keypress', handleUserKeyDown);
        };
    }, [speak, keyPressed, keyCodePressed, iconRef]);
    return (
        <div ref={iconRef}>
            <KeyboardIcon  />
        </div>
        
    );
}