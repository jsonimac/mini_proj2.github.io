import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/movies'}>Movies</Link>
                <Link to={'/about'}>About</Link>
            </nav>

            {/* <nav className="nav-col navigation navbar navbar-expand-lg sticky-top p-0 nav-shadow">
                <div className="container-fluid">
                    <span style={{height: "auto", width: "50px", overflow: "hidden",}} className="rounded-circle">
                        <img style={{height: "auto", width: "50px"}}  src={"./public/192.jpg"} alt="Bootstrap"/>
                    </span>
                    <h5 className="fst-italic mx-2">
                        Travel Mis Occ
                    </h5>
                    <button className="navbar-toggler m-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active p-3" aria-current="page" href="../index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-3" href="destination.html">Destination</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-3" href="../index.html">About</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav> */}
        </>
    );
}

export default Navbar;