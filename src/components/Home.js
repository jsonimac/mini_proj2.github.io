
const Home = () => {
    return (
        <div className="container-fluid">
            <section id="banner" className="banner">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-12 text-center align-items-center pt-5">
                        <div className="search">
                            <form>
                            <input type="text" placeholder="Search Movies" name="search"/>
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
                            <img src="cornflix.jpg" className="" alt="..."/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">View Movies Details
                                    </button>


                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            ...
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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
                            <img src="cornflix.jpg" className="" alt="..."/>
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
                            <img src="cornflix.jpg" className="" alt="..."/>
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
                            <img src="cornflix.jpg" className="" alt="..."/>
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
                            <img src="cornflix.jpg" className="" alt="..."/>
                        </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">Details
                                </button>
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
    
                      
             </section>

             <section id="about">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5">
                        <img src="cornflix.jpg" alt="image_of_the_artist"/>
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

                <section>
                <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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