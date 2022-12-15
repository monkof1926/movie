import { useState } from "react";

let movieURL = "http://localhost:5001/api/movie";

function Movie(){
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState("idle");

    async function GetMovies(){
        try{
            const res = await(movieURL + "/GetMovies");
            const json = await res.json();
            console.log(json);

            setMovies(json.results);
            setStatus("done");
        } catch(e){
            setStatus("404 can't find movie");
        }

        return (
            <div>
                {status === "done" && (
                    <p>{movies.map(m => m.tconst).join(",")}</p>
                )}
            </div>
        );
    }

    async function GetMovie(tconst){
        try{
            const res = await(movieURL + "/GetMovie")
            const json = await res.json(tconst);
            console.log(json);

            setMovies(json.GetMovie.tconst);
            setStatus("done");
        } catch(e){
            setStatus("404 can't find movie");
        }
        return(
            <div>
                {status === "done" && (
                    <p>{movies.map(m => m.tconst).join(",")}</p>
                )}
            </div>
        );
    }
    return GetMovies, GetMovie;
}

export default Movie;