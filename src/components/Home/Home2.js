import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m Aashu Tyagi, a passionate UI/UX Designer and Front-End Developer from 
              Ghaziabad. I specialize in crafting user-friendly and visually engaging 
              digital experiences for web and mobile platforms. My expertise includes 
              Figma, HTML, CSS, JavaScript, React.js, and Shopify — tools that help me 
              bring ideas to life with creativity and precision.
              <br/>
              I believe great design is about solving problems and creating 
              intuitive experiences that connect users with products seamlessly. 
              With a strong foundation in both design thinking and front-end development, 
              I strive to build solutions that are not only functional but also aesthetically 
              refined.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Figma, HTML, CSS, JavaScript, React.js, and Shopify{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications{" "}
                </b>
              </i>              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
