import {createStore} from 'redux';

// action will have type and payload
const reducerFn = (state={counter : 10}, action) => {
    debugger;

    // Should be sync fun
    // We should not mutate original function


    if(action.type === 'INC'){
        return {counter : state.counter + 1}
    }
    if(action.type === 'DEC'){
        return {counter: state.counter - 1}
    }
    if(action.type === 'ADD'){
        return {counter: state.counter + action.payload}
    }
    return state;
}

const store = createStore(reducerFn);

export default store;