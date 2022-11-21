import React from 'react';
import ApiService from '../Apis/ApiService';
import useFetch from '../Apis/useFetch';
import Carousel from 'react-elastic-carousel';

const Home = () => {
    const apiPath = ApiService();
    const [movies] = useFetch(apiPath + "movies");
    return (
        <div className="container-fluid">
            <section id="banner" className="banner">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-12 text-center align-items-center pt-5">
                            <div className="search">
                                <form>
                                    <input type="text" placeholder="Search Movies" name="search" />
                                    <button type="submit">Search</button>
                                </form>
                                <p className="text-white justify-content mt-3 h3">A great website for people who love to watch movies and TV shows. It is great way to stay entertainted without having to spend any amount of money. Watch ANYTIME , ANYWHERE through CORNFLIX.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container-fluid">
                <section id="movies">
                    <h2 className="text-warning text-center display-3">Movies</h2>
                    
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="card">
                                    <div className="img-wrapper">
                                        <img src="cornflix.jpg" className="" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">View Movies Details
                                        </button>


                                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        ...
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card">
                                    <div className="img-wrapper">
                                        <img src="cornflix.jpg" className="" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <button className="btn btn-warning">Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card">
                                    <div className="img-wrapper">
                                        <img src="cornflix.jpg" className="" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <button className="btn btn-warning">Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card">
                                    <div className="img-wrapper">
                                        <img src="cornflix.jpg" className="" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>

                                        <button className="btn btn-warning">Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card">
                                    <div className="img-wrapper">
                                        <img src="cornflix.jpg" className="" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card">
                                    <div className="img-wrapper">
                                        <img src="cornflix.jpg" className="" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>     
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                </div>
    
                      
             </section>
            
            <Carousel itemsToShow={4}>
                {movies && movies.map((item) =>
                    <>
                        <div class="card" style={{width: "18rem"}} key={item.id}>
                        <img src={apiPath + item.movie_cover} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        </div>
                    </>
                )}
            </Carousel>

             <section id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <img src="cornflix.jpg" alt="image_of_the_artist"/>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <h6 className="display-2">About</h6>
                        <h2 className="h1 text-body">About CORNFLIX</h2>
                        <p>CORNFLIX is a web application that let you watch your favorites movies for FREE any device and anywhere you want.                   
                        </p>
                        <p>CORNFLIX is develop by 3 web developers 
                        </p>
                    </div>
                </section>

                <section id="faqs">
                    <div class="container">
                        <div class="row align-items-center mb-5">
                            <div class="col-lg-12">
                                <h6 class="display-4 text-warning">Frequently Ask Questions</h6>
                            </div>
                        </div>

                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        What is CORNFLIX?
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        CORNFLIX is a web application that let you watch your favorites movies for FREE any device and anywhere you want.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        How to access CORNFLIX?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>You can access the app to any device you want. Through your Laptop , PC , Mobile Phone , etc. As long as you have internet connection.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Is CORNFLIX free?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>YES!</strong> that's the good about CORNFLIX because you can watch your favorite movies for <strong>FREE!</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Can I watch Netflix shows offline?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Unfortunately <strong>NO</strong> internet connection is required to access the app. But in the near future we will have download feature, so that you can watch your movies/shows offlne.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-5">
                                <img src="cornflix.jpg" alt="image_of_the_artist" />
                            </div>
                            <div class="col-lg-5 offset-lg-1">
                                <h6 class="display-2">About</h6>
                                <h2 class="h1 text-body">About CORNFLIX</h2>
                                <p>CORNFLIX is a web application that let you watch your favorites movies for FREE any device and anywhere you want.
                                </p>
                                <p>CORNFLIX is develop by 3 web developers
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="faqs">
                    <div class="container">
                        <div class="row align-items-center mb-5">
                            <div class="col-lg-12">
                                <h6 class="display-4 text-warning">Frequently Ask Questions</h6>
                            </div>
                        </div>

                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        What is CORNFLIX?
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        CORNFLIX is a web application that let you watch your favorites movies for FREE any device and anywhere you want.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        How to access CORNFLIX?
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>You can access the app to any device you want. Through your Laptop , PC , Mobile Phone , etc. As long as you have internet connection.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Is CORNFLIX free?
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>YES!</strong> that's the good about CORNFLIX because you can watch your favorite movies for <strong>FREE!</strong>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Can I watch Netflix shows offline?
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Unfortunately <strong>NO</strong> internet connection is required to access the app. But in the near future we will have download feature, so that you can watch your movies/shows offlne.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>


    );
}

export default Home;