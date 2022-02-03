import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const CharactersDetail = () => {
  const [character, setCharacter] = useState([]);
  const { id } = useParams();

  const getCharacter = async (newPage = 1) => {
    axios("https://rickandmortyapi.com/api/character/" + id).then((res) => {
      setCharacter(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    getCharacter();
  }, []);
  return (
    <div className="c-gallery">
      <div key={character.id}>
        <figure className="c-gallery_card" key={character.id}>
          <figcaption className="c-gallery_card--name">
            {character.name}<br/>
            {character.species}
          </figcaption>
          <img
            className="c-gallery_card--img"
            src={character.image}
            alt={character.name}
          />
        </figure>
      </div>
    </div>
  );
};
