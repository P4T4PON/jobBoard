//TODO: zmien nazewnictwo, to nie jest day/night tylko light i dark mode
//TODO: napisales tutaj switch'a dla 1 case'a ;) pomyśl czym można to zastąpić
//TODO: exportujesz const a nas†ępnie ponawiasz export jako default - popraw proszę

export const dayNightReducer = (state = true, action) => {
  switch (action.type) {
    case 'NIGHT':
      return !state;
    default:
      return state;
  }
};

export default dayNightReducer;
