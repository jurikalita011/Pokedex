import axios from "axios";
import {
  GET_POKEMON_SUCCESS,
  POKEMON_FAILURE,
  POKEMON_REQUEST,
} from "../actionTypes";

export const getPokemonRequest = (offset) => (dispatch) => {
  dispatch({ type: POKEMON_REQUEST });
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=12`)
    .then((res) => {
      console.log(res.data, "action");
      dispatch({ type: GET_POKEMON_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: POKEMON_FAILURE });
      console.log(err.message);
    });
};
