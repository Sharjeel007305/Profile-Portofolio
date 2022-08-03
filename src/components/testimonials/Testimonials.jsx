import React from 'react';
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"

function testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_container">
        <article className="testimonial">
          <div className="client_avatar">
          <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client_name">Ernest Achiever</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet voluptatum voluptate 
            veritatis cumque! Numquam, nostrum blanditiis explicabo recusandae 
            libero officia nobis iusto incidunt ipsam labore commodi pariatur temporibus nemo rerum.
          </small>
        </article>
        <article className="testimonial">
          <div className="client_avatar">
          <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client_name">Ernest Achiever</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet voluptatum voluptate 
            veritatis cumque! Numquam, nostrum blanditiis explicabo recusandae 
            libero officia nobis iusto incidunt ipsam labore commodi pariatur temporibus nemo rerum.
          </small>
        </article>
        <article className="testimonial">
          <div className="client_avatar">
          <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client_name">Ernest Achiever</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet voluptatum voluptate 
            veritatis cumque! Numquam, nostrum blanditiis explicabo recusandae 
            libero officia nobis iusto incidunt ipsam labore commodi pariatur temporibus nemo rerum.
          </small>
        </article>
        <article className="testimonial">
          <div className="client_avatar">
          <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client_name">Ernest Achiever</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet voluptatum voluptate 
            veritatis cumque! Numquam, nostrum blanditiis explicabo recusandae 
            libero officia nobis iusto incidunt ipsam labore commodi pariatur temporibus nemo rerum.
          </small>
        </article>
      </div>
    </section>
  )
}

export default testimonials
