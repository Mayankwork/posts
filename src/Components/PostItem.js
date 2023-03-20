import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { viewpost } from "../utils/viewpostSlice";
const PostItem = (data) => {
  const {userId,id, title,body} = data.data; 

  const dis = useDispatch();
  
  function showpost(id){
    dis(viewpost(id))
  }
  return (
    <div className="d-flex mt-4 " onClick={()=>showpost(id)} >
      <div className="card  shadow w-100 ">
        <div className="card-header ">{title}</div>
        <div className="card-body">
          <div className="small"> <div className="">{body}</div>
            {/* <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
