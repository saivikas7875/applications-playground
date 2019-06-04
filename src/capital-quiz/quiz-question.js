import './quiz-question.scss';
import React from 'react';
import {randomizeOptions} from '../helpers/capital-quiz';
import Typography from '@material-ui/core/Typography';

const combineAllOptions = question => question.otherAnswers.concat([question.correctAnswer]);

const buildOptions = question => randomizeOptions(combineAllOptions(question));

export const QuizQuestion = props => {
    const questionOptions = buildOptions(props.question);

    return (
        <div className='quiz-question'>
            <Typography variant='h5'>
                What is the capital of <strong>{props.question.countryName}?</strong>
            </Typography>
            <div className='quiz-options-grid'>
                {questionOptions.map((option, index) => (
                    <span
                        className='quiz-option'
                        onClick={() => props.selectAnswer(option === props.question.correctAnswer)}
                        key={index}
                    >
                        {option}
                    </span>
                ))}
            </div>
        </div>
    );
};
