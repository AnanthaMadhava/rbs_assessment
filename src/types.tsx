export interface AnswerOptions {
    id: Number,
    ans: string,
    iscorrect: boolean,
    selected: boolean
}

export interface QuestionsList {
    id: Number,
    questionText: string,
    answerOptions: Array<AnswerOptions>
}