import './capital-quiz.scss';
import React, {useReducer} from 'react';
import {QuizQuestion} from './quiz-question';
import {CapitalQuizActions, capitalQuizReducer} from '../helpers/capital-quiz';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';

export const CapitalQuiz = props => {
    const [quiz, dispatch] = useReducer(capitalQuizReducer, {
        questions: props.quizQuestions,
        score: 0
    });

    const updateQuizAfterAnswer = isCorrect => {
        isCorrect
            ? dispatch({type: CapitalQuizActions.CORRECT_ANSWER})
            : dispatch({type: CapitalQuizActions.WRONG_ANSWER});
    };

    return (
        <section className='quiz-area'>
            {quiz.questions.length > 0 ? (
                <>
                    <Typography variant='h4' classes={{root: 'score'}}>
                        Score: {quiz.score} / {props.numberOfQuestions * 10}
                    </Typography>
                    <QuizQuestion
                        question={quiz.questions[0]}
                        selectAnswer={isCorrect => updateQuizAfterAnswer(isCorrect)}
                    />
                    <div className='actions'>
                        <Button
                            color='primary'
                            classes={{root: 'quiz-action'}}
                            onClick={props.endQuiz}
                            size='large'
                            variant='outlined'
                        >
                            Restart Quiz
                        </Button>
                        <Button
                            color='primary'
                            classes={{root: 'quiz-action'}}
                            onClick={() => props.history.push('/')}
                            size='large'
                            variant='contained'
                        >
                            Quit Quiz
                        </Button>
                    </div>
                </>
            ) : (
                <>
                    <Typography variant='h5'>
                        You have scored <strong>{quiz.score}</strong> out of a possible{' '}
                        <strong>{props.numberOfQuestions * 10}</strong>
                    </Typography>
                    <Button color='secondary' onClick={props.endQuiz} size='medium' variant='contained'>
                        Play Again
                    </Button>
                </>
            )}
        </section>
    );
};
