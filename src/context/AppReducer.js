// Manages application state changes in response to certain actions to the context
export default (state, action) => {
  switch (action.type) {
    case 'DELETE_SUBJECT':
      return {
        ...state,
        classes: state.classes.filter(c => c.id !== action.payload)
      };
    case 'ADD_SUBJECT':
      return {
        ...state,
        classes: [action.payload, ...state.classes]
      };
    default:
      return state;
  }
};
