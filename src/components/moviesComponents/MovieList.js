import { useEffect, useState } from "react";
import parse from 'html-react-parser';

function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovieList();
    },[])

    const getMovieList = () => {
        fetch("http://localhost:9000/movies")
        .then(response => response.json())
        .then(data => {
            setMovies(data);
        })
        .catch(err => {
            console.log(err.message);
        })
    }

    return (
        <>
            <h5>Movie List</h5>
            {movies.map((item)=>{
                return (
                    <div className="container" key={item.id}>
                        <div>{item.id}</div>
                        <h4>{item.title}</h4>
                        <strong>{item.category}</strong>
                        <p>{item.summary}</p>
                        <div>{item.year}</div>
                        <div>{parse(item.thiller)}</div>
                        <img src={item.movie_cover} alt="movie_cover_img"/>
                        <div>{item.mylist}</div>
                    </div>
                );
            })}
        </>
    );
}

export default MovieList;