import React, {useState} from 'react';
import {QuizQuestion} from './quiz-question';

const buildOptions = question => question.otherAnswers.concat([question.correctAnswer]);

export const CapitalQuiz = props => {
    const [remainingQuestions, setRemainingQuestions] = useState(props.quizQuestions);

    return (
        <QuizQuestion countryName={remainingQuestions[0].countryName} options={buildOptions(remainingQuestions[0])} />
    );
};
