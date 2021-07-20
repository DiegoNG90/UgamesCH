import './style.css'
import {Row, Col} from 'react-bootstrap'
import logo from './logo512.png';

const Footer = () => {
    return (
      <footer className="footer">
        <Row className="fila">
          <h3 className="footer-paragraph">
            {' '}
            Site made by Diego Nicolás Gándara - 2021{' '}
          </h3>
          <Col
            className="d-flex justify-content-center align-items-start columna"
            d-flex
          >
            <p className="color">Created with CRA </p>
            <img src={logo} alt="React Logo" style={{ maxHeight: '25%' }}></img>
          </Col>
          <Col className="d-flex justify-content-center">
            <ul>
              <li className="color">React-bootstrap</li>
              <li className="color">React-router-dom</li>
              <li className="color">Firebase</li>
            </ul>
          </Col>
        </Row>
      </footer>
    );
}

export default Footer;