import React from "react";
import PostItem from "./PostItem";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { additem } from "../utils/appSlice";
import { changeQuery } from "../utils/appSlice";
import ApiLoader from "./ApiLoader";
const AllPostItems = () => {
  const dispatch = useDispatch();
  const search = useSelector((store) => store.app.searchitems);
  const [loader, setloader] = useState(true);
  const [data, setdata] = useState("");


  const apicall = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts").catch(
      (err) => {
        alert(err)
        setloader(false);
      }
    );
    const parsed = await res.json();

    setdata(parsed);
    dispatch(additem(parsed));
    setloader(false);
  };

  useEffect(() => {
    apicall();
  }, []);
  return (<>    <button>FETCH</button>
    <div className="d-flex  flex-column  mx-4" style={{ marginTop: "16vh" }}>
      {loader && <ApiLoader />}
      {!loader &&
        search &&
        search.map((item) => {
          return <PostItem key={item.id} data={item} />;
        })}
    </div>
    </>

  );
};

export default AllPostItems;
