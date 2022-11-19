function ModalAddMyList(prop) {
    return (
        <>
            <div className="modal fade" id={"exampleModal" + prop.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className='container d-flex justify-content-center'><h1 className="modal-title fs-4 fst-italic" id="exampleModalLabel">{prop.title}</h1></div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='row'>
                                <div className='col col-lg-4'>
                                    <img src={prop.movie_cover} alt="cover_img"/>
                                    <div className='row container'>
                                        <p className="fw-bold fs-6">{prop.year}</p>
                                    </div>
                                </div>
                                <div className='col col-lg-8'>
                                    <div className='container row d-flex justify-content-center'>
                                        {prop.trailer}
                                    </div>
                                    <div className='container row mt-2'>
                                        <p className="fw-bold">{prop.category}</p>
                                    </div>
                                    <div className='container row d-flex justify-content-center'>
                                        <p className="">{prop.summary}</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Add to Mylist</button>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
}

export default ModalAddMyList;