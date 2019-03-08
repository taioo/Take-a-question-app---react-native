import { ADD_QUESTION, DELETE_QUESTION } from './actionTypes';

export const addQuestion = (questionName,questionAge,questionText, image) => {
    return {
        type: ADD_QUESTION,
        questionName: questionName,
        questionAge: questionAge,
        questionText: questionText,
        image: image
    };
};

export const deleteQuestion = (key) => {
    return {
        type: DELETE_QUESTION,
        questionKey: key
    };
};
