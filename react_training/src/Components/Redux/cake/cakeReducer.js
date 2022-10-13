import { BUILD_CAKE, BUY_CAKE } from "./cakeTypes";

const initialState = {
  numberOfCakes: 30,
};
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    case BUILD_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;
