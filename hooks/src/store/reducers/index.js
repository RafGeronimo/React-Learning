export function reducer(state, action) {
    switch (action.type) {
      case "numberAdd2":
        return { ...state, number: state.number + 2 };
      case "login":
        return { ...state, user: { name: action.payload } };
      case "multSeven":
        return { ...state, number: state.number * 7 };
      case "divideTwentyfive":
        return { ...state, number: state.number / 25 };
      case "int":
        return { ...state, number: parseInt(state.number) };
      case "addN":
        return { ...state, number: state.number + action.payload };
      default:
        return { state };
    }
  }