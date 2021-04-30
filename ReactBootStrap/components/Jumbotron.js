import React from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";

const Jumbotronn = () => {
  return (
    <div className="container">
      <Jumbotron fluid>
        <Container>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
          <Button variant="primary">Primary</Button>{" "}
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbotronn;
