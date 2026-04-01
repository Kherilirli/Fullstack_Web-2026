function App() {

  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">

          {/* Logo */}
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="#" className="d-inline-block align-items-center link-body-emphasis text-decoration-none">
              <i className="fa-solid fa-book fa-2xl" style={{ color: "#74c0fc"}}></i>
              <span className="ms-2 fs-4">Bookstore</span>
            </a>
          </div>

          {/* Menu */}
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#home" className="nav-link px-2">Home</a></li>
            <li><a href="#book" className="nav-link px-2">Book</a></li>
            <li><a href="#team" className="nav-link px-2">Team</a></li>
            <li><a href="#contact" className="nav-link px-2">Contact</a></li>
          </ul>

          {/* Button */}
          <div className="col-md-3 text-end">
            <button className="btn btn-outline-primary me-2">Login</button>
            <button className="btn btn-primary">Register</button>
          </div>

        </header>
      </div>

      <div className="b-example-divider"></div>

      {/* Content */}
      <div className="container my-5" id="home">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          
          {/* Kiri (Text) */}
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Atomic Habbits: Perubahan kecil yang memberikan hasil luar biasa
            </h1>

            <p className="lead">
              Cara mudah dan terbukti untuk membentuk kebiasaan baik dan menghentikan kebiasaan buruk.
            </p>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
                Buy Now
              </button>
              <button className="btn btn-outline-secondary btn-lg px-4">
                Detail
              </button>
            </div>
          </div>

          {/* Kanan (Image) */}
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-3"
              src="https://picsum.photos/720/600"
              alt="example"
              width="720"
            />
          </div>

        </div>
      </div>

      {/* Content 2 */}
      <section className="py-5 text-center container" id="book">
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">Best Salling Book</h1>
                    <p className="lead text-body-secondary">
                      Temukan koleksi buku terbaik pilihan kami yang dapat menambah wawasan dan inspirasi. 
                      Setiap buku dipilih dengan kualitas terbaik untuk menemani perjalanan belajar dan pengembangan diri Anda.
                    </p>
                    <p> 
                      <a href="#" className="btn btn-primary my-2 m-2">Views</a> 
                      <a href="#" className="btn btn-secondary my-2">Other Book</a> 
                    </p>
                </div>
            </div>
        </section>
        <div className="album py-5 bg-body-tertiary">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div className="col">
                        <div className="card shadow-sm"> 
                            <img 
                              src="https://picsum.photos/300/200" 
                              className="card-img-top" 
                              alt="book" 
                            />
                            <div className="card-body">
                              <h5 className="card-title">Atomic Habits</h5>
                              <p className="card-text">
                                Buku tentang kebiasaan kecil yang membawa perubahan besar dalam hidup.
                              </p>
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                  <button className="btn btn-sm btn-primary">Buy</button>
                                  <button className="btn btn-sm btn-outline-secondary">Detail</button>
                                </div>
                                <small className="text-muted">Best Seller</small>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm"> 
                          <img 
                            src="https://picsum.photos/300/200" 
                            className="card-img-top" 
                            alt="book" 
                          />
                            <div className="card-body">
                              <h5 className="card-title">Atomic Habits</h5>
                              <p className="card-text">
                                Buku tentang kebiasaan kecil yang membawa perubahan besar dalam hidup.
                              </p>
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                  <button className="btn btn-sm btn-primary">Buy</button>
                                  <button className="btn btn-sm btn-outline-secondary">Detail</button>
                                </div>
                                <small className="text-muted">Best Seller</small>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm"> 
                          <img 
                              src="https://picsum.photos/300/200" 
                              className="card-img-top" 
                              alt="book" 
                            />
                            <div className="card-body">
                              <h5 className="card-title">Atomic Habits</h5>
                              <p className="card-text">
                                Buku tentang kebiasaan kecil yang membawa perubahan besar dalam hidup.
                              </p>
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                  <button className="btn btn-sm btn-primary">Buy</button>
                                  <button className="btn btn-sm btn-outline-secondary">Detail</button>
                                </div>
                                <small className="text-muted">Best Seller</small>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm"> 
                          <img 
                              src="https://picsum.photos/300/200" 
                              className="card-img-top" 
                              alt="book" 
                            />
                            <div className="card-body">
                              <h5 className="card-title">Atomic Habits</h5>
                              <p className="card-text">
                                Buku tentang kebiasaan kecil yang membawa perubahan besar dalam hidup.
                              </p>
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                  <button className="btn btn-sm btn-primary">Buy</button>
                                  <button className="btn btn-sm btn-outline-secondary">Detail</button>
                                </div>
                                <small className="text-muted">Best Seller</small>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm"> 
                          <img 
                              src="https://picsum.photos/300/200" 
                              className="card-img-top" 
                              alt="book" 
                            />
                            <div className="card-body">
                              <h5 className="card-title">Atomic Habits</h5>
                              <p className="card-text">
                                Buku tentang kebiasaan kecil yang membawa perubahan besar dalam hidup.
                              </p>
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                  <button className="btn btn-sm btn-primary">Buy</button>
                                  <button className="btn btn-sm btn-outline-secondary">Detail</button>
                                </div>
                                <small className="text-muted">Best Seller</small>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm"> 
                          <img 
                              src="https://picsum.photos/300/200" 
                              className="card-img-top" 
                              alt="book" 
                            />
                            <div className="card-body">
                              <h5 className="card-title">Atomic Habits</h5>
                              <p className="card-text">
                                Buku tentang kebiasaan kecil yang membawa perubahan besar dalam hidup.
                              </p>
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                  <button className="btn btn-sm btn-primary">Buy</button>
                                  <button className="btn btn-sm btn-outline-secondary">Detail</button>
                                </div>
                                <small className="text-muted">Best Seller</small>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm"> 
                          <img 
                              src="https://picsum.photos/300/200" 
                              className="card-img-top" 
                              alt="book" 
                            />
                            <div className="card-body">
                              <h5 className="card-title">Atomic Habits</h5>
                              <p className="card-text">
                                Buku tentang kebiasaan kecil yang membawa perubahan besar dalam hidup.
                              </p>
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                  <button className="btn btn-sm btn-primary">Buy</button>
                                  <button className="btn btn-sm btn-outline-secondary">Detail</button>
                                </div>
                                <small className="text-muted">Best Seller</small>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm"> 
                          <img 
                              src="https://picsum.photos/300/200" 
                              className="card-img-top" 
                              alt="book" 
                            />
                            <div className="card-body">
                              <h5 className="card-title">Atomic Habits</h5>
                              <p className="card-text">
                                Buku tentang kebiasaan kecil yang membawa perubahan besar dalam hidup.
                              </p>
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                  <button className="btn btn-sm btn-primary">Buy</button>
                                  <button className="btn btn-sm btn-outline-secondary">Detail</button>
                                </div>
                                <small className="text-muted">Best Seller</small>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm"> 
                          <img 
                              src="https://picsum.photos/300/200" 
                              className="card-img-top" 
                              alt="book" 
                          />
                            <div className="card-body">
                              <h5 className="card-title">Atomic Habits</h5>
                              <p className="card-text">
                                Buku tentang kebiasaan kecil yang membawa perubahan besar dalam hidup.
                              </p>
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                  <button className="btn btn-sm btn-primary">Buy</button>
                                  <button className="btn btn-sm btn-outline-secondary">Detail</button>
                                </div>
                                <small className="text-muted">Best Seller</small>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Team */}
        <section className="py-5 bg-light" id="team">
          <div className="container">
            <h2 className="text-center mb-5">Our Team</h2>
            <div className="row text-center">

              <div className="col-md-4">
                <img src="https://picsum.photos/150" className="rounded-circle mb-3" />
                <h5>John Doe</h5>
                <p>Frontend Developer</p>
              </div>

              <div className="col-md-4">
                <img src="https://picsum.photos/151" className="rounded-circle mb-3" />
                <h5>Jane Smith</h5>
                <p>Backend Developer</p>
              </div>

              <div className="col-md-4">
                <img src="https://picsum.photos/152" className="rounded-circle mb-3" />
                <h5>Michael Lee</h5>
                <p>UI/UX Designer</p>
              </div>

            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-5" id="contact">
          <div className="container">
            <h2 className="text-center mb-4">Contact Us</h2>

            <div className="row justify-content-center">
              <div className="col-md-6">

                <form>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea className="form-control"></textarea>
                  </div>

                  <button className="btn btn-primary w-100">Send Message</button>
                </form>

              </div>
            </div>
          </div>
        </section>

      {/* Footer */}
      <div className="container">
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="#home" className="nav-link px-2 text-body-secondary">Home</a></li>
                <li className="nav-item"><a href="#book" className="nav-link px-2 text-body-secondary">Book</a></li>
                <li className="nav-item"><a href="#team" className="nav-link px-2 text-body-secondary">Team</a></li>
                <li className="nav-item"><a href="#contact" className="nav-link px-2 text-body-secondary">Contact</a></li>
            </ul>
            <p className="text-center text-body-secondary">&copy; NF Academy</p>
        </footer>
    </div>
    </>
  )
}

export default App
