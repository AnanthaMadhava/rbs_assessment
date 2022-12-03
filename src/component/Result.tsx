import React, { useContext } from 'react';
import { QuestionContext } from '../contexts/QuestionContext';

const Result = () => {
    const { questions, score }: any = useContext(QuestionContext);
    
    const ans = questions.map((list: any) => {
        return {
            ...list,
            answerOptions: list.answerOptions.filter((obj: any) => obj.iscorrect)
        }
    })

    return (
        <div className='score-container'>
            <h1>You scored {score} out of {questions.length}</h1>
        </div>
    );
};

export default Result;
