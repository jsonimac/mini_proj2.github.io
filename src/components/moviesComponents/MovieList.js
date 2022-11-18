import parse from 'html-react-parser';
import ApiService from "../../Apis/ApiService";
import useFetch from "../../Apis/useFetch";
import Modal from './Modal';
import Footer from '../Footer';

function MovieList() {
    const apiPath = ApiService();
    const [movies] = useFetch(apiPath + "movies");
    
    return (
        <>
        
            <h5>Movie List</h5>
            {/* <section>
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
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                        </svg>
                    </span>   
                    <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span  aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </span>       
                    <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section> */}
            <div className='row row-cols-2 row-cols-lg-5 row-cols-md-3 g-4'>
            {movies && movies.map((item) =>
                <div key={item.id}>
                    <div className='col'>
                        <div type="button" data-bs-toggle="modal" data-bs-target={"#exampleModal" + item.id}>
                            <div className="card h-100 card-style" >
                                <img src={apiPath + item.movie_cover} className="card-img img-style" alt="movie_cover_photo"/>
                            </div>
                            <div className='d-flex justify-content-center mt-1'>
                                <p className='fs-6 fw-bold'>{item.title}</p>
                            </div>
                        </div>
                    </div>
                    <Modal id={item.id} title={item.title} trailer={parse(item.thriller)}/>
                </div>
            )}
            </div>
        </>
    );
}

export default MovieList;