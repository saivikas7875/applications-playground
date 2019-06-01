import React, {useState, useEffect} from 'react';
import {buildQuizQueries} from '../helpers/capital-quiz';
import {Header} from '../header/header';
import {fetchAllCountries} from '../helpers/countries';
import {QuizParameters} from './quiz-parameters';
import {CapitalQuiz} from './capital-quiz';

export const CapitalQuizContainer = () => {
    const [numberOfQuestions, setNumberOfQuestions] = useState('10');
    const [quizDifficulty, setQuizDifficulty] = useState('4');
    const [countries, setCountries] = useState([]);
    const [quizQuestions, setQuizQuestions] = useState([]);

    const [quizInProgress, setQuizInProgressState] = useState(false);

    useEffect(() => {
        const getAllCountries = async () => {
            const allCountries = await fetchAllCountries();

            setCountries(allCountries);
        };

        getAllCountries();
    }, []);

    return (
        <>
            <Header application='Capital City Quiz' />
            <main className='application-wrapper'>
                {quizInProgress ? (
                    <CapitalQuiz quizQuestions={quizQuestions} endQuiz={() => setQuizInProgressState(false)} />
                ) : (
                    <QuizParameters
                        numberOfQuestions={numberOfQuestions}
                        quizDifficulty={quizDifficulty}
                        selectNumberOfQuestions={event => setNumberOfQuestions(event.target.value)}
                        setQuizDifficulty={event => setQuizDifficulty(event.target.value)}
                        startQuizWithParameters={() => {
                            setQuizQuestions(buildQuizQueries(countries, numberOfQuestions, quizDifficulty));

                            setQuizInProgressState(true);
                        }}
                    />
                )}
            </main>
        </>
    );
};
