// taskReducer.js

// Initial state
const initialState = {
    tasks: [] // Initialize tasks as an empty array
  };
  
// Reducer function
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        // Handle other action types as needed
        default:
            return state;
    }
};
  
  export default taskReducer;
  