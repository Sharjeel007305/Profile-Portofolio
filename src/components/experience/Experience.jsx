import React from 'react';
import "./Experience.css";
import {BsPatchCheckFill} from "react-icons/bs"

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2> My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
        <h3>Frontend Developement</h3>
        <div className="experience_content">

        <article className="experience_details">
          <BsPatchCheckFill />
          <h4>HTML</h4>
          <small className="text-light">Experienced</small>
        </article>

        <article className="experience_details">
          <BsPatchCheckFill />
          <h4>CSS</h4>
          <small className="text-light">Intermediate</small>
        </article>

        <article className="experience_details">
          <BsPatchCheckFill />
          <h4>Bootstrap</h4>
          <small className="text-light">Experienced</small>
        </article>

        <article className="experience_details">
          <BsPatchCheckFill />
          <h4>Tailwind</h4>
          <small className="text-light">beginner</small>
        </article>
        <article className="experience_details">
          <BsPatchCheckFill />
          <h4>React</h4>
          <small className="text-light">Experienced</small>
        </article>
        </div>
        </div>
        {/*END OF FRONTEND */}
        <div className="experience_backend">
        <h3>Backend Developement</h3>
        <div className="experience_content">

        <article className="experience_details">
          <BsPatchCheckFill />
          <h4>Node Js</h4>
          <small className="text-light">Intermediate</small>
        </article>

        <article className="experience_details">
          <BsPatchCheckFill />
          <h4>MonogoDB</h4>
          <small className="text-light">Intermediate</small>
        </article>

        <article className="experience_details">
          <BsPatchCheckFill />
          <h4>Expess</h4>
          <small className="text-light">Intermediate</small>
        </article>

        <article className="experience_details">
          <BsPatchCheckFill />
          <h4>My SQL</h4>
          <small className="text-light">beginner</small>
        </article>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
