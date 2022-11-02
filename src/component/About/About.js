import React from "react";
import user from "../user.json";
import "./about.css";
import List from "../List/List";

export default function About() {
  return (
    <section className="main-dec">
      <div className="resume">
        <div className="container">
          <div className="resume__block">
            <h1 className="contact-info__header">
              {user.firstName} {user.lastName}
            </h1>
            <h3 className="contact-info__sub-header">{user.futureWork}</h3>
          </div>
        </div>

        <div className="container">
          <div className="resume__block">
            <div className="intro">
              <div className="intro__icon-wrapper">
                <svg
                  className="intro__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                </svg>
              </div>
              <p className="intro_text">{user.shortInfo}</p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="resume__block">
            <div className="main-info">
              <h3 className="experiences__header">Work Experience</h3>
              <ul className="experiences__job">
                {user.lastWorkingExperience.map((item) => {
                  return (
                    <li key={item} className="experiences__company-header-name">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="resume__block">
            <div className="list">
              <h3 className="list__header">Hobbies</h3>
              <div className="list_wrapp list_center">
                <div className="list_left">
                  <List item={user.hobbies} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="resume__block">
            <div className="list">
              <h3 className="list__header">Skills</h3>
              <div className="list_wrapp">
                <div className="list_left">
                  <h2>Tech Skills:</h2>
                  <List item={user.techSkils} />
                </div>
                <div className="list_right">
                  <h2>Soft Skills:</h2>
                  <List item={user.softSkill} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
