import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Here’s my
              <span className="purple"> STORY </span>
            </h1>
            <p className="home-about-body">
              I fell in
              <i>
                <b className="purple"> love </b>
              </i>{" "}
              with programming and I have at least learnt something, I think… 💁‍♀️
              <br />
              <br />
              I’m a passionate Full-Stack Developer with a knack for solving
              complex problems and building impactful digital solutions✨. I
              specialize in{" "}
              <i>
                <b className="purple">
                  PHP, Java, PowerBI and database management with MySQL and
                  PostgreSQL.{" "}
                </b>
              </i>
              <br />
              <br />I thrive on learning new skills—whether it’s mastering the
              latest tech tools or cracking the
              <i>
                <b className="purple"> Problem of the Day on GeeksforGeeks </b>
              </i>
              (yes, I actually enjoy it!). 🚀 When I’m not coding, you’ll
              probably find me exploring tech communities or sharing my
              knowledge with fellow developers.
              <br />
              <br />
              My motto?
              <i>
                <b className="purple">
                  “Code with passion, edit with creativity, and learn with
                  curiosity!”
                </b>
              </i>
              <br />
              <br />
              Looking forward to collaborating and creating something amazing
              together! 🌟
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/lavanya0115"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/lavanyam55/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
