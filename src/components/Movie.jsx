import React, { useEffect, useState } from "react";
import MyNavBar from "../object/MyNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

const Movie = () => {
  const [title, setTitle] = useState(''); // Declare a state variable to store the movie title
  const [poster, setPoster] = useState('');
  const [plot, setPlot] = useState('');
  const [startYear, setStartYear] = useState(''); 
  const [endYear, setEndYear] = useState('');
  const [ratingAvergeTitle, setRatingAvergeTitle] = useState('');
  
  // Use the useEffect hook to fetch the movie data when the component is rendered
  useEffect(() => {
    const fetchMovie = async () => {
      // The URL for the API endpoint that returns the data for the movie
      const url = "https://localhost:5001/api/movie/tt16210266"; // We have to change the tt16210266 to be dynamic, instead of static.

      // Fetch the movie data from the API
      const response = await fetch(url);

      // Parse the JSON response from the API
      const movie = await response.json();

      // Update the state
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
      <h1>Home</h1>

      <Container fluid className="text-center">
        <Row>{title}</Row>
        <Row>
          <img src={poster} alt={title} style={{ width: '300px', height: '400px' }} />
        </Row>
        <Row>{plot}</Row>
        <Row>
          <Col>
            <Stack gap={3}>
              <div classname="bg-light border">{startYear}</div>
              <div classname="bg-light border">{endYear}</div>
            </Stack>
          </Col>
          <Col>Rating: {ratingAvergeTitle}</Col>
          <Col>ButtonForBookMark</Col>
        </Row>
      </Container>
    </div>
  );
}

export { Movie };
