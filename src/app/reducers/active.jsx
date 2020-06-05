export const activeReducer = (state = true, action) => {
  switch (action.type) {
    case 'FALSE':
      return !state;
    default:
      return state;
  }
};

export default activeReducer;
