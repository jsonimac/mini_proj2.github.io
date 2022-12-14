import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="nav-col navigation navbar navbar-expand-lg sticky-top p-0 nav-shadow nav-style">
                <div className="container-fluid">
                    <span className="my-2">
                        <img style={{height: "70px", width: "140px"}}  src={"cornflix.jpg"} alt="Logo"/>
                    </span>
                    <button className="navbar-toggler m-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul className="container navbar-nav justify-content-center">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/movies'}>Movies</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/tvshow'}>Tv Show</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/mylist'}>My List</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/faqs'}>FAQs</Link>
                            </li>
                        </ul>
                        <div className="d-flex d-grid gap-1 col-2 justify-content-end px-3">
                            <button type="button" className="btn btn-warning ">Sign Up</button>
                            <button type="button" className="btn btn-warning ">Sign In</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;