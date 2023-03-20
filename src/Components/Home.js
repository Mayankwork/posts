import React, { useEffect, useState } from "react";
import AllPostItems from "./AllPostItems";
import AddItemModal from "./AddItemModal";
import Header from "./Header";
import ViewItemModal from "./ViewItemModal";
import { useSelector } from "react-redux";

import { Button } from "react-bootstrap";
const Home = () => {
  const flagid = useSelector((store) => store.viewpost.viewpostid);
  const [fetch ,setfetch] = useState(false)
  function setter(){
setfetch(true);
  }
  return (
    <>{!fetch && <div className="vh-100 d-flex justify-content-center align-items-center">
      <Button onClick={()=>setter()} >Fetch</Button>
      </div>}
      {fetch  &&
      <AllPostItems />}
      {fetch && <AddItemModal />}
      {flagid && <ViewItemModal/>}
      
    </>
  );
};

export default Home;
