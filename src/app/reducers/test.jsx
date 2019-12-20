export const testReducer = (state = false, action) => {
  switch (action.type) {
    case 'TEST':
      return !state;
    default:
      return state;
  }
};

export default testReducer;
