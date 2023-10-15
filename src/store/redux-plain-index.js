import { legacy_createStore as createStore} from 'redux'

const reducerFn = (state = {counter: 1}, action) => {

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

const plainstore = createStore(reducerFn);

export default plainstore;