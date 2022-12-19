import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { useParams } from "react-router-dom";


const Movie = () => {
  const [title, setTitle] = useState('');
  const [poster, setPoster] = useState('');
  const [plot, setPlot] = useState('');
  const [startYear, setStartYear] = useState(''); 
  const [endYear, setEndYear] = useState('');
  const [ratingAvergeTitle, setRatingAvergeTitle] = useState('');
  const { id } = useParams();
  
  //useEffect hook to fetch the data
  useEffect(() => {
    const fetchMovie = async () => {
      // The URL uses id to render the correct movie from search.
      const url = `https://localhost:7101/api/movie/${id}`;

      const response = await fetch(url);

      const movie = await response.json();

      //Update the state
      setTitle(movie.title);
      setPoster(movie.poster);
      setPlot(movie.plot);
      setStartYear(movie.startYear);
      setEndYear(movie.endYear);
      setRatingAvergeTitle(movie.ratingAvergeTitle);
    };

    fetchMovie();
  }, []);

  return (
    <div>
      <Container fluid className="text-center">
      <h1>{title}</h1>
        <Row className="align-items-center">
        <img src={poster} alt={title} className="mx-auto" style={{ width: '300px', height: '400px' }} />
        </Row>
        <Row>
          <p>{plot}</p>
        </Row>
        <Row>
          <Col>
            <Stack gap={3}>
              <div className={endYear ? "bg-light border" : ""}>{startYear}</div>
              <div className={endYear ? "" : "d-none"}>{endYear}</div>
            </Stack>
          </Col>
          <Col>
            <p>Rating: {ratingAvergeTitle}</p>
          </Col>
          <Col>
            <button>ButtonForBookMark</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export { Movie };
