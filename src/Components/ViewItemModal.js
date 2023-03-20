import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ViewItemModal = () => {

    const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <Button variant="primary" onClick={handleModalOpen}>
        Open Modal
      </Button>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="row">
            <div className="col">
              <h5>Heading 1</h5>
              <p>Text below heading 1</p>
            </div>

            <div className="col">
              <h5>Heading 2</h5>
              <p>Text below heading 2</p>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModalClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}

export default ViewItemModal