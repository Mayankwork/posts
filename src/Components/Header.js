import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Capture from "./Capture.JPG"
const Header = () => {
  
  return (
    <div className=" fixed-top App"  style={{ maxHeight: "16vh",minHeight:"16vh" }}>
    <div className=" my-2  mx-4  " >
      <div style={{width:'100%'}}><img width={'100px'} height={'50px'} className="rounded" alt='logo' src={Capture}></img></div>
      <div className=""><SearchBar /></div>
    </div>
    </div>
  );
};

export default Header;
