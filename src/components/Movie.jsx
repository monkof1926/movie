import React, { useEffect } from "react";
import MyNavBar from "../object/MyNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

const Movie = () => {
    useEffect(() => {
      // Code to run when the component is rendered or updated
    });

    return (
      <div>
        <h1>Home</h1>
       

        <Container fluid>
            <Row>MovieTitle</Row>
            <Row>MoviePoster</Row>
            <Row>
                <Col>
                <Stack gap={3}>
                    <div classname ="bg-light border">Start year</div>
                    <div classname ="bg-light border">End year</div>
                </Stack>
                </Col>
                <Col>MovieRatingPlusFunctionality</Col>
                <Col>ButtonForBookMark</Col>
            </Row>
            <Row>Description/plot</Row>
        </Container>
      </div>
    );
  }

  export { Movie };