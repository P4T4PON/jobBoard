export const brandsReducer = (state = true, action) => {
  switch (action.type) {
    case 'TRUE':
      return !state;
    default:
      return state;
  }
};

export default brandsReducer;
