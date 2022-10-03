const initialState = {
  allDogs: [],
  copyAllDogs: [],
  temperaments: [],
  dog_details: [],
  dogsWeight: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DOGS":
      return {
        ...state,
        allDogs: action.payload.sort((a, b) => a.name.localeCompare(b.name)),
        copyAllDogs: action.payload,
      };
    case "GET_TEMPERAMENTS":
      return {
        ...state,
        temperaments: action.payload,
      };
    case "POST_DOG":
      return {
        ...state,
      };
    case "GET_QUERY":
      return {
        ...state,
        allDogs: action.payload,
      };
    case "ORDER_ALPHABETICALLY":
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
    case "ORDER_BY_WEIGHT":
      const sortedArr2 =
        action.payload === "min weight"
          ? state.allDogs.sort((a, b) => {
              if (isNaN(a.min_weight) || isNaN(b.min_weight)) {
                return -1;
              }
              if (parseInt(a.min_weight) > parseInt(b.min_weight)) {
                return 1;
              }
              if (parseInt(a.min_weight) < parseInt(b.min_weight)) {
                return -1;
              }
              return 0;
            })
          : state.allDogs.sort((a, b) => {
              if (isNaN(a.max_weight) || isNaN(b.max_weight)) {
                return -1;
              }
              if (parseInt(a.max_weight) > parseInt(b.max_weight)) {
                return -1;
              }
              if (parseInt(a.max_weight) < parseInt(b.max_weight)) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        allDogs: sortedArr2,
      };
    case "FILTER_TEMPERAMENTS":
      const dogsTemp = state.copyAllDogs.filter((d) =>
        d.temperament?.includes(action.payload) ? d : null
      );
      return {
        ...state,
        allDogs: dogsTemp,
      };
    case "FILTER_CREATED":
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
