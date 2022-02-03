import React, { useState } from "react";
import "./Pagination.scss";

export const Pagination = ({ getCharacters }) => {
  const [page, setPage] = useState(1);

  const reloadPage = (num) => {
    setPage(num);
    getCharacters(num);
  };

  return (
    <div className="c-pagination">
      {page > 1 && (
        <button
          className="c-pagination__button"
          onClick={() => {
            reloadPage(page - 1);
          }}
        >
          {"<"}
        </button>
      )}
      {page}
      {page < 42 && (
        <button
          className="c-pagination__button"
          onClick={() => {
            reloadPage(page + 1);
          }}
        >
          {">"}
        </button>
      )}
    </div>
  );
};
