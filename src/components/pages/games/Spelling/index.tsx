import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { useSpeechSynthesis } from "react-speech-kit";
import { words } from './words';
import { Button, Tooltip } from '@mui/material';
import { Trans } from 'react-i18next';
export default function Spelling() {
    const { speak } = useSpeechSynthesis();
   
    const [wordDetails] = React.useState({
        word: "",
        level: 0,
        letters:[{letter:"", discovered:true}],
        position:0 
      });
    React.useEffect(() => {        
        const handleUserKeyDown = (event: any) => {
           
            const { key, keyCode } = event;
            console.log(key);
            console.log(wordDetails.letters[wordDetails.position].letter);
            if(key == wordDetails.letters[wordDetails.position].letter) {
                wordDetails.word.length == wordDetails.position+1?speak({ text: `Você digitou toda a palavra corretamente! Parabéns!`}):speak({ text: `Você acertou! Digite a próxima letra.`});;
                wordDetails.letters[wordDetails.position].discovered=true;
                wordDetails.position++;
            }
            else {
                speak({ text: `Você errou! Tente novamente.`});
            }
            
        };
        window.addEventListener("keypress", handleUserKeyDown);
        return () => {
            window.removeEventListener("keypress", handleUserKeyDown);
        };
    }, [speak,wordDetails]);
    const sortitionWord = (event: any) => {
        const mapValues = Object.keys(words)
        .map(n => Number.parseInt(n));
        const randomIndex = Math.floor(Math.random() * mapValues.length);
        wordDetails.word = words[randomIndex].word;
        wordDetails.level = words[randomIndex].level;
        wordDetails.letters = [];
        wordDetails.position = 0;
        for(var i=0;i<wordDetails.word.length;i++) {
            wordDetails.letters.push({letter:wordDetails.word[i], discovered:false});
        }
        console.log(wordDetails);
        speak({ text: `A palavra sorteada é: ${wordDetails.word}`});
    };
    const listenAgain = (event: any) => {
        speak({ text: `A palavra sorteada é: ${wordDetails.word}`});
    }
    const renderButton  = (letter: any) => {
        if(letter.discovered)
           return <Button>{letter.letter}</Button>;
        return <Button>_</Button>;
     }
    return (
        <div>
            <Paper sx={{  margin: 'auto', overflow: 'hidden' }}>
            <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
                <Button onClick={sortitionWord}><Trans>Click Here to Start</Trans></Button>
            </Typography>
            </Paper> 
            <br/>
            {
                wordDetails.word && 
                <div>
                    <Paper sx={{  margin: 'auto', overflow: 'hidden' }}>
                        <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
                            
                            <br/>
                            {wordDetails.letters.map((value) => (
                               renderButton(value)
                            ))}
                            <br/>
                            <Button onClick={listenAgain}><Trans>Listen Again</Trans></Button>
                        </Typography>
                    </Paper>
                    <br/>
                    </div>
            }
           
            
           
        </div>
    );
}