import {
  GET_DOGS,
  GET_TEMPERAMENTS,
  ORDER_ALPHABETICALLY,
  ORDER_BY_WEIGHT,
  FILTER_TEMPERAMENTS,
  FILTER_CREATED,
} from "../actions";

const initialState = {
  allDogs: [],
  copyAllDogs: [],
  temperaments: [],
  dog_detail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        allDogs: action.payload, //alldogs en realidad hace referencia al estado dogs que en un principio es un arreglo vacio
        copyAllDogs: action.payload,
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };
    case ORDER_ALPHABETICALLY:
      const sortedArr =
        action.payload === "A-Z"
          ? state.allDogs.sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.allDogs.sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        allDogs: sortedArr,
      };
    case ORDER_BY_WEIGHT:
      const sortedArr2 =
        action.payload === "min weight"
          ? state.allDogs.sort((a, b) => {
              if (a.weight > b.weight) {
                return 1;
              }
              if (b.weight > a.weight) {
                return -1;
              }
              return 0;
            })
          : state.allDogs.sort((a, b) => {
              if (a.weight > b.weight) {
                return -1;
              }
              if (b.weight > a.weight) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        allDogs: sortedArr2,
      };
    case FILTER_TEMPERAMENTS:
      return {};
    case FILTER_CREATED:
      const createdFilter =
        action.payload === "dogs from API"
          ? state.copyAllDogs.filter((d) => !d.createdInDb)
          : state.copyAllDogs.filter((d) => d.createdInDb);
      return {
        ...state,
        allDogs:
          action.payload === "all dogs" ? state.copyAllDogs : createdFilter,
      };
    default:
      return {
        ...state,
      };
  }
};

export { rootReducer };
