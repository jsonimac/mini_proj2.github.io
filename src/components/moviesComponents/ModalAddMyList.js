import React, { useState } from 'react';
import ApiService from '../../Apis/ApiService';

function ModalAddMyList(props) {
    const [check, setCheck] = useState(false);
    const apiPath = ApiService();
    const [status, setStatus] = useState(
        {
            status: props.mylist,
            message: "Not Included To Mylist",

        }
    );
    const onCheck = () => {
        setCheck(!check);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        let id = props.id;
        fetch(apiPath + "movies/movie/" + id, 
        {method: 'PUT', 
        body: JSON.stringify({mylist: check}),
        headers:{'Content-type': 'application/json; charset=UTF-8',},
        })
        .then(response => response.json())
        .then(data => {
            console.log({message: "succesfully added to mylist"});
            if(check === true){
                setStatus({message: "All Ready Added To"});
            }else{
                setStatus({message: "Not Included To Mylist"});
            }
            
        })
        .catch((err) => {
            console.log(err.message);
        });
    }


    return (
        <>
            <div className="modal fade" id={"exampleModal" + props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className='container d-flex justify-content-center'><h1 className="modal-title fs-4 fst-italic" id="exampleModalLabel">{props.title}</h1></div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='row'>
                                <div className='col col-lg-4'>
                                    <img src={props.movie_cover} alt="cover_img"/>
                                    <div className='row container'>
                                        <p className="fw-bold fs-6">{props.year}</p>
                                    </div>
                                </div>
                                <div className='col col-lg-8'>
                                    <div className='container row d-flex justify-content-center'>
                                        {props.trailer}
                                    </div>
                                    <div className='container row mt-2'>
                                        <p className="fw-bold">{props.category}</p>
                                    </div>
                                    <div className='container row d-flex justify-content-center'>
                                        <p className="">{props.summary}</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-footer justify-content-between">
                                <div>
                                    {status.message}
                                </div>
                                <div>
                                    <input onChange={onCheck} className="form-check-input mt-3 mx-3" type="checkbox" placeholder="Checkbox for following text input"/>
                                    <button type="submit" className={"btn btn-" + (check ? 'primary':'danger')} data-bs-dismiss="modal" >{check ? 'Add to Mylist' : 'Remove to Mylist'}</button>
                                </div>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>  
        </>
    );
}

export default ModalAddMyList;