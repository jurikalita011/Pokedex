import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const PokemonCard = ({ name, id }) => {
  const [isHover, setIsHover] = useState(false);
  const [dreamWorldImg, setDreamWorldImg] = useState(null);

  useEffect(() => {
    const dreamWorldImg = new Image();
    dreamWorldImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
    setDreamWorldImg(dreamWorldImg);
  }, [id]);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      className={
        "shadow-md w-[80%] flex flex-col items-center rounded cursor-pointer "
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`/${id}`}>
        <img
          className="h-[18rem] w-[18rem]"
          src={
            isHover
              ? dreamWorldImg.src
              : `https://img.pokemondb.net/artwork/${name}.jpg`
          }
          alt={name}
        />
      </Link>
      <p className="text-center play">{name}</p>
    </div>
  );
};
