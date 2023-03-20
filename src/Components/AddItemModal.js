import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./style.css";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { newposts } from "../utils/appSlice";
import { useSelector } from "react-redux";
import { Alert } from 'react-bootstrap';
import { addviewpostarray } from "../utils/viewpostSlice";
export default function Example() {
  const search = useSelector((store) => store.app.searchitems);
  const viewpostarr = useSelector((store) => store.viewpost.viewpostarray);
 
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const handleTitleChange = (event) => {
    if(text1 !== "" && text2 !==""){
      setShowAlert(false);
    }
    setText1(event.target.value);
  };
  const handleSummaryChange = (event) => {
    if(text1 !== "" && text2 !==""){
      setShowAlert(false);
    }
    setText2(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (text1.trim() === '' || text2.trim() === '') {
      setShowAlert(true);
      return;
    }else{
      setShowAlert(false);
    }
    const newarr = [...search];
   
    let newobj = {
      title: text1,
      body:text2,
      id:newarr.length+1,
      userId:'1',
    }
    newarr.unshift(newobj);
    
    let vpa = [...viewpostarr];
    
    vpa.push(newobj);
    dispatch(newposts(newarr));

    dispatch(addviewpostarray(vpa));

    setText1("");
    setText2("");
    handleClose()
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Posts to List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="inputTextArea">
              <h3 className="custom-font">Title</h3>
            <Form.Control
                as="textarea"
                rows={1}
                value={text1}
                onChange={handleTitleChange}
              />
               <h3 className="custom-font mt-1" >Summary</h3>
              <Form.Control
                as="textarea"
                rows={4}
                value={text2}
                onChange={handleSummaryChange}
              />
            </Form.Group>
            <div>
            {showAlert && (
        <Alert className="mt-2" variant="danger" onClose={() => setShowAlert(false)} dismissible>
          Please fill both fields !
        </Alert>
      )}
            <Button className="mt-3 " style={{float:'right'}} type="submit">Submit</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      <div className="floating-btn shadow" onClick={handleShow}></div>
    </>
  );
}
