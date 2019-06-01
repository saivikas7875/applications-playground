import './quiz-parameters.scss';
import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const quizDifficultyOptions = ['4', '5', '6'];
const numberOfQuestionsOptions = ['10', '12', '15'];

export const QuizParameters = props => {
    return (
        <div className='quiz-parameters'>
            <Typography variant='h4' align='center' color='secondary' gutterBottom>
                Choose the parameters of the quiz
            </Typography>
            <section className='parameters-container'>
                <div className='number'>
                    <label>Select number of questions in the Quiz</label>
                    <RadioGroup
                        classes={{root: 'parameter-options'}}
                        aria-label='Number of Questions'
                        name='number'
                        value={props.numberOfQuestions}
                        onChange={props.selectNumberOfQuestions}
                    >
                        {numberOfQuestionsOptions.map((option, index) => (
                            <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
                        ))}
                    </RadioGroup>
                </div>
                <div className='difficulty'>
                    <label>Select difficulty of questions based on number of options</label>
                    <RadioGroup
                        classes={{root: 'parameter-options'}}
                        aria-label='Difficulty of Questions'
                        name='difficulty'
                        value={props.quizDifficulty}
                        onChange={props.setQuizDifficulty}
                    >
                        {quizDifficultyOptions.map((option, index) => (
                            <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
                        ))}
                    </RadioGroup>
                </div>
            </section>
            <Button
                color='primary'
                classes={{
                    root: 'start-button'
                }}
                onClick={props.startQuizWithParameters}
                size='large'
                variant='contained'
            >
                Start Quiz
            </Button>
        </div>
    );
};
