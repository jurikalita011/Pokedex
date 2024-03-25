import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonRequest } from "../redux/pokemonReducer/action";
import { PokemonCard } from "../components/PokemonCard";

export const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((store) => store.pokemonReducer.pokemon);
  console.log(pokemons, "poke");

  useEffect(() => {
    dispatch(getPokemonRequest);
  }, []);
  return (
    <div className="w-[90%] grid gap-y-[4rem] place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {pokemons?.map((el, index) => {
        return <PokemonCard key={index} {...el} />;
      })}
    </div>
  );
};
