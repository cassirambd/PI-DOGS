import axios from "axios";

export const GET_DOGS = "GET_DOGS";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const ORDER_ALPHABETICALLY = "ORDER_ALPHABETICALLY";
export const ORDER_BY_WEIGHT = "ORDER_BY_WEIGHT";
export const FILTER_TEMPERAMENTS = "FILTER_TEMPERAMENTS";
export const FILTER_CREATED = "FILTER_CREATED";

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
      const json2 = await axios.get("http://localhost:3001/temperaments");
      return dispatch({
        type: "GET_TEMPERAMENTS",
        payload: json2.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const orderAlphabetically = (payload) => {
  return {
    type: "ORDER_ALPHABETICALLY",
    payload: payload,
  };
};

export const orderByWeight = (payload) => { //el payload seria el value de las opciones del input
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
