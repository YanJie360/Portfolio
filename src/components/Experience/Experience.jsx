import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCards from "./ExperienceCards";
import Particle from "../Particle";
import np_logo from "../../Assets/Experience/img-logo.png";
import sentinel from "../../Assets/Experience/sentinel.png";
import dart from "../../Assets/Experience/dart.png";
import ncc from "../../Assets/Experience/ncc.png";
import pathlight from "../../Assets/Experience/PATHLIGHT.png";
import hihs from "../../Assets/Experience/hihs.png";
import foundations from "../../Assets/Experience/foundations.pdf";
import literacy from "../../Assets/Experience/literacy.pdf";
import csharp from "../../Assets/Experience/csharp.pdf";
import esm from "../../Assets/Experience/esm.pdf";
import luma from "../../Assets/Experience/luma.png";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="main-name">Education</strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ExperienceCards
              imgPath={np_logo}
              isBlog={false}
              title="Diploma in Cybersecurity and Digital Forensics"
              duration="2024 - 2027 (Expected)"
              description="Diploma Plus Programme in Advanced Computing Mathematics, Specialisation Elective in Cloud Security"
              fullText={`Studied theoretical and practical topics such as network security, ethical hacking, digital forensics, web application pen-testing, and more.`}
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCards
              imgPath={hihs}
              isBlog={false}
              title="GCE 'O' Levels - Holy Innocents' High School"
              duration="2020 - 2023"
              description="Graducated with L1R5 nett 8 points and L1R4 nett 6 points, including A1 for Additional Mathematics and Chinese Language."
              fullText={`Student Leader in the Student Affairs Committe, Upper Secondary CCA Excutive Committee member of HIHS-NCC`}
            />
          </Col>
        </Row>

        <h1 className="project-heading">
          My <strong className="main-name">Work</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ExperienceCards
              imgPath={dart}
              isBlog={false}
              title="Sentinel Programme Trainer"
              duration="2025 - Current"
              fullText={`Taught a network forensics workshop, sharing knowledge on cybersecurity fundamentals and practical skills to prepare them for real-world challenges.`}
            />
          </Col>
        </Row>
        
        <h1 className="project-heading">
          My <strong className="main-name">Certifications</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ExperienceCards
              imgPath={esm}
              isBlog={false}
              title="Enterprise Security Management"
              duration="2025"
              description="Completed the 'Enterprise Security Management' course by Palo Alto Networks Cybersecurity Academy, covering key concepts in enterprise security management."
              fullText={`Learned about security policies, threat prevention, and network security best practices through hands-on labs and real-world scenarios.`}
            />
          </Col>
          <Col md={4} className="project-card">
            <ExperienceCards
              imgPath={foundations}
              isBlog={false}
              title="Foundations in AI"
              duration="2025"
              description="Completed the 'Foundations in AI' course by AI Singapore, covering AI concepts, machine learning, and ethical considerations."
              fullText={`Gained practical experience through hands-on projects and assignments, applying AI techniques to real-world scenarios.`}
            />
          </Col>
          <Col md={4} className="project-card">
            <ExperienceCards
              imgPath={literacy}
              isBlog={false}
              title="AI Literacy"
              duration="2024"
              description="Completed the 'AI Literacy' course by AI Singapore, providing a comprehensive overview of AI technologies and their applications."
              fullText={`Learned about AI concepts, tools, and techniques, enabling informed decision-making in AI-related projects and initiatives.`}
            />
          </Col>
          <Col md={4} className="project-card">
            <ExperienceCards
              imgPath={csharp}
              isBlog={false}
              title="C# Programming"
              duration="2025"
              description="Completed the 'Foundational C# with Microsoft' course by freeCodeCamp. Covers C# programming basics, object-oriented programming, and software development principles."
              fullText={`Gained practical experience through coding exercises and projects, developing skills in object-oriented programming and software development using C#.`}
            />
          </Col>
          <Col md={4} className="project-card">
            <ExperienceCards
              imgPath={luma}
              isBlog={false}
              title="LUMA Foundation Course"
              duration="2025"
              description="Completed the 'LUMA Foundation Course', learning human-centered design principles and methodologies to foster innovation and creativity."
              fullText={`Acquired skills in problem-solving, ideation, and prototyping, enabling effective collaboration and design thinking in various projects.`}
            />
          </Col>
        </Row>

        <h1 className="project-heading">
          My <strong className="main-name">Co-Curriculars</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ExperienceCards
              imgPath={ncc} 
              isBlog={false}
              title="Cadet Officer"
              duration="2023 - Current"
              description="Served as a Cadet Officer in the National Cadet Corps (NCC), leading and mentoring junior cadets in various training sessions and courses on a school and HQ level."
              fullText={`Promoted to Cadet 2nd Lieutenant and appointed Officer-Commanding in school unit, overseeing unit activities and spearheaded camps and training sessions for cadets.`}
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ExperienceCards
              imgPath={sentinel}
              isBlog={false}
              title="MINDEF Sentinel Programme"
              duration="2023 - 2025"
              description="Graduated from this prestigious extracurricular programme aimed at equipping youths with cybersecurity and digital skills."
              fullText={`Participate in Year 5 through Year 6 of the programme, engaging in hands-on training, workshops in topics such as advanced python programming and network security. Played in competitions to enhance cybersecurity knowledge and skills.`}
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCards
              imgPath={pathlight}
              isBlog={false}
              title="NP-ICT x PathLight School Service-Learning Project"
              duration="2025"
              description="Our class at Ngee Ann Polytechnic hosted students from Pathlight School for a Service-Learning project, designing mini workshops and a campus tour to introduce them to ICT and cybersecurity in a fun and accessible way."
              fullText={`As part of the Content Team, I created and taught a session on Google Dorking— showing how simple search techniques can make online research safer and more effective. On the day, I also helped with setup, guided students through activities, and shared stories as a campus tour guide.`}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;