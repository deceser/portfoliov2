import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { SiVuedotjs, SiHtml5, SiCss3, SiExpress, SiNestjs, SiSupabase, SiFlutter, SiTelegram } from 'react-icons/si';
import { TbBrandReactNative, TbBrandCSharp } from 'react-icons/tb';
import Javascript from '../../Assets/TechIcons/Javascript.svg';
import Typescript from '../../Assets/TechIcons/Typescript.svg';
import ReactIcon from '../../Assets/TechIcons/React.svg';
import Next from '../../Assets/TechIcons/Next.svg';
import Tailwind from '../../Assets/TechIcons/Tailwind.svg';
import MUI from '../../Assets/TechIcons/MUI.svg';
import Node from '../../Assets/TechIcons/Node.svg';
import Mongo from '../../Assets/TechIcons/Mongo.svg';
import SQL from '../../Assets/TechIcons/SQL.svg';
import Firebase from '../../Assets/TechIcons/Firebase.svg';
import Redux from '../../Assets/TechIcons/Redux.svg';
import Postman from '../../Assets/TechIcons/Postman.svg';
import Git from '../../Assets/TechIcons/Git.svg';
import Python from '../../Assets/TechIcons/Python.svg';

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <img
          src={Javascript}
          alt="javascript"
        />
        <div className="tech-icons-text">JavaScript</div>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <img
          src={Typescript}
          alt="typescript"
        />
        <div className="tech-icons-text">TypeScript</div>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <img
          src={ReactIcon}
          alt="react"
        />
        <div className="tech-icons-text">React</div>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <img
          src={Next}
          alt="next"
        />
        <div className="tech-icons-text">Next.js</div>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <TbBrandReactNative fontSize={'24px'} />
        <div className="tech-icons-text">React Native</div>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <SiVuedotjs fontSize={'24px'} />
        <div className="tech-icons-text">Vue 2/3</div>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <SiHtml5 fontSize={'24px'} />
        <div className="tech-icons-text">HTML5</div>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <SiCss3 fontSize={'24px'} />
        <div className="tech-icons-text">CSS</div>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <img
          src={Tailwind}
          alt="tailwind"
        />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <img
          src={MUI}
          alt="mui"
        />
        <div className="tech-icons-text">Material UI</div>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <img
          src={Node}
          alt="node"
        />
        <div className="tech-icons-text">Node.js</div>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <SiExpress fontSize={'24px'} />
        <div className="tech-icons-text">Express</div>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <SiNestjs fontSize={'24px'} />
        <div className="tech-icons-text">Nest.js</div>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <img
          src={Mongo}
          alt="mongoDb"
        />
        <div className="tech-icons-text">MongoDB</div>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <img
          src={SQL}
          alt="SQL"
        />
        <div className="tech-icons-text">SQL</div>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <img
          src={Firebase}
          alt="firebase"
        />
        <div className="tech-icons-text">Firebase</div>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <SiSupabase fontSize={'24px'} />
        <div className="tech-icons-text">Supabase</div>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <img
          src={Redux}
          alt="redux"
        />
        <div className="tech-icons-text">Redux</div>
      </Col>

      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <img
          src={Python}
          alt="Python"
        />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <TbBrandCSharp fontSize={'24px'} />
        <div className="tech-icons-text">C#</div>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <SiFlutter fontSize={'24px'} />
        <div className="tech-icons-text">Flutter</div>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <SiTelegram fontSize={'24px'} />
        <div className="tech-icons-text">Telegram Bot</div>
      </Col>
    </Row>
  );
}

export default Techstack;
