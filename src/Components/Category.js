import React from "react";
import { Col, Row } from "react-bootstrap";

const Category = ({ filterByCategories, categories }) => {
  //to filter by categories
  const onFilter = (cat) => {
    filterByCategories(cat);
  };
  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        {categories.length >= 1 ? (
          categories.map((cat) => {
            return (
              <div key={Math.random()}>
                <button onClick={() => onFilter(cat)} className="btn2 mx-2">
                  {cat}
                </button>
              </div>
            );
          })
        ) : (
          <h4>Not Found</h4>
        )}
      </Col>
    </Row>
  );
};

export default Category;
