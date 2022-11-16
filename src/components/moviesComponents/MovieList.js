import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import ApiService from "../../ApiService";

function MovieList() {
    const [movies, setMovies] = useState([]);
    const apiPath = ApiService();
    useEffect(() => {
        getMovieList();
    },[])

    const getMovieList = () => {
        fetch(ApiService() + "movies")
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
            <section>
                <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="true">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row d-flex justify-content-evenly p-4">
                            <div className="col">
                                <img src="http://localhost:9000/images/movies/movie_rednotice.jpg" className="carol-img d-block w-100" alt="..."/>
                            </div>
                            <div className="col">
                                <img src="http://localhost:9000/images/movies/movie_rednotice.jpg" className="carol-img d-block w-100" alt="..."/>
                            </div>
                            <div className="col">
                                <img src="http://localhost:9000/images/movies/movie_rednotice.jpg" className="carol-img d-block w-100" alt="..."/>
                            </div>
                            <div className="col">
                                <img src="http://localhost:9000/images/movies/movie_rednotice.jpg" className="carol-img d-block w-100" alt="..."/>
                            </div>
                            </div>
                            Jessie Changes 2 Bisag Unsa
                        </div>
                        {/* <div className="carousel-item">
                            <img src="http://localhost:9000/images/movies/movie_rednotice.jpg" className="carol-img d-block w-100" alt="..."/>
                            <div className="carousel-caption d-md-block">
                            <h3>Sapang Dalaga</h3>
                            <p>Sapang Dalaga is a quiet coastal town in the northern part of Misamis Occidental. The placid waters of Casul Bay hems its shore while Mount Dasa & Pedoluan frames it on land. As the town thrives mainly on agri & aqua cultures, fresh vegetable & seafood meals are guaranteed gastronomic treats.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="http://localhost:9000/images/movies/movie_httyd.jpg" className="carol-img d-block w-100" alt="..."/>
                            <div className="carousel-caption d-md-block">
                            <h3>Aloran</h3>
                            <p>Aloran is a coastal municipality in the province of Misamis Occidental. The municipality has a land area of 118.06 square kilometers or 45.58 square miles which constitutes 5.88% of Misamis Occidental's total area. Its population as determined by the 2020 Census was 27,934.</p>
                            </div>
                        </div> */}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            
            {movies.map((item) =>
                <div className="container" key={item.id}>
                    <div>{item.id}</div>
                    <h4>{item.title}</h4>
                    <strong>{item.category}</strong>
                    <p>{item.summary}</p>
                    <div>{item.year}</div>
                    <div>{parse(item.thiller)}</div>
                    <img src={apiPath + item.movie_cover} alt="movie_cover_img"/>
                    <div>{item.mylist}</div>
                </div>

            )}
        </>
    );
}

export default MovieList;