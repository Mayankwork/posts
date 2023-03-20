import React from "react";
import PostItem from "./PostItem";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { additem } from "../utils/appSlice";
import { changeQuery } from "../utils/appSlice";
const AllPostItems = () => {
  const dispatch = useDispatch();
  const search = useSelector((store) => store.app);

  const [data, setdata] = useState("");
  const apicall = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts").catch((err)=>{
      console.log("not working");
    });
    const parsed = await res.json();

    setdata(parsed);
    dispatch(additem(parsed));
    // console.log('after idis ' ,search);
  };

  useEffect(() => {
    apicall();
  }, []);
  // console.log(search.searchitems);
  return (
    <div className="d-flex  flex-column  mx-4" style={{ marginTop: "15vh" }}>
      {search.searchitems &&
        search.searchitems.map((item) => {
          return <PostItem key={item.id} data={item} />;
        })}
    </div>
  );
};

export default AllPostItems;
