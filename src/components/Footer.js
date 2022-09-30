import { Col, Container, Row } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="www.google.com">
                <img src={navIcon1} alt="" />
              </a>
              <a href="www.google.com">
                <img src={navIcon2} alt="" />
              </a>
              <a href="www.google.com">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p> CopyRight 2022. All Right Reserver By King Praise</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
