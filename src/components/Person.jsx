import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { useParams } from "react-router-dom";

const Person = () => {
  const [fullname, setFullname] = useState(''); // Declare a state variable to store the person name
  const [birthYear, setBirthYear] = useState(''); // Declare a state variable to store the person
  const [deathYear, setDeathYear] = useState(''); // Declare a state variable to store the person
  const { id } = useParams();


  // Use the useEffect hook to fetch the movie data when the component is rendered
  useEffect(() => {
    const fetchPerson = async () => {
      // The URL for the API endpoint that returns the data for the movie
      const url = `https://localhost:7101/api/person/${id}`; // We have to change the tt16210266 to be dynamic, instead of static.

      // Fetch the movie data from the API
      const response = await fetch(url);

      // Parse the JSON response from the API
      const person = await response.json();

      // Update the state
      setFullname(person.fullname);
      setBirthYear(person.birthYear);
      setDeathYear(person.deathYear);
    };

    fetchPerson();
  }, []);

  return (
    <div>
      <h1>{fullname}</h1>

      <Container fluid className="text-center">
        <Row>Information:</Row>
        <Row>Born in the year: {birthYear}</Row>
        <Row>Died in the year: {deathYear}</Row>
      </Container>
    </div>
  );
}

export { Person };