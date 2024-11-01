import React, { useContext, useEffect, useState } from "react";
import CustCard from "../card1/CustCard";
import { SearchCon } from "../../contexts/SearchContext/SearchContext";
import "../displaydata/DisplayProd.css";
import "../card1/CustCard.css";
import Pagination from "../pagination/Pagination";

function DisplayProd() {
  const { fetchedData, getData } = useContext(SearchCon);

  const [page, setPage] = useState(1);

  const DisplayProds = fetchedData.slice(page * 15 - 15, page * 15);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [fetchedData]);

  return (
    // <div className="container">
    <div className="prod-con">
      <div className="prod-wrap">
        <div className="prod-grid">
          {DisplayProds.map((val) => (
            <CustCard
              key={val.id}
              id={val.id}
              img={val.thumbnail}
              title={val.title}
              catg={val.category}
              brand={val.brand}
              price={val.price}
            />
          ))}
        </div>
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default DisplayProd;
