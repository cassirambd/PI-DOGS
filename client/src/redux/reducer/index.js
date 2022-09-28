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
        allDogs: action.payload.sort((a, b) => a.name.localeCompare(b.name)), //alldogs en realidad hace referencia al estado dogs que en un principio es un arreglo vacio
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
    // case "GET_DETAILS":
    //   return {
    //     ...state,
    //     dog_details: action.payload,
    //   };
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
      // console.log('prop', state.allDogs.weight)
      // let sortedArr2;
      // if (action.payload === "min weight") {
      //   state.allDogs.map((d) => {
      //     return (d.weight = parseInt(d.weight[0]));
      //   });
      //   sortedArr2 = state.allDogs.sort((a, b) => {
      //     if (isNaN(a.weight) || isNaN(b.weight)) {
      //       return -1;
      //     }
      //     if (a.weight > b.weight) {
      //       return 1;
      //     }
      //     if (b.weight > a.weight) {
      //       return -1;
      //     }
      //     return 0;
      //   });
      // }
      // if (action.payload === "max weight") {
      //   state.allDogs.map((d) => {
      //     return (d.weight = parseInt(d.weight.reverse()[0]));
      //   });
      //   sortedArr2 = state.allDogs.sort((a, b) => {
      //     if (isNaN(a.weight) || isNaN(b.weight)) {
      //       return -1;
      //     }
      //     if (a.weight > b.weight) {
      //       return -1;
      //     }
      //     if (b.weight > a.weight) {
      //       return 1;
      //     }
      //     return 0;
      //   })};
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
