import React from "react";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Home = () => {
  return (
    <div>
      <Container fluid className="center">
        <Row className="justify-content-center align-self-center">
          <h1>Welcome to our skincare store</h1>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
