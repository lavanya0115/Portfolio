import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hms from "../../Assets/Projects/HMS.png";
import medicall from "../../Assets/Projects/Medicall.png";
import hr from "../../Assets/Projects/hr onboard.png";
import reallist from "../../Assets/Projects/reallist.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on and contributed to recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hms}
              isBlog={false}
              title="Divine"
              description="Divine is a comprehensive Restaurant Management System with full CRM capabilities.It allows users to manage and view detailed menu information.
The system handles orders, reservations, and customer feedback efficiently.It offers real-time insights into sales, inventory, and staff performance.Divine enhances customer engagement through loyalty programs and personalized offers"
              ghLink="https://github.com/lavanya0115/HMS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medicall}
              isBlog={false}
              title="Medicall 1 to 1 Meet"
              description="Medicall One-to-One Meet is a networking event for healthcare professionals and industry leaders. It facilitates direct interactions between healthcare providers, suppliers, and innovators. The event offers opportunities for business collaborations and partnerships.
Participants can showcase their products, services, and solutions to potential clients. Medicall One-to-One Meet fosters industry growth through meaningful connections and knowledge sharing"
              ghLink="https://crm.medicall.in/login"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hr}
              isBlog={false}
              title="HR Onboarding"
              description="HR Onboarding is a comprehensive system for managing the employee onboarding process. It facilitates candidate registration, profile submissions, and interview assessments.The system allows HR to track application statuses and manage offers.
It includes features for document uploads, communication, and offer letter management.HR Onboarding streamlines the hiring process and improves candidate experience."
              ghLink="https://careers.kauverykonnect.com/login"
            // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reallist}
              isBlog={false}
              title="Reallist"
              description="Transform your paper forms into mobile applications
Create mobile forms effortlessly with a drag-and-drop user interface. Simply drag widgets to capture photos, geolocation, scan barcodes, QR codes, and more. Enhance forms with validations and conditional logic to manage the visibility of form widgets."
              ghLink="https://app.reallist.in/login"
            // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
