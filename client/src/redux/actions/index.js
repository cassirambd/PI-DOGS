import axios from "axios";

export const GET_DOGS = "GET_DOGS";

export const getDogs = () => {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/dogs");
      return dispatch({
        type: "GET_DOGS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
