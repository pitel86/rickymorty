import React, { useEffect, useState } from "react";

import axios from "axios";
import { Gallery } from "../../components/Gallery/Gallery";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios("https://rickandmortyapi.com/api/character").then((res) => {
      setCharacters(res.data.results);
    });
  }, []);

  return <div>
    <Gallery characters={characters}/>
  </div>;
};
