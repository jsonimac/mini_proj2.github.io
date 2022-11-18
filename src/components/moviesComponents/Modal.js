function Modal(prop) {
    return (
        <>
            <div className="modal fade" id={"exampleModal" + prop.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{prop.title}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {prop.trailer}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Delete</button>
                            <button type="button" className="btn btn-success">Update</button>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
}

export default Modal;