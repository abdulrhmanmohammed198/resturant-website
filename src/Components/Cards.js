import { Button, Modal, Row, Col, Card, Image } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { useState } from "react";

const Cards = ({ itemsData }) => {
  const [showModal, setShowModal] = useState({});

  const handleClose = (itemId) => {
    setShowModal((prevState) => ({
      ...prevState,
      [itemId]: false,
    }));
  };

  const handleShow = (itemId) => {
    setShowModal((prevState) => ({
      ...prevState,
      [itemId]: true,
    }));
  };

  return (
    <Row>
      <Zoom mirror>
        {itemsData.length >= 1 ? (

          itemsData.map((item) => {
            if (!item.title) {
              return ''
            }
            const isModalOpen = showModal[item.id] || false;

            return (
              <>
                <Col key={item.id} sm="12" className="mb-3">
                  <Card className="d-flex flex-row">
                    <Card.Img className="img-item" src={item.img} />
                    <Card.Body>
                      <Card.Title className="d-flex justify-content-between">
                        <div className="item-title">{item.title}</div>
                        <div className="item-O">{item.sqft}</div>
                      </Card.Title>
                      <div className="item-description">
                        <span className="info">Bedrooms: </span>
                        {item.bedrooms}
                      </div>
                      <div className="item-description">
                        <span className="info">Bathrooms: </span>
                        {item.bathrooms}
                      </div>
                      <div className="item-description">
                        <span className="info">Floors: </span>
                        {item.floors}
                      </div>
                      <button
                        className="btn2 modal-btn"
                        onClick={() => handleShow(item.id)}
                      >
                        More Info..
                      </button>
                      <Modal
                        key={item.id}
                        show={isModalOpen}
                        onHide={() => handleClose(item.id)}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title className="item-title">
                            {item.title}{" "}
                            <span className="item-O">{item.sqft}</span>{" "}
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Image fluid rounded src={item.img} className="modal-img" />
                          <p className="item-title">Bedrooms: <span className="item-O">{item.bedrooms}</span></p>
                          <p className="item-title">Bathrooms: <span className="item-O">{item.bathrooms}</span></p>
                          <p className="item-title">Floors <span className="item-O">{item.floors}</span></p>
                          <p className="item-title">Grade: <span className="item-O">{item.grade}</span></p>
                          <p className="item-title">sqft Above: <span className="item-O">{item.sqft_above}</span></p>
                          <p className="item-title">Basement: <span className="item-O">{item.basement}</span></p>
                          <p className="item-title">Population: <span className="item-O">{item.population}</span></p>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="outline-secondary"
                            onClick={() => handleClose(item.id)}
                          >
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            );
          })
        ) : (
          <h3 className="text-center">No Items to Show</h3>
        )}
      </Zoom>
    </Row>
  );
};

export default Cards;
