// action value
const PLUS_ONE = 'counter/PLUS_ONE';
const MINUS_ONE = 'counter/MINUS_ONE';
const PLUS_N = 'counter/PLUS_N';
const MINUS_N = 'counter/MINUS_N';
// action creater : action value를 return 하는 함수
export const plusOne = () => {
  return {
    type: PLUS_ONE,
  };
};
export const minusOne = () => {
  return {
    type: MINUS_ONE,
  };
};
export const plusN = (payload) => {
  return {
    type: PLUS_N,
    payload,
  };
};
export const minusN = (payload) => {
  return {
    type: MINUS_N,
    payload,
  };
};

// 초기 상태값(state)
const initialState = {
  number: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_ONE:
      return {
        number: state.number + 1,
      };
    case MINUS_ONE:
      return {
        number: state.number - 1,
      };
    case PLUS_N:
      return {
        number: state.number + action.payload,
      };
    case MINUS_N:
      return {
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

export default counter;
