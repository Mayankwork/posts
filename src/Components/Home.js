import React, { useEffect } from "react";
import AllPostItems from "./AllPostItems";
import AddItemModal from "./AddItemModal";
import Header from "./Header";
const Home = () => {
  return (
    <>
      
      <AddItemModal />
      <AllPostItems />
    </>
  );
};

export default Home;
