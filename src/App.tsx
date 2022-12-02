import React, { useEffect, useState } from 'react';
import Questions from './component/Questions';
import Result from './component/Result';
import { QuestionContext } from './contexts/QuestionContext';
import { questionsList } from './questionsList';

const App = () => {

    const [ questions, setQuestions ]: any = useState([]);
    const [ currentQuestion, setCurrentQuestion ] = useState(0);
    const [ showScore, setShowScore ] = useState(false);
	const [ score, setScore ] = useState(0);

    useEffect(() => {
        setQuestions(questionsList);
    }, [])

    return (
        <div className='root-container'>
            <div className='heading'>RBS Assessment</div>
            <QuestionContext.Provider 
                value={{ 
                    questions, 
                    setQuestions, 
                    currentQuestion, 
                    setCurrentQuestion,
                    showScore,
                    setShowScore,
                    score, 
                    setScore
                }}>
                {showScore ? <Result /> : <Questions />}
            </QuestionContext.Provider>
        </div>
    );
};

export default App;