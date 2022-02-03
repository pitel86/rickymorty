import React, { useEffect, useState } from "react";

import axios from "axios";
import { Gallery } from "../../components/Gallery/Gallery";
import { Pagination } from "../../components/Pagination/Pagination";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  
  const getCharacters = async (newPage = 1) => {
    axios("https://rickandmortyapi.com/api/character?page=" + newPage).then(
      (res) => {
        setCharacters(res.data.results);
      }
    );
  };

  const setNewPage = (newPage) => {
    setPage(newPage);
    getCharacters(newPage);
  }


  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div>
      <Pagination setPage={setNewPage} page={page} requestPage="character"/>
      <Gallery characters={characters} />
      <Pagination setPage={setNewPage} page={page} requestPage="character"/>
    </div>
  );
};
