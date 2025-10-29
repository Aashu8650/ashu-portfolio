import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Movie Explorer – Discover Movies and Series with a Modern UI"
              description="Personal Chat Room Movie Explorer is a sleek 
              and responsive web application that lets users search, explore, 
              and discover movies and TV series with ease. Powered by the OMDb API, 
              this project is built using Next.js 14, TypeScript, Tailwind CSS, and 
              Framer Motion to deliver a fast, interactive, and visually appealing 
              user experience. Workspace to share resources and hangout with friends 
              build with react.js, Material-UI, and Firebase. Have features which allows 
              user for realtime messaging, image sharing as well as supports reactions on 
              messages."
              ghLink="https://github.com/Aashu8650/movie-app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
