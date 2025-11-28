import React from "react";
import "../assets/css/style.css";
import { IonIcon } from "@ionic/react";
import { useContext, useRef } from "react"
import axios from "axios"

import {
  callOutline,
  menuOutline,
  search,
  closeOutline,
  logoFacebook,
  logoTwitter,
  logoYoutube,
  star,
  time,
  people,
  location,
  chevronUpOutline,
  mailOutline,
  locationOutline
} from "ionicons/icons";
// Import images like this:
import logo from "../assets/images/logo.svg";
import logoBlue from "../assets/images/logo-blue.svg";
import myLogo from "../assets/images/myLogo.png";
import myLogoWhite from "../assets/images/myLogo-white.png";
import popular1 from "../assets/images/popular-1.jpg";
import popular2 from "../assets/images/popular-2.jpg";
import popular3 from "../assets/images/popular-3.jpg";
import packege1 from "../assets/images/packege-1.jpg";
import packege2 from "../assets/images/packege-2.jpg";
import packege3 from "../assets/images/packege-3.jpg";
import gallery1 from "../assets/images/gallery-1.jpg";
import gallery2 from "../assets/images/gallery-2.jpg";
import gallery3 from "../assets/images/gallery-3.jpg";
import gallery4 from "../assets/images/gallery-4.jpg";
import gallery5 from "../assets/images/gallery-5.jpg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { appcontext } from "../context/context"
function LandingPage() {
 useEffect(() => {

    /** -------------------------
     * NAVBAR TOGGLE
     ---------------------------*/
    const overlay = document.querySelector("[data-overlay]");
    const navOpenBtn = document.querySelector("[data-nav-open-btn]");
    const navbar = document.querySelector("[data-navbar]");
    const navCloseBtn = document.querySelector("[data-nav-close-btn]");
    const navLinks = document.querySelectorAll("[data-nav-link]");

    const navElems = [navOpenBtn, navCloseBtn, overlay];

    const toggleNavbar = () => {
      navbar?.classList.toggle("active");
      overlay?.classList.toggle("active");
    };

    navElems.forEach((elem) => elem?.addEventListener("click", toggleNavbar));
    navLinks.forEach((link) =>
      link?.addEventListener("click", toggleNavbar)
    );

    /** -------------------------
     * STICKY HEADER + GO TOP
     ---------------------------*/
    const header = document.querySelector("[data-header]");
    const goTopBtn = document.querySelector("[data-go-top]");

    const handleScroll = () => {
      if (window.scrollY >= 200) {
        header?.classList.add("active");
        goTopBtn?.classList.add("active");
      } else {
        header?.classList.remove("active");
        goTopBtn?.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    /** CLEANUP on unmount */
    return () => {
      navElems.forEach((elem) =>
        elem?.removeEventListener("click", toggleNavbar)
      );
      navLinks.forEach((link) =>
        link?.removeEventListener("click", toggleNavbar)
      );
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);
  let navigate=useNavigate()
     let {islogged,setislogged}=useContext(appcontext)
     console.log(islogged)
     let nameRef=useRef("")
   let emailRef=useRef("")
   let phoneRef=useRef("")
   let messageRef=useRef("")
        let handlesubmit=(e)=>
        {
            e.preventDefault()
            
        axios.post(
  "https://flextripbackend.onrender.com/trip",
  {
    name: nameRef.current.value,
    email: emailRef.current.value,
    phone: phoneRef.current.value,
    message: messageRef.current.value,
  }
)
        .then((res)=>
        {
            // let narr=Object.entries(res.data).filter(([id,ele])=>emailRef.current.value==ele.email&&passwordRef.current.value==ele.password)
            console.log(res)
           if(res.data.message==="Your Trip Query has been submitted")
           {
            alert("Your Trip Query has been submitted")
            nameRef.current.value = "";
            emailRef.current.value = "";
            phoneRef.current.value = "";
            messageRef.current.value = "";
           }
           else
           {
            alert("wrong credentials")
           }
           
        })
        .catch((error)=>{console.log(error)})
        }

  return (
    <div id="top">
      {/* HEADER */}
      <header className="header" data-header>
        <div className="overlay" data-overlay></div>

        <div className="header-top">
          <div className="container">
            <a href="tel:+01123456790" className="helpline-box">
              <div className="icon-box">
                <IonIcon icon={callOutline} />
              </div>

              <div className="wrapper">
                <p className="helpline-title">For Further Inquires :</p>
                <p className="helpline-number">+01 (123) 4557 90</p>
              </div>
            </a>

            <a href="#" className="logo">
              <img src={myLogoWhite} alt="Tourly Logo" />
            </a>

            <div className="header-btn-group">
              <button className="search-btn" aria-label="Search">
               <IonIcon icon={search} />
              </button>

              <button className="nav-open-btn" aria-label="Open Menu" data-nav-open-btn>
                <IonIcon icon={menuOutline} />
              </button>
            </div>
          </div>
        </div>

        <div className="header-bottom">
          <div className="container">
            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <IonIcon icon={logoFacebook} />
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <IonIcon icon={logoTwitter} />
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <IonIcon icon={logoYoutube} />
                </a>
              </li>
            </ul>

            <nav className="navbar" data-navbar>
              <div className="navbar-top">
                <a href="#" className="logo">
                  <img src={myLogo} alt="Tourly Logo" />
                </a>

                <button className="nav-close-btn" aria-label="Close Menu" data-nav-close-btn>
                 <IonIcon icon={closeOutline} />
                </button>
              </div>

              <ul className="navbar-list">
                <li><a href="#home" className="navbar-link" data-nav-link>home</a></li>
                <li><a href="#tour-search" className="navbar-link" data-nav-link>plan my trip</a></li>
                <li><a href="#destination" className="navbar-link" data-nav-link>destination</a></li>
                <li><a href="#package" className="navbar-link" data-nav-link>packages</a></li>
                <li><button className="btn btn-primary" onClick={()=>{
      navigate("/dashboard");
    }}>dashboard</button></li>
                <li><a href="#contact" className="navbar-link" data-nav-link>contact us</a></li>
              </ul>
            </nav>

            <button className="btn btn-primary" onClick={()=>{if (islogged) {
      // Logout logic
      setislogged(false);  // call your logout function
    } else {
      navigate("/login");
    }}}>{islogged ? "Admin Logout" : "Admin Login"}</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main>
        <article>
          <section className="hero" id="home">
            <div className="container">
              <h2 className="h1 hero-title">SPORTS TRAVEL
PACKAGES FOR
GLOBAL EVENTS</h2>

              <p className="hero-text">
               Sports travel combines adventure, competition, and tourism, allowing fans and athletes to explore new places.
              </p>

              <div className="btn-group">
                <button className="btn btn-primary" onClick={() => {
  document.getElementById("tour-search").scrollIntoView({ behavior: "smooth" });
}}>Plan My Trip</button>
              </div>
            </div>
          </section>

          {/* TOUR SEARCH */}
          <section className="tour-search" id="tour-search">
           <h2>Plan My Trip</h2>
                <h3>3 Step Process</h3>
                <ol>
                  <li className="input-label">✅Choose your event.</li>
                  <li className="input-label">✅We arrange your travel tickets.</li>
                  <li className="input-label">✅Enjoy a thrilling sports experience.</li>
                </ol>
            <div className="container">
              <form className="tour-search-form" onSubmit={handlesubmit}>
                <div className="input-wrapper">
                  <label htmlFor="destination" className="input-label">Name*</label>
                  <input ref={nameRef} type="text" id="destination" required placeholder="Ram" className="input-field" />
                </div>

                <div className="input-wrapper">
                  <label htmlFor="people" className="input-label">Email*</label>
                  <input ref={emailRef} type="email" id="people" required placeholder="r@gmail.com" className="input-field" />
                </div>

                <div className="input-wrapper">
                  <label htmlFor="checkin" className="input-label">Phone*</label>
                  <input ref={phoneRef} type="number" id="checkin" required className="input-field" placeholder="1234567890"/>
                </div>

                <div className="input-wrapper">
                  <label htmlFor="checkout" className="input-label">Message*</label>
                  <input ref={messageRef} id="checkout" required className="input-field" placeholder="Query you wanna ask about event."/>
                </div>

                <button type="submit" className="btn btn-secondary">Submit</button>
              </form>
            </div>
          </section>

          {/* POPULAR */}
<section className="popular" id="destination">
  <div className="container">

    <p className="section-subtitle">Uncover place</p>
    <h2 className="h2 section-title">Popular destination</h2>

    <p className="section-text">
      Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum.
      Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.
    </p>

    <ul className="popular-list">

      {/* Card 1 */}
      <li>
        <div className="popular-card">
          <figure className="card-img">
            <img src={popular1} alt="San miguel, italy" loading="lazy" />
          </figure>

          <div className="card-content">
            <div className="card-rating">
              <IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={star} />
              <IonIcon icon={star} /><IonIcon icon={star} />
            </div>

            <p className="card-subtitle"><a href="#">Italy</a></p>
            <h3 className="h3 card-title"><a href="#">Winter Sports</a></h3>

            <p className="card-text">Fusce hic augue velit wisi ips quibusdam pariatur, iusto.</p>
          </div>
        </div>
      </li>

      {/* Card 2 */}
      <li>
        <div className="popular-card">
          <figure className="card-img">
            <img src={popular2} alt="Burj khalifa, dubai" loading="lazy" />
          </figure>

          <div className="card-content">
            <div className="card-rating">
              <IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={star} />
              <IonIcon icon={star} /><IonIcon icon={star} />
            </div>

            <p className="card-subtitle"><a href="#">Dubai</a></p>
            <h3 className="h3 card-title"><a href="#">Dubai Marathon</a></h3>

            <p className="card-text">Fusce hic augue velit wisi ips quibusdam pariatur, iusto.</p>
          </div>
        </div>
      </li>

      {/* Card 3 */}
      <li>
        <div className="popular-card">
          <figure className="card-img">
            <img src={popular3} alt="Kyoto temple, japan" loading="lazy" />
          </figure>

          <div className="card-content">
            <div className="card-rating">
              <IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={star} />
              <IonIcon icon={star} /><IonIcon icon={star} />
            </div>

            <p className="card-subtitle"><a href="#">Japan</a></p>
            <h3 className="h3 card-title"><a href="#">Asian Games</a></h3>

            <p className="card-text">Fusce hic augue velit wisi ips quibusdam pariatur, iusto.</p>
          </div>
        </div>
      </li>

    </ul>

    <button className="btn btn-primary">More destination</button>

  </div>
</section>


{/* PACKAGES */}
<section className="package" id="package">
  <div className="container">

    <p className="section-subtitle">Popular Packages</p>
    <h2 className="h2 section-title">Checkout Our Packages</h2>

    <p className="section-text">
      Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum.
      Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.
    </p>

    <ul className="package-list">

      {/* PACKAGE CARD 1 */}
      <li>
        <div className="package-card">

          <figure className="card-banner">
            <img src={packege1} alt="Experience The Great Holiday On Beach" loading="lazy" />
          </figure>

          <div className="card-content">
            <h3 className="h3 card-title">Experience The Great Holiday On Beach</h3>
            <p className="card-text">
              Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores,
              est aliquet porttitor! Eaque, cras, aspernatur.
            </p>

            <ul className="card-meta-list">
              <li className="card-meta-item">
                <div className="meta-box">
                  <IonIcon icon={time} /><p className="text">7D/6N</p>
                </div>
              </li>

              <li className="card-meta-item">
                <div className="meta-box">
                  <IonIcon icon={people} /><p className="text">pax: 10</p>
                </div>
              </li>

              <li className="card-meta-item">
                <div className="meta-box">
                  <IonIcon icon={location} /><p className="text">Malaysia</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="card-price">
            <div className="wrapper">
              <p className="reviews">(25 reviews)</p>
              <div className="card-rating">
                <IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={star} />
                <IonIcon icon={star} /><IonIcon icon={star} />
              </div>
            </div>

            <p className="price">$750 <span>/ per person</span></p>
            <button className="btn btn-secondary" onClick={() => {
  document.getElementById("tour-search").scrollIntoView({ behavior: "smooth" });
}}>Plan My Trip</button>
          </div>

        </div>
      </li>

      {/* PACKAGE CARD 2 */}
      <li>
        <div className="package-card">
          <figure className="card-banner">
            <img src={packege2} alt="Summer Holiday" loading="lazy" />
          </figure>

          <div className="card-content">
            <h3 className="h3 card-title">Summer Holiday To The Oxolotan River</h3>
            <p className="card-text">
              Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores,
              est aliquet porttitor! Eaque, cras, aspernatur.
            </p>

            <ul className="card-meta-list">
              <li className="card-meta-item">
                <div className="meta-box">
                  <IonIcon icon={time} /><p className="text">7D/6N</p>
                </div>
              </li>

              <li className="card-meta-item">
                <div className="meta-box">
                  <IonIcon icon={people} /><p className="text">pax: 10</p>
                </div>
              </li>

              <li className="card-meta-item">
                <div className="meta-box">
                  <IonIcon icon={location} /><p className="text">Malaysia</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="card-price">
            <div className="wrapper">
              <p className="reviews">(20 reviews)</p>
              <div className="card-rating">
                <IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={star} />
                <IonIcon icon={star} /><IonIcon icon={star} />
              </div>
            </div>

            <p className="price">$520 <span>/ per person</span></p>
            <button className="btn btn-secondary" onClick={() => {
  document.getElementById("tour-search").scrollIntoView({ behavior: "smooth" });
}}>Plan My Trip</button>
          </div>

        </div>
      </li>

      {/* PACKAGE CARD 3 */}
      <li>
        <div className="package-card">
          <figure className="card-banner">
            <img src={packege3} alt="Santorini" loading="lazy" />
          </figure>

          <div className="card-content">
            <h3 className="h3 card-title">Santorini Island's Weekend Vacation</h3>
            <p className="card-text">
              Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores,
              est aliquet porttitor! Eaque, cras, aspernatur.
            </p>

            <ul className="card-meta-list">
              <li className="card-meta-item">
                <div className="meta-box">
                  <IonIcon icon={time} /><p className="text">7D/6N</p>
                </div>
              </li>

              <li className="card-meta-item">
                <div className="meta-box">
                  <IonIcon icon={people} /><p className="text">pax: 10</p>
                </div>
              </li>

              <li className="card-meta-item">
                <div className="meta-box">
                  <IonIcon icon={location} /><p className="text">Malaysia</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="card-price">
            <div className="wrapper">
              <p className="reviews">(40 reviews)</p>
              <div className="card-rating">
                <IonIcon icon={time} /><IonIcon icon={time} /><IonIcon icon={time} />
                <IonIcon icon={time} /><IonIcon icon={time} />
              </div>
            </div>

            <p className="price">$660 <span>/ per person</span></p>
            <button className="btn btn-secondary" onClick={() => {
  document.getElementById("tour-search").scrollIntoView({ behavior: "smooth" });
}}>Plan My Trip</button>
          </div>

        </div>
      </li>

    </ul>

    <button className="btn btn-primary">View All Packages</button>

  </div>
</section>


{/* GALLERY */}
<section className="gallery" id="gallery">
  <div className="container">

    <p className="section-subtitle">Photo Gallery</p>
    <h2 className="h2 section-title">Photo's From Travellers</h2>

    <p className="section-text">
      Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo,
      rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.
    </p>

    <ul className="gallery-list">
      <li className="gallery-item"><img src={gallery1} alt="Gallery image" /></li>
      <li className="gallery-item"><img src={gallery2} alt="Gallery image" /></li>
      <li className="gallery-item"><img src={gallery3} alt="Gallery image" /></li>
      <li className="gallery-item"><img src={gallery4} alt="Gallery image" /></li>
      <li className="gallery-item"><img src={gallery5} alt="Gallery image" /></li>
    </ul>
  </div>
</section>


{/* CTA */}
<section className="cta" id="contact">
  <div className="container">

    <div className="cta-content">
      <p className="section-subtitle">Call To Action</p>
      <h2 className="h2 section-title">
        Ready For Unforgettable Travel. Remember Us!
      </h2>
      <p className="section-text">
        Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo,
        rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.
      </p>
    </div>

    <button className="btn btn-secondary">Contact Us !</button>

  </div>
</section>


{/* FOOTER */}
<footer className="footer">
  <div className="footer-top">
    <div className="container">

      <div className="footer-brand">
        <a href="#" className="logo">
          <img src={myLogoWhite} alt="Tourly logo" />
        </a>
        <p className="footer-text">
          Urna ratione ante harum provident, eleifend, vulputate molestiae proin fringilla.
        </p>
      </div>

      <div className="footer-contact">
        <h4 className="contact-title">Contact Us</h4>
        <p className="contact-text">Feel free to contact and reach us !!</p>

        <ul>
          <li className="contact-item">
            <IonIcon icon={callOutline} />
            <a href="tel:+01123456790" className="contact-link">+01 (123) 4567 90</a>
          </li>

          <li className="contact-item">
            <IonIcon icon={mailOutline} />
            <a href="mailto:info.tourly.com" className="contact-link">info.tourly.com</a>
          </li>

          <li className="contact-item">
            <IonIcon icon={locationOutline} />
            <address>3146 Koontz, California</address>
          </li>
        </ul>
      </div>

      <div className="footer-form">
        <p className="form-text">
          Subscribe our newsletter for more update & news !!
        </p>

        <form className="form-wrapper">
          <input type="email" className="input-field" placeholder="Enter Your Email" required />
          <button type="submit" className="btn btn-secondary">Subscribe</button>
        </form>
      </div>

    </div>
  </div>

  <div className="footer-bottom">
    <div className="container">
      <p className="copyright">
        © 2025 <a href="#">Flex Trip</a>. All rights reserved
      </p>

      <ul className="footer-bottom-list">
        <li><a href="#" className="footer-bottom-link">Privacy Policy</a></li>
        <li><a href="#" className="footer-bottom-link">Terms & Condition</a></li>
        <li><a href="#" className="footer-bottom-link">FAQ</a></li>
      </ul>
    </div>
  </div>
</footer>


{/* GO TOP BUTTON */}
<a href="#top" className="go-top" data-go-top>
  <IonIcon icon={chevronUpOutline} />
</a>


        </article>
      </main>
    </div>
  );
}

export default LandingPage;
