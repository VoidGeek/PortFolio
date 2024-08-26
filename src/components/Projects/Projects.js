import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Tours from "../../Assets/Projects/Tours.png";
import greivance from "../../Assets/Projects/greivance.jpeg";
import Kulkunda from "../../Assets/Projects/Kulkunda.png";
import Kali from "../../Assets/Projects/kali.png";
import Human from "../../Assets/Projects/Human.png";

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
              imgPath={Kulkunda}
              isBlog={false}
              title="Kulkunda Temple Official website"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/isecoder"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={greivance}
              isBlog={false}
              title="Greivance management system"
              description="Online platform for adressing the issues of public directly by the government built with react.js."
              ghLink="https://github.com/NITHIN3387/grievance-management-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tours}
              isBlog={false}
              title="Tours & Travels Website"
              description="Tours and Travels website used to book the trips for you and your family and explore this world usig React Js"
              ghLink="https://github.com/VijayendraNayak/Tours-Travels.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Kali}
              isBlog={false}
              title="Network Instrusion Detection System"
              description="A network intrusion detection system (NIDS) monitors network traffic for suspicious activity and potential threats, alerting administrators to security breaches."
              ghLink="https://github.com/VijayendraNayak/mini-project.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Human}
              isBlog={false}
              title="3D Virtual-Try-On"
              description="A 3D virtual try-on allows users to visualize and try on products, such as clothing or accessories, in a virtual environment using augmented reality technology."
              ghLink="https://github.com/VijayendraNayak/3D-Virtual-Try-On.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
