import React from 'react';
import "./Services.css";
import {BiCheck} from "react-icons/bi"

function services() {
  return (
    <section id="service">
      <h5> What I offer</h5>
      <h2> Services</h2>
      <div className="container services_container">
        <article className="service">
        <div className="service_head">
        <h3>UI/UX Design</h3>
        </div>
        <ul className="service_list">
          <li>
            <BiCheck className="service_list-icon" />
            <p>
            Lorem, ipsum dolor sit amet consectetur elit.
            </p>
          </li> 
          <li>
            <BiCheck className="service_list-icon" />
            <p>
            Lorem, ipsum dolor sit amet consectetur elit.
            </p>
          </li>
          <li>
            <BiCheck className="service_list-icon" />
            <p>
            Lorem, ipsum dolor sit amet consectetur elit.
            </p>
          </li>
          <li>
            <BiCheck className="service_list-icon" />
            <p>
            Lorem, ipsum dolor sit amet consectetur elit.
            </p>
          </li>
          <li>
            <BiCheck className="service_list-icon" />
            <p>
            Lorem, ipsum dolor sit amet consectetur elit.
            </p>
          </li>
          <li>
            <BiCheck className="service_list-icon" />
            <p>
            Lorem, ipsum dolor sit amet consectetur elit.
            </p>
          </li>
          <li>
            <BiCheck className="service_list-icon" />
            <p>
            Lorem, ipsum dolor sit amet consectetur elit.
            </p>
          </li>
           </ul>
        </article>

       {/* END OF UI/UX */} 

       <article className="service">
        <div className="service_head">
        <h3>wEB DEVELOPMENT</h3>
        </div>
        <ul className="service_list">
          <li>
            <BiCheck className="service_list-icon" />
            <p>
            Lorem, ipsum dolor sit amet consectetur elit.
            </p>
          </li> 
          <li>
            <BiCheck className="service_list-icon" />
            <p>
            Lorem, ipsum dolor sit amet consectetur elit.
            </p>
          </li>
          <li>
            <BiCheck className="service_list-icon" />
            <p>
            Lorem, ipsum dolor sit amet consectetur elit.
            </p>
          </li>
          <li>
            <BiCheck className="service_list-icon" />
            <p>
            Lorem, ipsum dolor sit amet consectetur elit.
            </p>
          </li>
          <li>
            <BiCheck className="service_list-icon" />
            <p>
            Lorem, ipsum dolor sit amet consectetur elit.
            </p>
          </li>
          <li>
            <BiCheck className="service_list-icon" />
            <p>
            Lorem, ipsum dolor sit amet consectetur elit.
            </p>
          </li>
          <li>
            <BiCheck className="service_list-icon" />
            <p>
            Lorem, ipsum dolor sit amet consectetur elit.
            </p>
          </li>
          <li>
            <BiCheck className="service_list-icon" />
            <p>
            Lorem, ipsum dolor sit amet consectetur elit.
            </p>
          </li>
           </ul>
        </article>

             {/* WEB DEVELOPMENT*/} 


        <article className="service">
        <div className="service_head">
        <h3>Content Creation</h3>
        </div>
        <ul className="service_list">
          <li>
            <BiCheck className="service_list-icon" />
            <p>
            Lorem, ipsum dolor sit amet consectetur elit.
            </p>
          </li> 
          <li>
            <BiCheck className="service_list-icon" />
            <p>
            Lorem, ipsum dolor sit amet consectetur elit.
            </p>
          </li>
          <li>
            <BiCheck className="service_list-icon" />
            <p>
            Lorem, ipsum dolor sit amet consectetur elit.
            </p>
          </li>
          <li>
            <BiCheck className="service_list-icon" />
            <p>
            Lorem, ipsum dolor sit amet consectetur elit.
            </p>
          </li>
          <li>
            <BiCheck className="service_list-icon" />
            <p>
            Lorem, ipsum dolor sit amet consectetur elit.
            </p>
          </li>
          <li>
            <BiCheck className="service_list-icon" />
            <p>
            Lorem, ipsum dolor sit amet consectetur elit.
            </p>
          </li>
          <li>
            <BiCheck className="service_list-icon" />
            <p>
            Lorem, ipsum dolor sit amet consectetur elit.
            </p>
          </li>
           </ul>
        </article>
         {/* END CONTENT CREATION*/} 
      </div>
    </section>
  )
}

export default services
