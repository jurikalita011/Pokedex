import React from "react";

export const PokemonCard = ({ name }) => {
  return (
    <div className="shadow-md w-[80%] flex flex-col items-center rounded cursor-pointer">
      <img
        className="h-[18rem] w-[18rem]"
        src={`https://img.pokemondb.net/artwork/${name}.jpg`}
        alt="err"
      />
      <p className="text-center play">{name}</p>
    </div>
  );
};
