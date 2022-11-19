import React from 'react';
import ApiService from '../../Apis/ApiService';
import useFetch from '../../Apis/useFetch';
import parse from 'html-react-parser';
import TvshowMylist from './TvshowMylist';

function TvshowList() {
    const apiPath = ApiService();
    const [tvshow] = useFetch(apiPath + "tvshow");

    return (
        <>
            <h2 className="text-warning text-center display-3 movie-header my-5">Tv Show</h2>
            <div className='row row-cols-2 row-cols-lg-5 row-cols-md-3 g-4'>
            {tvshow && tvshow.map((item) =>
                <div key={item.id}>
                    <div className='col'>
                        <div type="button" data-bs-toggle="modal" data-bs-target={"#exampleModal" + item.id}>
                            <div className="card h-75 card-style" >
                                <img src={apiPath + item.movie_cover} className="card-img img-style" alt="movie_cover_photo"/>
                            </div>
                            <div className='d-flex justify-content-center mt-1'>
                                <p className='fs-6 fw-bold'>{item.title}</p>
                            </div>
                        </div>
                    </div>
                    <TvshowMylist 
                        id={item.id} 
                        title={item.title} 
                        trailer={parse(item.thriller)} 
                        movie_cover={apiPath + item.movie_cover} 
                        summary={item.summary}
                        category={item.category}
                        year={item.year}
                    />

                </div>
            )}
            </div>
        </>
    );
}

export default TvshowList;