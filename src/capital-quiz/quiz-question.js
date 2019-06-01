import React, {useState} from 'react';

export const QuizQuestion = props => {
    return (
        <div className='quiz-question'>
            {`What is the capital of ${props.countryName}`}
            <ul>
                {props.options.map((option, index) => (
                    <li key={index}>{option}</li>
                ))}
            </ul>
        </div>
    );
};
