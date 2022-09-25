import axios from "axios";

export const getDogs = () => {
  return async (dispatch) => {
    try {
      const json = await axios.get("http://localhost:3001/dogs");
      return dispatch({
        type: "GET_DOGS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTemperaments = () => {
  return async (dispatch) => {
    try {
      const json = await axios.get("http://localhost:3001/temperaments");
      return dispatch({
        type: "GET_TEMPERAMENTS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const postDog = (payload) => {
  return async (dispatch) => {
    try {
      const json = await axios.post("http://localhost:3001/dog", payload);
      console.log(json)
      return json;
    } catch (error) {
      console.log(error);
    }
  };
};

// export const dogDetails = (payload) => {
//   return async (dispatch) => {
//     try {
//       const json = await axios.get(`http://localhost:3001/dogs/${payload}`)
//       return dispatch({
//         type: "GET_DETAILS",
//         payload: json.data
//       })
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }

export const getQuery = (payload) => {
  return async (dispatch) => {
    try {
      const json = await axios.get(`http://localhost:3001/dogs?name=${payload}`)
      return dispatch({
        type: "GET_QUERY",
        payload: json.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const orderAlphabetically = (payload) => {
  return {
    type: "ORDER_ALPHABETICALLY",
    payload: payload,
  };
};

export const orderByWeight = (payload) => {
  //el payload seria el value de las opciones del input
  return {
    type: "ORDER_BY_WEIGHT",
    payload: payload,
  };
};

export const filterTemperaments = (payload) => {
  //lo que llega en payload es lo que yo le mando desde el componente
  return {
    type: "FILTER_TEMPERAMENTS",
    payload: payload,
  };
};

export const filterCreated = (payload) => {
  return {
    type: "FILTER_CREATED",
    payload: payload,
  };
};
