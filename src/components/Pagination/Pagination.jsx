import React from "react";
import "./Pagination.scss";

export const Pagination = ({ setPage, page, requestPage }) => {

  let maxPage = (requestPage === "character") ? 42 : 7;

  return (
    <div className="c-pagination">
      {page > 1 && (
        <button
          className="c-pagination__button"
          onClick={() => {
            setPage(page - 1);
          }}
        >
          {"<"}
        </button>
      )}
      {page}
      {page < maxPage && (
        <button
          className="c-pagination__button"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          {">"}
        </button>
      )}
    </div>
  );
};
