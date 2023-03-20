import React from "react";

const PostItem = (data) => {
  const {userId,id, title,body} = data.data; 


  return (
    <div className="d-flex mt-4 ">
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
