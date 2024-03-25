import axios from "axios";
import {
  GET_POKEMON_SUCCESS,
  POKEMON_FAILURE,
  POKEMON_REQUEST,
} from "../actionTypes";

export const getPokemonRequest = (dispatch) => {
  dispatch({ type: POKEMON_REQUEST });
  axios
    .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=60")
    .then((res) => {
      console.log(res.data.results, "action");
      dispatch({ type: GET_POKEMON_SUCCESS, payload: res.data.results });
    })
    .catch((err) => {
      dispatch({ type: POKEMON_FAILURE });
      console.log(err.message);
    });
};
