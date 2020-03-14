export const dayNightReducer = (state = true, action) => {
  switch (action.type) {
    case 'NIGHT':
      return !state;
    default:
      return state;
  }
};

export default dayNightReducer;
