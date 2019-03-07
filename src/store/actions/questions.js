import { ADD_QUESTION, DELETE_QUESTION } from './actionTypes';

export const addQuestion = (questionName, image) => {
    return {
        type: ADD_QUESTION,
        questionName: questionName,
        image: image
    };
};

export const deleteQuestion = (key) => {
    return {
        type: DELETE_QUESTION,
        questionKey: key
    };
};
