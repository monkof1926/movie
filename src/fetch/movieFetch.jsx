/*import { useState, useEffect } from "react";

// This function fetches the data for a movie from the API
const fetchMovie = async (tconst) => {
// The URL for the API endpoint that returns the data for the movie
const url = "https://localhost:5001/api/movie/tt16210266";

// Fetch the movie data from the API
const response = await fetch(url);

// Parse the JSON response from the API
const movie = await response.json();

// Return the movie data
return movie;
};

// This function creates a component to display the data for a movie
const FetchedMovie = (tconst) => {
// Create a state variable to store the data for the movie
// Initially, the data is empty
const [movie, setMovie] = useState({});

// Use the useEffect hook to fetch the movie data when the component is rendered
useEffect(() => {
fetchMovie(tconst).then(movie => {
// Update the state with the new movie data
setMovie(movie);
});
}, []);

// Render the movie data
return (
<div>
<div>{movie.title}</div>
<div>{movie.poster}</div>
<div>{movie.startYear}</div>
<div>{movie.endYear}</div>
<div>{movie.ratingAvergeTitle}</div>
<div>{movie.plot}</div>
</div>
);
};

export { FetchedMovie };*/