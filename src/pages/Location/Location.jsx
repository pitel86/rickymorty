import React, { useEffect, useState } from "react";

import axios from "axios";
import { LocationsGallery } from "../../components/LocationsGallery/LocationsGallery";
import { Pagination } from "../../components/Pagination/Pagination";

export const Location = () => {
  const [locations, setLocations] = useState([]);
  const [page, setPage] = useState(1);
  
  const getLocations = async (newPage = 1) => {
    axios("https://rickandmortyapi.com/api/location?page=" + newPage).then(
      (res) => {
        setLocations(res.data.results);
      }
    );
  };

  const setNewPage = (newPage) => {
    setPage(newPage);
    getLocations(newPage);
  }


  useEffect(() => {
    getLocations();
  }, []);

  return (
    <div>
      <Pagination setPage={setNewPage} page={page} requestPage="location"/>
      <LocationsGallery locations={locations} />
      <Pagination setPage={setNewPage} page={page} requestPage="location"/>
    </div>
  );
};
