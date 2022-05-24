import {createStore} from "redux";

const initialState = {
    likedElement: [],
}

function stateReducers (state, action) {
    switch (action.type){
        case "ADD":
            return {...state, likedElement: [...state.likedElement, action.payload]};
        case "REMOVE":
            return  {...state, likedElement: state.likedElement.filter(obj => obj !== action.payload)}
        case "FILTER":
            action.payload
        default:
            return state;
    }
}

const store = createStore(stateReducers, initialState);

export default store;