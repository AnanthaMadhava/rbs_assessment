import { QuestionsList } from './types';

export const questionsList : QuestionsList[] = [
    {
        id: 1,
        questionText: "Which of the following is the oldest test cricket playing country in the world?",
        answerOptions: [
            {
                id: 1,
                ans: "Australia",
                iscorrect: true,
                selected: false,
            },
            {
                id: 2,
                ans: "India",
                iscorrect: false,
                selected: false
            },
            {
                id: 3,
                ans: "West Indies",
                iscorrect: false,
                selected: false
            },
            {
                id: 4,
                ans: "South Africa",
                iscorrect: false,
                selected: false
            }
        ]
    },
    {
        id: 2,
        questionText: "Who is chosen at the ICC men's cricketer of the year 2017?",
        answerOptions: [
            {
                id: 1,
                ans: "K.L. Rahul",
                iscorrect: false,
                selected: false
            },
            {
                id: 2,
                ans: "Virat Kohli",
                iscorrect: true,
                selected: false
            },
            {
                id: 3,
                ans: "Steve Smith",
                iscorrect: false,
                selected: false
            },
            {
                id: 4,
                ans: "Hasan Ali",
                iscorrect: false,
                selected: false
            }
        ]
    },
    {
        id: 3,
        questionText: 'When was the first Cricket World Cup held?',
        answerOptions: [
            {
                id: 1,
                ans: "1975",
                iscorrect: true,
                selected: false
            },
            {
                id: 2,
                ans: "1953",
                iscorrect: false,
                selected: false
            },
            {
                id: 3,
                ans: "1979",
                iscorrect: false,
                selected: false
            },
            {
                id: 4,
                ans: "1928",
                iscorrect: false,
                selected: false
            }
        ]
    }
]