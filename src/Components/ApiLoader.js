import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
const ApiLoader = () => {
  return (
    <div className="api-loader">
      {
        <div className="loader" style={{
            'display': 'flex',alignItems: 'center',
            justifyContent: 'center',
            'height': '80%',
            marginTop:'10vh'}}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      }
    </div>
  );
};

export default ApiLoader;
