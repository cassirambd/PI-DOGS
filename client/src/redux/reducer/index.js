import { GET_DOGS } from "../actions";

const initialState = {
  dogs: [],
  dog_detail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload //dogs en realidad hace referencia al estado dogs que en un principio es un arreglo vacio
      }
    default: return {
      ...state
    }
  }
};

export { 
  rootReducer 
};
