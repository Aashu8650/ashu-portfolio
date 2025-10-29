import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           Hi everyone! 👋 I’m <span className="purple">Aashu Tyagi</span>{" "}
            from <span className="purple">Ghaziabad, India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">UI/UX Designer and Front-End Developer</span> passionate about creating 
            clean, user-friendly, and visually engaging digital experiences.{" "}
            <br />I hold an Bachelor’s degree in{" "}
            <span className="purple">Computer Applications</span> from{" "}
            <span className="purple">Chaudhary Charan Singh University</span>.
            <br />
            <br />
            Outside of design and coding, I love activities that keep me inspired and curious:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🧭
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Design Trends & Tools 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Collecting Coins 🪙
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Design is not just what it looks like and feels like — design is how it works."{" "}
          </p>
          <footer className="blockquote-footer">Ashu Tyagi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
