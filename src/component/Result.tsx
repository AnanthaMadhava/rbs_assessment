import React, { useContext } from 'react';
import { QuestionContext } from '../contexts/QuestionContext';

const Result = () => {
    const { questions }: any = useContext(QuestionContext);
    
    const scorecount = (data: any) => {
        for(let j=0; j<=data.length - 1; j++) {
            if(data[j].iscorrect === data[j].selected) {
                return true;
            } else {
                return false
            }
        }
    }

    const score = () => {
        let result = 0;
        for(let i=0 ; i<=questions.length - 1; i++) {
            let obj = questions[i]?.answerOptions;
            if(scorecount(obj) === true) {
                result += 1
            }
        }
        return result;
    }
    
    const ans = questions.map((list: any) => {
        return {
            ...list,
            answerOptions: list.answerOptions.filter((obj: any) => obj.iscorrect)
        }
    })

    return (
        <div className='score-container'>
            <h1>You scored {score()} out of {questions.length}</h1>
        </div>
    );
};

export default Result;