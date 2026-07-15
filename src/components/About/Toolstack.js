import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { SiOpenai } from 'react-icons/si';
import macOs from '../../Assets/TechIcons/Apple MacOSX.svg';
import chrome from '../../Assets/TechIcons/Google Chrome.svg';
import Postman from '../../Assets/TechIcons/Postman.svg';
import Git from '../../Assets/TechIcons/Git.svg';
import cursor from '../../Assets/TechIcons/Cursor.svg';
import claude from '../../Assets/TechIcons/Claude.svg';

function Toolstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <img
          src={macOs}
          alt="macOs"
          className="tech-icon-images"
        />
        <div className="tech-icons-text">Mac Os</div>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons ">
        <img
          src={chrome}
          alt="Chrome"
          className="tech-icon-images"
        />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>

      <Col
        xs={4}
        md={2}
        className="tech-icons ">
        <img
          src={cursor}
          alt="Cursor"
          className="tech-icon-images"
        />
        <div className="tech-icons-text">Cursor</div>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons ">
        <SiOpenai fontSize={'24px'} />
        <div className="tech-icons-text">ChatGPT</div>
      </Col>

      <Col
        xs={4}
        md={2}
        className="tech-icons ">
        <img
          src={claude}
          alt="Claude"
          className="tech-icon-images"
        />
        <div className="tech-icons-text">Claude</div>
      </Col>

      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <img
          src={Postman}
          alt="Postman"
        />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons">
        <img
          src={Git}
          alt="git"
        />
        <div className="tech-icons-text">Git</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
