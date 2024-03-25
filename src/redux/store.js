import { thunk } from "redux-thunk";
import { reducer as pokemonReducer } from "../redux/pokemonReducer/reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

const rootReducer = combineReducers({ pokemonReducer });
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
