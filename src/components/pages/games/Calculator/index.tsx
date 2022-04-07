import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Button, Input, TextField, Tooltip, Typography } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';
import { useSpeechSynthesis } from "react-speech-kit";
import { operations, operators } from './questions';

export default function Calculator() {

    const { speak } = useSpeechSynthesis();
    const { t } = useTranslation();
    
    const [question] = React.useState({
        operation: "",
        sign: "",
        operator1: -1,
        operator2: -1,
        descOperation: "",
        equalsSign: "=",
        answer: 0
    });

    const sortOperator1 = () => {
        const mapValues = Object.keys(operators)
        .map(n => Number.parseInt(n));
        const randomIndex = Math.floor(Math.random() * mapValues.length);
        question.operator1 = operators[randomIndex].number;
    }; 
    
    const getOperator2 = () => {
        for(var i=0; i<operators.length; i++) {
            if (!operators[i].sorted){
                question.operator2 = operators[i].number;
                operators[i].sorted = true;
                break;
            }                
        }
    }; 
  

    const sumCalculator = () => {
        sortOperator1();
        
        question.operation = operations[0].name;
        question.sign = operations[0].sign;
        question.descOperation = operations[0].descOperation;
        
        speak({ text: `${t("Let's try the Calculator of")} ${t(operations[0].name)} ${t(`of number`)} : ${question.operator1} ` } );
        speak({ text: t(`Type the right answer`) } );
        speak({ text: t(`Then, press the ENTER button to send`) });
        
        buildTable();
    }

    const buildTable = () => {
        getOperator2();
        computeAnswer();
        speak({ text: `${question.operator1}` })
        speak({ text: `${t(question.descOperation)}` })
        speak({ text: `${question.operator2}` })
        speak({ text: `${t(question.equalsSign)}` })
        
    }

    const computeAnswer = () => {
        question.answer = question.operator1 + question.operator2;
    }

    const checkAnswer = (answer: number) => {
        if (question.answer == answer){
            speak({text: `${t("Correct Answer")}`});
            buildTable();
        }else{
            speak({text: `${t("Incorrect Answer. Try again.")}`});
        }
    }

    const handleKeyPress = (event: any) => {
        const { key, keyCode } = event;
        
        if(key === 'Enter'){
          checkAnswer(event.target.value);
          event.target.value = "";
        }else{
          speak({text: `${key}`});
        }
      }

    
    return (
        <div>
            <Paper sx={{  margin: 'auto', overflow: 'hidden' }}>
            <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
                <Button onClick={sumCalculator}><Trans>Click Here to Start</Trans></Button>
            </Typography>
            </Paper> 
            <br/>
            
        {
            question.operator1!=-1 && 
            <div>
                <Paper sx={{  margin: 'auto', overflow: 'hidden' }}>
                    <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
                        <h1 style={{fontSize:24}}>{t("Let's try the Calculator of")} {`${t(question.operation)}`} {t("of number")} {`${question.operator1}`} </h1>
                        <h1 style={{fontSize:24}}>{t("Type the right answer")}</h1>
                        <h1 style={{fontSize:24}}>{t("Then, press the ENTER button to send")}</h1>
                    </Typography>
                </Paper>
                
                <br/>
                
                <Paper sx={{  margin: 'auto', overflow: 'hidden' }}>
                    <Typography sx={{ my: 5, mx: 2}} color="text.secondary" align="center">
                        <Button id="btn_operato1" sx={{fontSize: 32}}>{question.operator1}</Button>
                        <Button id="btn_sign" sx={{fontSize: 32}}>{question.sign}</Button>
                        <Button id="btn_operato2" sx={{fontSize: 32}}>{question.operator2}</Button>
                        <Button id="btn_equalsSign" sx={{fontSize: 32}}>{question.equalsSign}</Button>
                        <TextField id="btn_answer" autoFocus onKeyPress={handleKeyPress}/>
                    </Typography>
                </Paper>
            </div>
        }

        </div>
        
    );
}