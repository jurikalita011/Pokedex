import {
  GET_POKEMON_SUCCESS,
  POKEMON_FAILURE,
  POKEMON_REQUEST,
} from "../actionTypes";

const initialState = {
  pokemon: [],
  next: "",
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POKEMON_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case POKEMON_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case GET_POKEMON_SUCCESS: {
      return {
        ...state,
        pokemon: payload.results,
        next: payload.next,
      };
    }
    default:
      return state;
  }
};
