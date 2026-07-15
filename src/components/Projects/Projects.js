import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';

import TIM from '../../Assets/Projects/TIM.png';
import SAVR from '../../Assets/Projects/SAVR.png';
import HUB from '../../Assets/Projects/HUB.png';

function Projects() {
  return (
    <Container
      fluid
      className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col
            md={4}
            className="project-card">
            <ProjectCard
              imgPath={TIM}
              isBlog={false}
              title="TIM"
              description="Personal AI-powered assistant and lightweight CRM to manage contacts, calendar events, and meeting preparation, built with React Native (Expo), TypeScript, and Firebase. Features an AI chat assistant, voice input with text-to-speech, smart contact notes, push notifications, multi-language support, and in-app subscriptions."
              ghLink={null}
              demoLink="https://apps.apple.com/ua/app/tim-ultimate/id6748257341"
            />
          </Col>

          <Col
            md={4}
            className="project-card">
            <ProjectCard
              imgPath={SAVR}
              isBlog={false}
              title="SAVR"
              description="Group savings mobile application built with React Native, enabling users to create shared savings goals, track contributions, and collaborate in real time. Contributed to the development of group fund management features, comment functionality, intuitive user flows, and a seamless mobile experience with a strong focus on performance and usability."
              ghLink={null}
              demoLink="https://apps.apple.com/ua/app/savr/id1441419393"
            />
          </Col>

          <Col
            md={4}
            className="project-card">
            <ProjectCard
              imgPath={HUB}
              isBlog={false}
              title="Habit Tracker"
              description="Cross-platform habit tracking mobile application built with React Native (Expo), TypeScript, and Supabase. Features multi-provider authentication (Email, Google, Apple, Facebook), customizable daily and weekly habits, progress tracking, push notifications, offline data persistence with AsyncStorage, and a clean, user-friendly interface focused on improving personal productivity."
              ghLink={null}
              demoLink="https://github.com/deceser/habitHUB-RN-APP"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
