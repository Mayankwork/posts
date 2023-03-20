import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { additem } from "../utils/appSlice";
import { changeQuery } from "../utils/appSlice";

const SearchBar = () => {
  
  const dispatch = useDispatch();
  const search = useSelector((store) => store.app);


  function inputChange(e) {
    let query = e.target.value

    let newarr = [];
     newarr = search.allitems.filter((ele) => {
      if (query.length==0) {
        return true;
      }
      return ele.title.includes(query) || ele.body.includes(query);
    });
    // console.log(e.target.value);
    dispatch(changeQuery(newarr));
  }

  return (
    <>
      <div>
        <form className="d-flex mt-3 ">
          <input
            className="form-control me-2  "
            type="search"
            onChange={(e) => inputChange(e)}
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" onClick={()=>{window.location.reload()}}>Refresh</button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
