import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div class="site-wrap" id="home-section">
          <div class="site-mobile-menu site-navbar-target">
            <div class="site-mobile-menu-header">
              <div class="site-mobile-menu-close mt-3">
                <span class="icon-close2 js-menu-toggle"></span>
              </div>
            </div>
            <div class="site-mobile-menu-body"></div>
          </div>

          <header class="site-navbar site-navbar-target bg-white" role="banner">
            <div class="container">
              <div class="row align-items-center position-relative">
                <div class="col-lg-4">
                  <nav
                    class="site-navigation text-right ml-auto "
                    role="navigation"
                  >
                    <ul class="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                      <li class="active">
                        <a href="index.html" class="nav-link">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="work.html" class="nav-link">
                          Work
                        </a>
                      </li>
                      <li>
                        <a href="what-we-do.html" class="nav-link">
                          What We Do
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div class="col-lg-4 text-center">
                  <div class="site-logo">
                    <a href="index.html">Harbor</a>
                  </div>

                  <div class="ml-auto toggle-button d-inline-block d-lg-none">
                    <a
                      href="#"
                      class="site-menu-toggle py-5 js-menu-toggle text-white"
                    >
                      <span class="icon-menu h3 text-primary"></span>
                    </a>
                  </div>
                </div>
                <div class="col-lg-4">
                  <nav
                    class="site-navigation text-left mr-auto "
                    role="navigation"
                  >
                    <ul class="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                      <li>
                        <a href="about.html" class="nav-link">
                          About
                        </a>
                      </li>
                      <li>
                        <a href="gallery.html" class="nav-link">
                          Gallery
                        </a>
                      </li>
                      <li>
                        <a href="contact.html" class="nav-link">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </header>

          <div class="owl-carousel-wrapper">
            <div class="box-92819 shadow-lg">
              <div>
                <h1 class=" mb-3 text-black">Interior Design</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quam, ratione earum.
                </p>
                <p class="mb-0 mt-4">
                  <a href="#" class="btn btn-primary">
                    Get In Touch
                  </a>
                </p>
              </div>
            </div>

            <div class="owl-carousel owl-1 ">
              <div
                class="ftco-cover-1"
                style={{ backgroundImage: "url('images/hero_1.jpg')" }}
              ></div>
              <div
                class="ftco-cover-1"
                style={{ backgroundImage: "url('images/hero_2.jpg')" }}
              ></div>
              <div
                class="ftco-cover-1"
                style={{ backgroundImage: "url('images/hero_3.jpg')" }}
              ></div>
            </div>
          </div>

          <div class="site-section">
            <div class="container">
              <div class="row mb-5 align-items-center">
                <div class="col-md-7">
                  <h2 class="heading-39291 mb-0">Our Work</h2>
                </div>
                <div class="col-md-5 text-right">
                  <p class="mb-0">
                    <a href="#" class="more-39291">
                      View All Works
                    </a>
                  </p>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6">
                  <div class="media-02819">
                    <a href="#" class="img-link">
                      <img
                        src="images/img_1.jpg"
                        alt="Image"
                        class="img-fluid"
                      />
                    </a>
                    <h3>
                      <a href="#">Creative Modern House</a>
                    </h3>
                    <span>New York City, USA</span>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="media-02819">
                    <a href="#" class="img-link">
                      <img
                        src="images/img_2.jpg"
                        alt="Image"
                        class="img-fluid"
                      />
                    </a>
                    <h3>
                      <a href="#">Creative Modern House</a>
                    </h3>
                    <span>New York City, USA</span>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="media-02819">
                    <a href="#" class="img-link">
                      <img
                        src="images/img_3.jpg"
                        alt="Image"
                        class="img-fluid"
                      />
                    </a>
                    <h3>
                      <a href="#">Creative Modern House</a>
                    </h3>
                    <span>New York City, USA</span>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="media-02819">
                    <a href="#" class="img-link">
                      <img
                        src="images/img_4.jpg"
                        alt="Image"
                        class="img-fluid"
                      />
                    </a>
                    <h3>
                      <a href="#">Creative Modern House</a>
                    </h3>
                    <span>New York City, USA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="site-section bg-primary">
            <div class="container">
              <div class="row mb-5 align-items-center">
                <div class="col-md-7">
                  <h2 class="heading-39291 text-white mb-3">What We Do</h2>
                  <p class="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis velit iure possimus repellendus, esse minus illum
                    nobis deleniti?
                  </p>
                </div>
              </div>
              <div class="row">
                <div
                  class="col-md-6 mb-4 col-lg-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div class="service-29193 text-center">
                    <span class="img-wrap mb-5">
                      <img
                        src="fonts/flaticon/svg/002-kitchen.svg"
                        alt="Image"
                        class="img-fluid"
                      />
                    </span>
                    <h3 class="mb-4">
                      <a href="#">Reiciendis Velit</a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit ame adipisicing elit. Perspiciatis
                      incidunt distinctio voluptate .
                    </p>
                  </div>
                </div>
                <div
                  class="col-md-6 mb-4 col-lg-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div class="service-29193 text-center">
                    <span class="img-wrap mb-5">
                      <img
                        src="fonts/flaticon/svg/003-lamp.svg"
                        alt="Image"
                        class="img-fluid"
                      />
                    </span>
                    <h3 class="mb-4">
                      <a href="#">Incidunt Distinctio</a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit ame adipisicing elit. Perspiciatis
                      incidunt distinctio voluptate .
                    </p>
                  </div>
                </div>

                <div
                  class="col-md-6 mb-4 col-lg-4"
                  data-aos="fade-up"
                  data-aos-delay=""
                >
                  <div class="service-29193 text-center">
                    <span class="img-wrap mb-5">
                      <img
                        src="fonts/flaticon/svg/001-stairs.svg"
                        alt="Image"
                        class="img-fluid"
                      />
                    </span>
                    <h3 class="mb-4">
                      <a href="#">Reiciendis Velit Iure</a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit ame adipisicing elit. Perspiciatis
                      incidunt distinctio voluptate .
                    </p>
                  </div>
                </div>

                <div
                  class="col-md-6 mb-4 col-lg-4"
                  data-aos="fade-up"
                  data-aos-delay=""
                >
                  <div class="service-29193 text-center">
                    <span class="img-wrap mb-5">
                      <img
                        src="fonts/flaticon/svg/004-blueprint.svg"
                        alt="Image"
                        class="img-fluid"
                      />
                    </span>
                    <h3 class="mb-4">
                      <a href="#">Boluptate Ipsum</a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit ame adipisicing elit. Perspiciatis
                      incidunt distinctio voluptate .
                    </p>
                  </div>
                </div>
                <div
                  class="col-md-6 mb-4 col-lg-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div class="service-29193 text-center">
                    <span class="img-wrap mb-5">
                      <img
                        src="fonts/flaticon/svg/006-pantone.svg"
                        alt="Image"
                        class="img-fluid"
                      />
                    </span>
                    <h3 class="mb-4">
                      <a href="#">Modern Elit</a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit ame adipisicing elit. Perspiciatis
                      incidunt distinctio voluptate .
                    </p>
                  </div>
                </div>
                <div
                  class="col-md-6 mb-4 col-lg-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div class="service-29193 text-center">
                    <span class="img-wrap mb-5">
                      <img
                        src="fonts/flaticon/svg/005-dinning-table.svg"
                        alt="Image"
                        class="img-fluid"
                      />
                    </span>
                    <h3 class="mb-4">
                      <a href="#">Dolor Sitame</a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit ame adipisicing elit. Perspiciatis
                      incidunt distinctio voluptate .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="site-section section-4">
            <div class="container">
              <div class="row justify-content-center text-center">
                <div class="col-md-7">
                  <div class="slide-one-item owl-carousel">
                    <blockquote class="testimonial-1">
                      <span class="quote quote-icon-wrap">
                        <span class="icon-format_quote"></span>
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ducimus totam sit delectus earum facere ex ea
                        sunt, eos?
                      </p>
                      <cite>
                        <span class="text-black">Mike Dorney</span> &mdash;{" "}
                        <span class="text-muted">CEO and Co-Founder</span>
                      </cite>
                    </blockquote>

                    <blockquote class="testimonial-1">
                      <span class="quote quote-icon-wrap">
                        <span class="icon-format_quote"></span>
                      </span>
                      <p>
                        Eligendi earum ad perferendis dolores, dolor quas. Ullam
                        in, eaque mollitia suscipit id aspernatur rerum! Sit
                        quibusdam ullam tempora quis, in voluptatum maiores
                        veritatis recusandae!
                      </p>
                      <cite>
                        <span class="text-black">James Smith</span> &mdash;{" "}
                        <span class="text-muted">CEO and Co-Founder</span>
                      </cite>
                    </blockquote>

                    <blockquote class="testimonial-1">
                      <span class="quote quote-icon-wrap">
                        <span class="icon-format_quote"></span>
                      </span>
                      <p>
                        {" "}
                        Officia, eius omnis rem non quis eos excepturi cumque
                        sequi pariatur eaque quasi nihil dicta tempore voluptate
                        culpa, veritatis incidunt voluptatibus qui?
                      </p>
                      <cite>
                        <span class="text-black">Mike Dorney</span> &mdash;{" "}
                        <span class="text-muted">CEO and Co-Founder</span>
                      </cite>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer class="site-footer bg-light">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-md-7">
                      <h2 class="footer-heading mb-4">About Us</h2>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.{" "}
                      </p>
                    </div>
                    <div class="col-md-4 ml-auto">
                      <h2 class="footer-heading mb-4">Features</h2>
                      <ul class="list-unstyled">
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">Testimonials</a>
                        </li>
                        <li>
                          <a href="#">Terms of Service</a>
                        </li>
                        <li>
                          <a href="#">Privacy</a>
                        </li>
                        <li>
                          <a href="#">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 ml-auto">
                  <div class="mb-5">
                    <h2 class="footer-heading mb-4">Subscribe to Newsletter</h2>
                    <form action="#" method="post" class="footer-suscribe-form">
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control rounded-0 border-secondary text-white bg-transparent"
                          placeholder="Enter Email"
                          aria-label="Enter Email"
                          aria-describedby="button-addon2"
                        />
                        <div class="input-group-append">
                          <button
                            class="btn btn-primary text-white"
                            type="button"
                            id="button-addon2"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                  <h2 class="footer-heading mb-4">Follow Us</h2>
                  <a href="#about-section" class="smoothscroll pl-0 pr-3">
                    <span class="icon-facebook"></span>
                  </a>
                  <a href="#" class="pl-3 pr-3">
                    <span class="icon-twitter"></span>
                  </a>
                  <a href="#" class="pl-3 pr-3">
                    <span class="icon-instagram"></span>
                  </a>
                  <a href="#" class="pl-3 pr-3">
                    <span class="icon-linkedin"></span>
                  </a>
                </div>
              </div>
              <div class="row pt-5 mt-5 text-center">
                <div class="col-md-12">
                  <div class="pt-5"></div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
