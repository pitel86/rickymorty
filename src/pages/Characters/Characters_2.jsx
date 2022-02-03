import React, { useEffect, useState } from "react";

import axios from "axios";
import { Gallery } from "../../components/Gallery/Gallery";
import { Pagination } from "../../components/Pagination/Pagination";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async (newPage = 1) => {
    axios("https://rickandmortyapi.com/api/character?page=" + newPage).then(
      (res) => {
        setCharacters(res.data.results);
      }
    );
  };
  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div>
      <Gallery characters={characters} />
      <Pagination getCharacters={getCharacters}/>
    </div>
  );
};
