import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Zoom from "react-reveal/Zoom";
const Cards = ({ itemsData }) => {
  return (
    <Row>
      <Zoom left>
        {itemsData.length >= 1 ? (
          itemsData.map((item) => {
            return (
              <Col key={item.id} sm="12" className="mb-3">
                <Card className="d-flex flex-row">
                  <Card.Img className="img-item" src={item.img} />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                      <div className="item-title">{item.title}</div>
                      <div className="item-price">{item.price}</div>
                    </Card.Title>

                    <div className="item-description">{item.description}</div>
                  </Card.Body>
                </Card>
              </Col>
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
