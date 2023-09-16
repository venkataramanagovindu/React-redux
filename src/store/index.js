import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSclice = createSlice({
    name: 'counter',
    initialState: {
        counter: 0
    },
    reducers:{
        increment(state, action){
            state.counter++;
        },
        decrement(state, action){
            state.counter--;
        },
        add(state, action){
            state.counter += + action.payload;
        }
    } 
});

export const actions = counterSclice.actions;

const store = configureStore({
    reducer: counterSclice.reducer
});

export default store