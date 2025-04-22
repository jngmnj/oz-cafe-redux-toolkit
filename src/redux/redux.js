import { combineReducers, legacy_createStore } from "redux";

// 액션 생성자 함수
import data from "../assets/data";
export const addToCart = (options, quantity, id) => {
  return {
    type: "addToCart",
    payload: { options, quantity, id },
  };
};

export const removeFromCart = (id) => {
  return {
    type: "removeFromCart",
    payload: { id },
  };
};

// reducer 함수
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "addToCart":
      return [...state, action.payload];
    case "removeFromCart":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

const menuReducer = (state = data.menu, action) => {
    return state;
};

// 리듀서 합치기
const rootReducer = combineReducers({
  cart: cartReducer,
  menu: menuReducer,
});

export const store = legacy_createStore(rootReducer);