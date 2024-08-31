import logo from "./logo.svg";
import "./App.css";
import useRevealOnScroll from "./useRevealOnScroll";
import { useEffect, useState } from "react";

function App() {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavActive(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setIsSubmitting(true);

    fetch("https://script.google.com/macros/s/AKfycby3ZcxmaMEaFhpOL6yI6gdpx6DfwUWT6JITg4c4JE44q0K4KXrcWxdvuMKKBaYFVajh/exec", {
      method: "POST",
      body: new FormData(form),
    })
      .then((response) => {
        if (response.ok) {
          form.reset();
          alert("Thanks for your message!");
        } else {
          alert("Oops! There was a problem submitting your form");
        }
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        alert("There was a problem submitting your form.");
        setIsSubmitting(false);
      });
  };

  useRevealOnScroll();

  useEffect(() => {
    // Dynamically load the Splide.js script
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js";
    script.async = true;
    script.onload = () => {
      // Initialize Splide after the script is loaded
      new window.Splide(".splide", {
        type: "loop",
        perPage: 3,
        perMove: 1,
        breakpoints: {
          640: {
            perPage: 1,
          },
        },
        pagination: false,
        gap: "4rem",
        focus: "center",
        autoplay: true,
        interval: 3000,
        pauseOnHover: true,
        pauseOnFocus: true,
        arrows: false,
      }).mount();
    };

    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        top: event.clientY,
        left: event.clientX,
      });
    };

    const handleMouseOver = () => {
      setIsHovered(true);
    };

    const handleMouseOut = () => {
      setIsHovered(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseover", handleMouseOver);
    document.body.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseover", handleMouseOver);
      document.body.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div
        id="top"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/body-bg.png)`,
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
        }}
      >
        <header className="header active" data-header>
          <div className="container">
            <a href="#" className="logo">
              <img src="/images/Website Logo.png" width="110" height="53" alt="unigine home" />
            </a>

            <nav className={`navbar ${isNavActive ? "active" : ""}`} data-navbar>
              <ul className="navbar-list">
                <li className="navbar-item">
                  <a href="#home" className="navbar-link" data-nav-link onClick={closeNav}>
                    home
                  </a>
                </li>

                <li className="navbar-item">
                  <a href="#about-us" className="navbar-link" data-nav-link onClick={closeNav}>
                    about us
                  </a>
                </li>

                <li className="navbar-item">
                  <a href="#configuration" className="navbar-link" data-nav-link onClick={closeNav}>
                    system configuration
                  </a>
                </li>

                <li className="navbar-item">
                  <a href="#pricing" className="navbar-link" data-nav-link onClick={closeNav}>
                    pricing
                  </a>
                </li>

                {/* <li className="navbar-item">
              <a href="#blogs" className="navbar-link" data-nav-link>blogs</a>
            </li>  */}

                <li className="navbar-item">
                  <a href="#contact-us" className="navbar-link" data-nav-link onClick={closeNav}>
                    contact us
                  </a>
                </li>
              </ul>
            </nav>

            <button className={`nav-toggle-btn ${isNavActive ? "active" : ""}`} aria-label="toggle menu" data-nav-toggler onClick={toggleNav}>
              <span className="line line-1"></span>
              <span className="line line-2"></span>
              <span className="line line-3"></span>
            </button>
          </div>
        </header>

        <main>
          <article>
            <div className="hero has-before" id="home">
              <div className="container">
                <p className="section-subtitle">Pune's Ultimate Gaming Destination</p>

                <h1 className="h1 title hero-title">Vibezone Esports Lounge</h1>
                <a href="#contact-us" className="btn" data-btn="" style={{ "--top": "32px", "--left": "80px" }}>
                  Book Your Spot Now
                </a>
                <div className="hero-banner">
                  <img src="/images/hero-banner.png" width="850" height="414" alt="hero banner" className="w-100" />

                  <img src="/images/hero-banner-bg.png" alt="" className="hero-banner-bg" />
                </div>
              </div>
            </div>

            <section className="section news" aria-label="our latest news" id="about-us">
              <div className="container">
                <h2 className="h2 section-title" data-reveal="bottom">
                  About <span className="span">Us</span>
                </h2>

                <p className="section-text" data-reveal="bottom">
                  A brief introduction to Vibezone Esports Lounge.
                </p>

                <ul className="news-list">
                  <li data-reveal="bottom">
                    <div className="news-card">
                      <figure className="card-banner img-holder" style={{ "--width": 600, "--height": 400 }}>
                        <img
                          src="/images/IMG_6279 2.jpeg"
                          width="600"
                          height="400"
                          loading="lazy"
                          alt="Innovative Business All Over The World."
                          className="img-cover"
                        />
                      </figure>

                      <div className="card-content">
                        <p className="card-text">State-of-the-art lounge designed for both competitive and casual gamers.</p>
                      </div>
                    </div>
                  </li>

                  <li data-reveal="bottom">
                    <div className="news-card">
                      <figure className="card-banner img-holder" style={{ "--width": 600, "--height": 400 }}>
                        <img
                          src="/images/IMG_6326.jpeg"
                          width="600"
                          height="400"
                          loading="lazy"
                          alt="How To Start Initiating An Startup In Few Days."
                          className="img-cover"
                        />
                      </figure>

                      <div className="card-content">
                        <p className="card-text">Community-focused with regular events, tournaments, and social gaming nights.</p>
                      </div>
                    </div>
                  </li>

                  <li data-reveal="bottom">
                    <div className="news-card">
                      <figure className="card-banner img-holder" style={{ "--width": 600, "--height": 400 }}>
                        <img
                          src="/images/IMG_6274.jpeg"
                          width="600"
                          height="400"
                          loading="lazy"
                          alt="Financial Experts Support Help You To Find Out."
                          className="img-cover"
                        />
                      </figure>

                      <div className="card-content">
                        <p className="card-text">More than just gaming - an experience that brings the gaming community together.</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <section className="section upcoming" aria-labelledby="upcoming-label" id="configuration">
              <div className="container">
                <h2 className="h2 section-title" data-reveal="bottom">
                  Our Gaming <span className="span">Gear</span>
                </h2>

                <ol className="upcoming-list">
                  <li className="upcoming-item">
                    <div className="upcoming-card left has-before" data-reveal="left">
                      <img src="/images/1.png" width="86" height="81" loading="lazy" alt="Purple Death Cadets" className="card-banner" />

                      <h3 className="h3 card-title">240Hz Refresh Rate | 27-inch</h3>

                      {/* <div className="card-meta">Configuration</div> */}
                    </div>

                    <div className="upcoming-card right has-before" data-reveal="right">
                      <img src="/images/2.png" width="86" height="81" loading="lazy" alt="Trigger Brain Squad" className="card-banner" />

                      <h3 className="h3 card-title">NVIDIA RTX 40 Series GPU</h3>

                      {/* <div className="card-meta">Configuration</div>  */}
                    </div>
                  </li>

                  <li className="upcoming-item">
                    <div className="upcoming-card left has-before" data-reveal="left">
                      <img src="/images/4.png" width="86" height="81" loading="lazy" alt="The Black Hat Hackers" className="card-banner" />

                      <h3 className="h3 card-title">Ergonomic Gaming Chairs</h3>

                      {/* <div className="card-meta">Configuration</div> */}
                    </div>

                    <div className="upcoming-card right has-before" data-reveal="right">
                      <img src="/images/3.png" width="86" height="81" loading="lazy" alt="Your Worst Nightmare" className="card-banner" />

                      <h3 className="h3 card-title">Razer BlackShark 7.1 Surround Sound</h3>

                      {/* <div className="card-meta">Configuration</div>  */}
                    </div>
                  </li>

                  {/* <li className="upcoming-item">
  
                <div className="upcoming-card left has-before" data-reveal="left">
  
                  <img src="./assets/images/team-logo-5.png" width="86" height="81" loading="lazy" alt="Witches And Quizards" className="card-banner" />
  
                  <h3 className="h3 card-title">Witches And Quizards</h3>
  
                  <div className="card-meta">Group 02 | Match 03rd</div>
  
                </div>
  
                <div className="upcoming-card right has-before" data-reveal="right">
  
                  <img src="./assets/images/team-logo-6.png" width="86" height="81" loading="lazy" alt="Resting Bitch Faces" className="card-banner" />
  
                  <h3 className="h3 card-title">Resting Bitch Faces</h3>
  
                  <div className="card-meta">Group 02 | Match 03rd</div>
  
                </div>
  
              </li>  */}
                </ol>
              </div>
            </section>

            <section className="section" id="pricing">
              <div id="image-carousel" className="splide container" aria-label="Beautiful Images">
                <h2 className="h2 section-title" data-reveal="bottom">
                  Pricing & <span className="span">Memberships</span>
                </h2>
                <br />
                <div className="splide__track">
                  <ul className="splide__list">
                    <li className="splide__slide">
                      <img src="/images/Quick Play.png" alt="" />
                    </li>
                    <li className="splide__slide">
                      <img src="/images/Membership.png" alt="" />
                    </li>
                    <li className="splide__slide">
                      <img src="/images/Birthday.png" alt="" />
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* <section className="section news" aria-label="our latest news" id="blogs">
          <div className="container">
  
            <h2 className="h2 section-title" data-reveal="bottom">
              Latest in <span className="span">Gaming</span>
            </h2>
  
            <p className="section-text" data-reveal="bottom">
              Our success in creating business solutions is due in large part to our talented and highly committed team.
            </p>
  
            <ul className="news-list">
  
              <li data-reveal="bottom">
                <div className="news-card">
  
                  <figure className="card-banner img-holder" style="--width: 600; --height: 400;">
                    <img src="./assets/images/news-1.jpg" width="600" height="400" loading="lazy"
                      alt="Innovative Business All Over The World." className="img-cover" />
                  </figure>
  
                  <div className="card-content">
  
                    <a href="#" className="card-tag">Business</a>
  
                    <ul className="card-meta-list">
  
                      <li className="card-meta-item">
                        <ion-icon name="calendar-outline" aria-hidden="true" role="img" className="md hydrated"></ion-icon>
  
                        <time className="card-meta-text" datetime="2022-01-01">Jan 01 2022</time>
                      </li>
  
                      <li className="card-meta-item">
                        <ion-icon name="person-outline" aria-hidden="true" role="img" className="md hydrated"></ion-icon>
  
                        <p className="card-meta-text">Elliot Alderson</p>
                      </li>
  
                    </ul>
  
                    <h3 className="h3">
                      <a href="#" className="card-title">Innovative Business All Over The World.</a>
                    </h3>
  
                    <p className="card-text">
                      Financial experts support or help you to to find out which way you can raise your funds more...
                    </p>
  
                    <a href="#" className="link has-before">Read More</a>
  
                  </div>
  
                </div>
              </li>
  
              <li data-reveal="bottom">
                <div className="news-card">
  
                  <figure className="card-banner img-holder" style="--width: 600; --height: 400;">
                    <img src="./assets/images/news-2.jpg" width="600" height="400" loading="lazy"
                      alt="How To Start Initiating An Startup In Few Days." className="img-cover" />
                  </figure>
  
                  <div className="card-content">
  
                    <a href="#" className="card-tag">Startup</a>
  
                    <ul className="card-meta-list">
  
                      <li className="card-meta-item">
                        <ion-icon name="calendar-outline" aria-hidden="true" role="img" className="md hydrated"></ion-icon>
  
                        <time className="card-meta-text" datetime="2022-01-01">Jan 01 2022</time>
                      </li>
  
                      <li className="card-meta-item">
                        <ion-icon name="person-outline" aria-hidden="true" role="img" className="md hydrated"></ion-icon>
  
                        <p className="card-meta-text">Elliot Alderson</p>
                      </li>
  
                    </ul>
  
                    <h3 className="h3">
                      <a href="#" className="card-title">How To Start Initiating An Startup In Few Days.</a>
                    </h3>
  
                    <p className="card-text">
                      Financial experts support or help you to to find out which way you can raise your funds more...
                    </p>
  
                    <a href="#" className="link has-before">Read More</a>
  
                  </div>
  
                </div>
              </li>
  
              <li data-reveal="bottom">
                <div className="news-card">
  
                  <figure className="card-banner img-holder" style="--width: 600; --height: 400;">
                    <img src="./assets/images/news-3.jpg" width="600" height="400" loading="lazy"
                      alt="Financial Experts Support Help You To Find Out." className="img-cover" />
                  </figure>
  
                  <div className="card-content">
  
                    <a href="#" className="card-tag">Finance</a>
  
                    <ul className="card-meta-list">
  
                      <li className="card-meta-item">
                        <ion-icon name="calendar-outline" aria-hidden="true" role="img" className="md hydrated"></ion-icon>
  
                        <time className="card-meta-text" datetime="2022-01-01">Jan 01 2022</time>
                      </li>
  
                      <li className="card-meta-item">
                        <ion-icon name="person-outline" aria-hidden="true" role="img" className="md hydrated"></ion-icon>
  
                        <p className="card-meta-text">Elliot Alderson</p>
                      </li>
  
                    </ul>
  
                    <h3 className="h3">
                      <a href="#" className="card-title">Financial Experts Support Help You To Find Out.</a>
                    </h3>
  
                    <p className="card-text">
                      Financial experts support or help you to to find out which way you can raise your funds more...
                    </p>
  
                    <a href="#" className="link has-before">Read More</a>
  
                  </div>
  
                </div>
              </li>
  
            </ul>
  
          </div>
        </section> */}

            <section id="contact-us" className="section">
              <div className="container">
                <h2 className="h2 section-title" data-reveal="bottom">
                  Contact <span className="span">Us</span>
                </h2>
                <br />

                <div className="contact-inner">
                  <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="contact-icon text-center">
                      <div className="single-icon">
                        <i className="fas fa-phone"></i>
                        <p>
                          Call : +91 84848 69134
                          <br />
                          Open All Days : 7:00 AM - 12:00 AM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="contact-icon text-center">
                      <div className="single-icon">
                        <i className="fas fa-mail-bulk"></i>
                        <p>
                          Email : contact@vibezoneesports.in
                          <br />
                          Web: www.vibezoneesports.in
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="contact-icon text-center">
                      <div className="single-icon">
                        <i className="fas fa-map-marker-alt"></i>
                        <p>
                          {" "}
                          Location : Pune, Maharashtra
                          <br />
                          Unity Splendour, Wanowrie
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="contact-s-inner"
                  style={{
                    display: "flex",
                    gap: "30px",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ minWidth: "50%", height: "500px" }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.401433925358!2d73.89138987538645!3d18.48251038260375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb8c5aa75931%3A0xe04170cd20317a88!2sVibezone%20Esports%20Lounge!5e1!3m2!1sen!2sin!4v1724874583158!5m2!1sen!2sin"
                      allowfullscreen=""
                      width="100%"
                      height="100%"
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>

                  <form onSubmit={handleSubmit} name="contact-form" method="post" className="" aria-label="Contact form" style={{ minWidth: "50%" }}>
                    <div className="contact-form">
                      <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <p>
                            <span className="wpcf7-form-control-wrap" data-name="your-name">
                              <input
                                size="40"
                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                                aria-required="true"
                                aria-invalid="false"
                                placeholder="Name"
                                type="text"
                                name="your-name"
                                id="your-name"
                              />
                            </span>
                          </p>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <p>
                            <span className="wpcf7-form-control-wrap" data-name="your-email">
                              <input
                                size="40"
                                className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email form-control"
                                aria-required="true"
                                aria-invalid="true"
                                placeholder="Email"
                                type="email"
                                name="your-email"
                                id="your-email"
                              />
                            </span>
                          </p>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12">
                          <p>
                            <span className="wpcf7-form-control-wrap" data-name="your-subject">
                              <input
                                size="40"
                                className="wpcf7-form-control wpcf7-text form-control"
                                aria-invalid="true"
                                placeholder="Phone Number"
                                type="number"
                                name="your-subject"
                                id="your-subject"
                                maxlength="10"
                                minlength="10"
                              />
                            </span>
                          </p>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12">
                          <p>
                            <span className="wpcf7-form-control-wrap" data-name="your-message">
                              <textarea
                                cols="40"
                                rows="7"
                                className="wpcf7-form-control wpcf7-textarea form-control"
                                id="message"
                                aria-invalid="false"
                                placeholder="Massage"
                                name="your-message"
                              ></textarea>
                            </span>
                          </p>
                          <div className="help-block with-errors"></div>
                        </div>
                        <br />
                        <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                          <p style={{ display: "flex", justifyContent: "center" }}>
                            <button type="submit" id="submit" className="btn">
                              Send Message
                            </button>
                          </p>
                          <div className="clearfix"></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </article>
        </main>

        <footer className="footer">
          <div className="section footer-top">
            <div className="container">
              <div className="footer-brand">
                <a href="#" className="logo">
                  <img src="/images/Website Logo.png" width="150" height="73" loading="lazy" alt="Unigine logo" />
                </a>

                <p className="footer-text">
                  Our success in creating business solutions is due in large part to our talented and highly committed team.
                </p>

                <ul className="social-list">
                  <li>
                    <a href="#" className="social-link">
                      <ion-icon name="logo-facebook" role="img" className="md hydrated" aria-label="logo facebook"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="social-link">
                      <ion-icon name="logo-twitter" role="img" className="md hydrated" aria-label="logo twitter"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.insatgram.com/coding.stella" target="_blank" className="social-link">
                      <ion-icon name="logo-instagram" role="img" className="md hydrated" aria-label="logo instagram"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="social-link">
                      <ion-icon name="logo-youtube" role="img" className="md hydrated" aria-label="logo youtube"></ion-icon>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer-list">
                <p className="title footer-list-title has-after">Usefull Links</p>

                <ul>
                  <li>
                    <a href="#home" className="footer-link">
                      Home
                    </a>
                  </li>

                  <li>
                    <a href="#about-us" className="footer-link">
                      About Us
                    </a>
                  </li>

                  <li>
                    <a href="#configuration" className="footer-link">
                      System Configuration
                    </a>
                  </li>

                  <li>
                    <a href="#pricing" className="footer-link">
                      Pricing
                    </a>
                  </li>

                  <li>
                    <a href="#contact-us" className="footer-link">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer-list">
                <p className="title footer-list-title has-after">Contact Us</p>

                <div className="contact-item">
                  <span className="span">Location:</span>

                  <address className="contact-link">Unity Splendour, Wanowrie, Pune, Maharashtra</address>
                </div>

                <div className="contact-item">
                  <span className="span">Join Us:</span>

                  <a href="mailto:Info@gamehive.com" className="contact-link">
                    contact@vibezoneesports.in
                  </a>
                </div>

                <div className="contact-item">
                  <span className="span">Phone:</span>

                  <a href="tel:+12345678910" className="contact-link">
                    +91 84848 69134
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="container">
              <p className="copyright">© 2024 Vibezone All Rights Reserved.</p>
            </div>
          </div>
        </footer>

        <a href="#top" className="back-top-btn" aria-label="back to top" data-back-top-btn="">
          <ion-icon name="arrow-up-outline" aria-hidden="true" role="img" className="md hydrated"></ion-icon>
        </a>

        <div className={`cursor ${isHovered ? "hovered" : ""}`} style={{ top: `${position.top}px`, left: `${position.left}px` }} data-cursor=""></div>
      </div>
    </>
  );
}

export default App;
