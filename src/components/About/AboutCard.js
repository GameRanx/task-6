import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="yellow">Sajal Sahu </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br /> I am a 3rd year student pursuing an Btech in CSE Core in VIT Vellore.

            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Eating
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Hope is the ultimate destiny"{" "}
          </p>
          <footer className="blockquote-footer">Sajal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
