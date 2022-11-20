import React, { useState } from 'react';

function ModalAddMovie(props) {

    const [movie, setMovie] = useState({id: 0});

    const handleChange = (event) => {
        const names = event.target.name;
        const value = event.target.value;
        if(names === "files"){
            setMovie({...movie, [names]: event.target.files[0]});
        }else{
            setMovie({...movie, [names]: value});
        }
        console.log(movie);
    }
    

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(movie);
        // let id = movie.id;
        // let method = id > 0 ? 'PUT' : 'POST';
        // fetch("http://localhost:9000/employees/" + id, 
        // {method: method, 
        // body: JSON.stringify(movie),
        // headers:{'Content-type': 'application/json; charset=UTF-8',},
        // })
        // .then(response => response.json())
        // .then(data => {
        //     setMovie(data);
        // })
        // .catch((err) => {
        //     console.log(err.message);
        // });
    }

    return (
        <>
            <div className="modal fade" id={props.modaltrig} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                     <form onSubmit={handleSubmit}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Add Movie</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                    <input value={movie.id || ""} type="hidden"/>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Movie Title</label>
                                        <input name="title" onChange={(event) => handleChange(event)} value={movie.title || ""} type={"text"} className="form-control" id="title" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="category" className="form-label">Movie Category</label>
                                        <input name="category" onChange={(event) => handleChange(event)} value={movie.category || ""} type={"text"} className="form-control" id="category" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="summary" className="form-label">Movie Summary</label>
                                        <textarea name="summary" onChange={(event) => handleChange(event)} value={movie.summary || ""} rows={3} type={"text"} className="form-control" id="summary" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="trailer" className="form-label">Movie Trailer Link</label>
                                        <textarea name="trailer" onChange={(event) => handleChange(event)} value={movie.trailer|| ""} rows={2} type={"text"} className="form-control" id="trailer" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="year" className="form-label">Movie Year</label>
                                        <input name="year" onChange={(event) => handleChange(event)} value={movie.year || ""} type={"number"} className="form-control" id="year" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="formFileSm" className="form-label">Movie Cover</label>
                                        <input name="file" onChange={(event) => handleChange(event)} type="file" className="form-control form-control-sm" id="formFileSm" />
                                    </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn btn-primary">Add Movie</button>
                            </div>
                        
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ModalAddMovie;