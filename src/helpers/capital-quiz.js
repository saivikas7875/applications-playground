export const getCountryCapitalMap = countries =>
    countries.map(country => ({
        region: country.region,
        countryName: country.name,
        capital: country.capital
    }));

export const getCountriesByRegion = countries => {
    let countriesByRegion = [];

    countries.forEach(country => {
        if (country.region !== '' && country.region !== 'Polar' && country.capital !== '') {
            if (countriesByRegion[country.region]) {
                countriesByRegion[country.region].push({country: country.name, capital: country.capital});
            } else {
                countriesByRegion[country.region] = [{country: country.name, capital: country.capital}];
            }
        }
    });

    return countriesByRegion;
};

const getUniqueRandomIndices = (numberOfItems, numberOfUniqueItems) => {
    let uniqueItems = [];

    while (uniqueItems.length < numberOfUniqueItems) {
        const randomIndex = Math.floor(Math.random() * numberOfItems);

        if (!uniqueItems.includes(randomIndex)) {
            uniqueItems.push(randomIndex);
        }
    }

    return uniqueItems;
};

const buildQuizQuestion = (country, countriesInRegion, quizDifficulty) => {
    const otherCountries = countriesInRegion.filter(item => item.countryName !== country.countryName);

    const numberOfOtherAnswers = parseInt(quizDifficulty, 10) - 1;

    const otherAnswersForQuestion = getUniqueRandomIndices(otherCountries.length, numberOfOtherAnswers);

    return {
        countryName: country.countryName,
        correctAnswer: country.capital,
        otherAnswers: otherAnswersForQuestion.map(uniqueIndex => otherCountries[uniqueIndex].capital)
    };
};

export const buildQuizQueries = (countries, numberOfQuestions, quizDifficulty) => {
    const quizCountries = getUniqueRandomIndices(countries.length, parseInt(numberOfQuestions, 10));

    const countriesByRegion = getCountriesByRegion(countries);

    const countriesInQuiz = getCountryCapitalMap(quizCountries.map(quizCountry => countries[quizCountry]));

    return countriesInQuiz.map(country =>
        buildQuizQuestion(country, countriesByRegion[country.region], quizDifficulty)
    );
};

export const CapitalQuizActions = Object.freeze({
    CORRECT_ANSWER: 'CORRECT_ANSWER',
    WRONG_ANSWER: 'WRONG_ANSWER'
});

export const capitalQuizReducer = (state, action) => {
    let questions;

    switch (action.type) {
        case CapitalQuizActions.CORRECT_ANSWER:
            questions = state.questions;

            questions.shift();

            return {
                questions,
                score: state.score + 10
            };
        case CapitalQuizActions.WRONG_ANSWER:
            questions = state.questions;

            questions.shift();

            return {
                questions,
                score: state.score
            };
        default:
            return state;
    }
};

export const randomizeOptions = options => {
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [options[i], options[j]] = [options[j], options[i]];
    }

    return options;
};
