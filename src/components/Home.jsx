import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  //Constants:
  const [posters, setPosters] = useState([]);
  const tconsts = [
    "tt0468569",
    "tt0167260",
    "tt0266697",
    "tt1375666",
    "tt0304141",
    "tt0292577"
  ];

  useEffect(() => {
    //Code to run when the component is rendered or updated
    const urls = [
      "https://localhost:7101/api/movie/tt0468569", //Dark Knight URL
      "https://localhost:7101/api/movie/tt0167260", //Lord of the Rings URL
      "https://localhost:7101/api/movie/tt0266697", //Kill Bill URL
      "https://localhost:7101/api/movie/tt1375666", //Inception URL
      "https://localhost:7101/api/movie/tt0304141", //Harry Potter URL
      "https://localhost:7101/api/movie/tt0292577"  //GB URL
    ];

    const fetchData = async () => {
      //Make a GET request to each of the URLs
      const responses = await Promise.all(
        urls.map(url => fetch(url))
      );
      const data = await Promise.all(
        responses.map(response => response.json())
      );
      setPosters(data.map(d => d.poster));
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Welcome to the Movie Database!</h3>
      <h4 style={{ textAlign: "center" }}>Use the Search function to find movies and people</h4>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
        {posters.slice(0, 3).map((poster, index) => (
          <Link key={index} to={`/Movie/${tconsts[index]}`}>
            <img src={poster} alt="Movie Poster" />
          </Link>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
        {posters.slice(3).map((poster, index) => (
          <Link key={index} to={`/Movie/${tconsts[index + 3]}`}>
            <img src={poster} alt="Movie Poster" />
          </Link>
        ))}
      </div>
      <h4 style={{ textAlign: "center" }}>Try clicking one of the featured movie posters!</h4>
    </div>
  );
};

export { Home };
