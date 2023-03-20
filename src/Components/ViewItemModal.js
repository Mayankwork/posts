import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { viewpost } from "../utils/viewpostSlice";
import { useEffect } from "react";
import ApiLoader from "./ApiLoader";
const ViewItemModal = () => {
  const flagid = useSelector((store) => store.viewpost.viewpostid);
  const [parsed, setparsed] = useState(false);
  const [loader, setloader] = useState(false);
  const viewpostarr = useSelector((store) => store.viewpost.viewpostarray);
  const dis = useDispatch();
  useEffect(() => {
    apicall();
  }, []);

  const apicall = async () => {
    let mp = viewpostarr.filter((ele) => {
      if (ele.id == flagid) {
        return true;
      }
    });
    if (mp.length > 0) {
      console.log(mp);
      setparsed(mp[0]);
      return;
    }
    setloader(true);
    fetch("https://jsonplaceholder.typicode.com/posts/" + flagid)
      .then(async (res) => {
        let abc = await res.json();
        setparsed(abc);
        setloader(false);
      })
      .catch((err) => {
        setloader(false);
        alert(err);
      });
  };

  const handleModalClose = () => {
    dis(viewpost(false));
  };
  return (
    <>
      {
        <div style={{ marginTop: "16vh" }}>
          <Modal show={flagid} onHide={handleModalClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>{parsed && parsed.title} </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {loader && <ApiLoader />}
              {parsed && (
                <div className="row">
                  <div className="col-12">
                    <h5>USER ID: {parsed.userId}</h5>
                    <p>{parsed.body}</p>
                  </div>
                </div>
              )}
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleModalClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      }
    </>
  );
};

export default ViewItemModal;
