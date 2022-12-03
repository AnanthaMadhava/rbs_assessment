import React, { useContext, useState } from 'react';
import { QuestionContext } from '../contexts/QuestionContext';
import { QuestionsList, AnswerOptions } from '../types';

const Questions = () => {
    const [ currentAnswer, setCurrentAnswer ] = useState({});
    const [ currentIndex, setCurrentIndex ] = useState(null);
    const [ count, setCount ] = useState(0);
    const { questions, setQuestions, currentQuestion, setCurrentQuestion, setShowScore, score, setScore }: any = useContext(QuestionContext);

    const updateSelected = (list: AnswerOptions, id: any) => {
        if(list.iscorrect) {
            setCount(1)
        } else {
            setCount(0)
        }
        setCurrentIndex(id);
        setCurrentAnswer(list);
    }

    const updateAnswers = () => {
        let updateAns = JSON.parse(JSON.stringify(questions));
        let ansUpdate = updateAns.map((list: QuestionsList) => {
            if(list.id === (currentQuestion + 1)) {
                let ans =  list.answerOptions.map(data => {
                    if(data.id === currentIndex) {
                        return {
                            ...data,
                            selected: true
                        }
                    } else {
                        return {
                            ...data,
                            selected: false
                        }
                    }
                })
                return {
                    ...list,
                    answerOptions: ans
                };
            } else {
                return list
            }
        })
        setQuestions(ansUpdate);
        setScore(score + count);
    }

    const onNext = () => {
        updateAnswers();
        setCurrentQuestion(currentQuestion + 1);
        setCurrentAnswer({});
        setCurrentIndex(null);
    }

    const handleSubmit = () => {
        updateAnswers();
        setShowScore(questions);
    }

    return (
        <div className='question-answer-container'>
            <div className='question-container'>
                <div className='question-count'>
                    <span>Question {currentQuestion + 1} / </span>{questions.length}
                </div>
                <div className='question-text'>{questions[currentQuestion]?.questionText}</div>
            </div>
            <div className='answer-container'>
                {questions[currentQuestion]?.answerOptions.map((list: AnswerOptions, i: number) => (
                    <div className='answer-ans' key={i}>
                        <input type='radio' name={list.ans} id={list.ans} checked={currentIndex === list.id ? true : false} value={list.ans} onChange={() => updateSelected(list, i+1)}/>
                        <label htmlFor={list.ans}>{list.ans}</label>
                    </div>
                ))}
            </div>
            <div className='button-container'>
                {(currentQuestion + 1) !== questions.length && <button className={`button-pri ${currentIndex === null && 'button-disable'}`} disabled={currentIndex === null ? true : false} onClick={onNext}>Next</button>}
                {(currentQuestion + 1) === questions.length && <button className={`button-pri button-sub ${currentIndex === null && 'button-disable'}`} onClick={handleSubmit}>Submit</button>}
            </div>
        </div>
    );
};

export default Questions;
