const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

// Action Types
const BUY_CAKE = "buy-cake";
const BUY_CANDLE = "buy-candle";

// Action Creator
const buyCake = () => {
  return { type: BUY_CAKE };
};

const buyCandle = () => {
  return { type: BUY_CANDLE };
};

// Initial State
const initialCakeState = { numberOfCakes: 10 };
const initialCandleState = { numberOfCandles: 20 };

// Reducer
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};

const candleReducer = (state = initialCandleState, action) => {
  switch (action.type) {
    case BUY_CANDLE:
      return {
        ...state,
        numberOfCandles: state.numberOfCandles - 1,
      };
    default:
      return state;
  }
};

// Root Reducer
const reducer = combineReducers({
  cake: cakeReducer,
  candle: candleReducer,
});

//Store
const store = createStore(reducer);
console.log("Intitial Store: ", store.getState());

// To check current state of the Global State
store.subscribe(() => console.log("Update State: ", store.getState()));

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCandle());
store.dispatch(buyCandle());
store.dispatch(buyCandle());
store.dispatch(buyCandle());
store.dispatch(buyCandle());
