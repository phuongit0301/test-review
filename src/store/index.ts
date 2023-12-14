import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    reducer: {
        list: (state = {todos: []}, action) => {
            switch (action.type) {
                case 'ADD_TODO': {
                    /**
                     *  - The reducer is a state mutation. So we can't push new data to state
                     *  - we need use spread operator instead of push operator
                     */
                    const newState = state;
                    newState.todos.push(action.payload);
                    return newState;
                }
                // We don't use REMOVE_TODO action so we should remove here
                case 'REMOVE_TODO': {
                    return {
                        ...state,
                        todos: state.todos.filter((t: any, index: number) => index !== action.payload),
                    };
                }
                case 'CHANGE_TODOS': {
                    return {
                        todos: action.payload,
                    };
                }
                default:
                    return state;
            }
        }
    }
})
