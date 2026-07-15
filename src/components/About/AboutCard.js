import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi everyone! I’m <span className="purple">Denys Bezverkhyi</span> from{' '}
            <span className="purple">Zaporizhzhia, Ukraine</span>.
            <br />
            I’m a highly-skilled <span className="purple">Full-Stack Developer</span>. I have{' '}
            <span className="purple">4+ years</span> of commercial background working with{' '}
            <span className="purple">
              HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React.js, Redux, Next.js, Vue.js / Nuxt,
              Node.js, Express.js
            </span>{' '}
            and <span className="purple">React Native with Expo</span> for mobile. I have experience
            maintaining a full development lifecycle, from planning to a ready-to-use app. I have
            knowledge of <span className="purple">OOP and OOD principles</span>, design patterns,{' '}
            <span className="purple">REST API</span> and third-party APIs. Working with{' '}
            <span className="purple">
              MongoDB, MySQL / PostgreSQL, Supabase, Firebase / Firestore
            </span>
            .
            <br />
            <br />
            I pride myself on writing clean, scalable, and maintainable code while keeping strong
            attention to detail. I love working in ambitious teams where ideas are shared openly,
            communication is smooth, and everyone grows together, especially those who don’t mind
            integrating new technologies and staying up to date with the latest tools and practices. I
            actively use <span className="purple">AI tools</span> to improve my performance and deliver
            better quality of code.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Walking with my dog 🐕
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing table tennis 🏓
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking 🥾
            </li>
            <li className="about-activity">
              <ImPointRight /> Cycling 🚴
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing guitar 🎸
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>"Strive to build things that make a difference!" </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
