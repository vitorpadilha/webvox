import { Button, Paper, Typography } from '@mui/material';
import * as React from 'react';
import { Trans } from 'react-i18next';
import { useSpeechSynthesis } from "react-speech-kit";
import { KeyboardIcon } from './keyboards/InternationalStandart';
import { upperKeysLetters, KeyboardKeyInterface } from './lettersUpperCase';
export default function LetterFind() {
    const onEnd = () => {
        if(keyDetails.keyCodePressed)
            document.querySelector(`svg path#key${keyDetails.keyCodePressed}`)?.setAttribute("fill", "black");
        keyDetails.keyPressed = "";
        keyDetails.keyCodePressed = 0;
    };
    
    const [keyDetails] = React.useState({
        firstSorted: false,
        keyCodePressed: 0,
        keyPressed: "",
        letterSorted: "",
        pontos:10,
        spacePressed: false,
        letterCodeSorted: 0,
      });
    const { speak } = useSpeechSynthesis({onEnd});
    const sortitionLetter = React.useCallback(() => {
        const randomIndex = Math.floor(Math.random() * 26);
        keyDetails.letterCodeSorted = randomIndex+97;
        keyDetails.letterSorted = String.fromCharCode(randomIndex+97);
        speak({ text: `A letra sorteada é: ${keyDetails.letterSorted}`});
        document.querySelector(`svg path#key${keyDetails.letterCodeSorted}`)?.setAttribute("fill", "yellow"); 
    },[speak,keyDetails]);
    React.useEffect(() => {
        const handleUserKeyDown = (event: any) => {
            const { key, keyCode } = event;
            if(keyDetails.keyPressed==="" && keyDetails.letterSorted) {
                keyDetails.spacePressed=false;
                keyDetails.keyPressed=key;
                keyDetails.keyCodePressed=keyCode;
                var toSpeak = keyDetails.keyPressed;                
                let keyLocal:KeyboardKeyInterface|undefined = upperKeysLetters.find((obj) => {
                    return obj.key === keyDetails.keyCodePressed ||  obj.upperKey === keyDetails.keyCodePressed
                  });
                if(keyLocal) {
                    keyDetails.keyCodePressed=keyLocal.key;
                    toSpeak = keyLocal.speak?keyLocal.speak:toSpeak;
                }
                if(keyDetails.letterCodeSorted !== keyDetails.keyCodePressed) {
                    document.querySelector(`svg path#key${keyDetails.keyCodePressed}`)?.setAttribute("fill", "red");
                    keyDetails.pontos--;
                    speak({ text: `:${toSpeak}.Erro! Menos um ponto.`});
                }
                else {
                    document.querySelector(`svg path#key${keyDetails.keyCodePressed}`)?.setAttribute("fill", "blue");
                    keyDetails.letterSorted = "";
                    keyDetails.letterCodeSorted = 0;
                    keyDetails.pontos = keyDetails.pontos+5;
                    speak({ text: `Parabéns! Você acertou a letra! Você está com ${keyDetails.pontos} pontos! Pressione espaço duas vezes para sortear uma nova letra`});  
                }
            }
            else if(keyCode===32 && !keyDetails.letterCodeSorted) {     
               if(keyDetails.spacePressed) sortitionLetter();    
               keyDetails.spacePressed=true;   
            }
            else {
                keyDetails.spacePressed=false; 
            }
        };
        window.addEventListener("keydown", handleUserKeyDown);
        if(!keyDetails.firstSorted) {
            speak({text: "Pressione espaço duas vezes para sortear uma nova letra!"});
            keyDetails.firstSorted = true;
        }
        return () => {
            window.removeEventListener("keydown", handleUserKeyDown);
        };
        
    }, [speak,keyDetails,sortitionLetter]);
    
        
    return (
        <div>
            <Paper sx={{  margin: 'auto', overflow: 'hidden' }}>
            <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
                <Button ><Trans>Score: </Trans>{keyDetails.pontos}</Button>
            </Typography>
            </Paper> <br/>
            <KeyboardIcon />
        </div>
    );
}