import React from 'react';
import ApiService from '../Apis/ApiService';
import useFetch from '../Apis/useFetch';
import Carousel from 'react-elastic-carousel';

const Home = () => {
    const apiPath = ApiService();
    const [movies] = useFetch(apiPath + "movies");
    const [tvshows] = useFetch(apiPath + "tvshows");
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
                    <h2 className="text-warning text-center display-3 mb-5">Movies</h2>

                    <Carousel itemsToShow={4}>
                        {movies && movies.map((item) =>
                            <>
                                <div class="card" style={{width: "18rem"}} key={item.id}>
                                <img src={apiPath + item.movie_cover} class="card-img-top" alt="..."/>
                                </div>
                            </>
                        )}
                    </Carousel>
                </section>
            </div>

            <div className="container-fluid">
                <section id="movies">
                    <h2 className="text-warning text-center display-3 mb-5">Tvshows</h2>

                    <Carousel itemsToShow={4}>
                        {tvshows && tvshows.map((item) =>
                            <>
                                <div class="card" style={{width: "18rem"}} key={item.id}>
                                <img src={apiPath + item.movie_cover} class="card-img-top" alt="..."/>
                                </div>
                            </>
                        )}
                    </Carousel>
                </section>
            </div>

            
        
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

            </div>


    );
}

export default Home;