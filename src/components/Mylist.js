import React from 'react';
import ApiService from '../Apis/ApiService';
import useFetch from '../Apis/useFetch';
import Carousel from 'react-elastic-carousel';

function Mylist() {
    const apiPath = ApiService();
    const [movies] = useFetch(apiPath + "movies/movie_mylist/true");
    const [tvshow] = useFetch(apiPath + "tvshows/tvshow_list/true");
    return (
        <>
        <div className="container">
            <h2 className="text-warning text-center display-3 movie-header my-5">Movie List</h2>
            <Carousel itemsToShow={4}>
                {movies && movies.map((item) =>
                    <>
                        <div className="card" style={{width: "18rem"}} key={item.id}>
                        <img src={apiPath + item.movie_cover} className="card-img-top" alt="..."/>
                        </div>
                    </>
                )}
            </Carousel>

            <h2 className="text-warning text-center display-3 movie-header my-5">Tv Show List</h2>
            <Carousel itemsToShow={4}>
                {tvshow && tvshow.map((item) =>
                    <>
                        <div className="card" style={{width: "18rem"}} key={item.id}>
                        <img src={apiPath + item.movie_cover} className="card-img-top" alt="..."/>
                        </div>
                    </>
                )}
            </Carousel>
        </div>
            
        </>
    );
}

export default Mylist;