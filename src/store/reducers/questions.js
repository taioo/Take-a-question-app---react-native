import {
  ADD_QUESTION,
  DELETE_QUESTION
} from "../actions/actionTypes";

const initialState = {
  questions: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        questions: state.questions.concat({
          key: Math.random(),
          name: action.questionName,
          age: action.questionAge,
          text: action.questionText,
          image: {
            uri: action.image.uri
          }
        })
      };
    case DELETE_QUESTION:
      return {
        ...state,
        questions: state.questions.filter(question => {
          return question.key !== action.questionKey;
        })
      };
    default:
      return state;
  }
};

export default reducer;
