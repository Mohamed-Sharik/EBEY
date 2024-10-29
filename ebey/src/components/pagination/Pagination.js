import React, { useContext } from "react";
import "../pagination/Pagination.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { SearchCon } from "../../contexts/SearchContext/SearchContext";

function Pagination({ page, setPage }) {
  const { fetchedData } = useContext(SearchCon);

  const prodPerPage = 15;

  const totalProducts = Math.ceil(fetchedData.length / prodPerPage);

  function handlePage(currentPage) {
    if (
      currentPage >= 1 &&
      currentPage <= totalProducts &&
      currentPage !== page
    ) {
      setPage(currentPage);
      window.scrollTo(0, 0);
    }
  }

  return (
    <>
      {totalProducts > 0 && (
        <div className="page-wrap">
          <div className="prev-cnt">
            <button
              onClick={() => handlePage(page - 1)}
              disabled={page === 1}
              className={page === 1 ? "inactive" : "active"}
            >
              <AiOutlineLeft />
              Previous
            </button>
          </div>
          <div className="page-cnt">
            {Array.from({ length: totalProducts }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePage(index + 1)}
                className={page === index + 1 ? "active" : "inactive"}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="nxt-cnt">
            <button
              onClick={() => handlePage(page + 1)}
              disabled={page === totalProducts}
              className={page === totalProducts ? "inactive" : "active"}
            >
              Next
              <AiOutlineRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Pagination;
