import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonRequest } from "../redux/pokemonReducer/action";
import { PokemonCard } from "../components/PokemonCard";

export const Home = () => {
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const pokemons = useSelector((store) => store.pokemonReducer.pokemon);
  const next = useSelector((store) => store.pokemonReducer.next);

  console.log(pokemons, "poke");
  console.log(next, "next");

  useEffect(() => {
    dispatch(getPokemonRequest(offset));
  }, [offset, dispatch]);

  useEffect(() => {
    if (pokemons.length > 0) {
      setData((prevData) => [...prevData, ...pokemons]);
    }
  }, [pokemons]);

  const handleLoadMore = () => {
    setLoading(true);
    setOffset((prev) => prev + pokemons.length);
    setLoading(false);
  };

  return (
    <div className="w-[90%] grid gap-y-[4rem] place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-[6rem] relative">
      {data.map((pokemon, index) => (
        <PokemonCard key={index} id={index + 1} {...pokemon} />
      ))}
      {next && (
        <button
          onClick={handleLoadMore}
          disabled={loading}
          className="absolute bottom-4 right:[15%] lg:right-[45%] bg-gradient-to-r from-red-600 to-white p-4 rounded text-white btnTxt"
        >
          {loading ? "Loading..." : "Load More..."}
        </button>
      )}
    </div>
  );
};
