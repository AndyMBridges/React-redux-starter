import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: []
};

// In our example we’ll be creating a simple reducer taking the initial state as the first parameter. 
// As a second parameter we’ll provide action. 
// As of now the reducer will do nothing than returning the initial state.

// The only way to change state is with an action   
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ARTICLE:
            return { ...state, articles: [ ...state.articles, action.payload] };
        default: 
            return state;
    }
}

export default rootReducer;