import React from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import './Footer.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faArrowCircleRight);


//----------------------------------------------------------------------------------
// Component:
//  This is a stateless component, and just renders a simple footer.
const Footer = (props) => {
    return (
        <footer id="footer">
            <div style={{ clear: "both", paddingTop:"2rem", position:"relative" }}></div>
            <div className="wrap">
                <Container>
                    <Row>
                        <Col className="align-left">
                            <h2>Accidont</h2>
                            <p> Addy1<br />
                                Addy2<br />
                                Addy3</p>
                            Phone <br />
                            contact@accidont.com
                        </Col>
                        <Col sm="4" className="align-center">
                            <h2>Newsletter</h2>
                            <p>Get the latest news via email:</p>
                            <form><input id="inputEmail" type="email" placeholder="email@address.com" name="EMAIL" className="required form-control email" />
                                <button id="btnSubscribe" type="submit" name="subscribe" className="submit"> <FontAwesomeIcon icon={faArrowCircleRight} size="2x" color="#015da6" /> </button></form>
                        </Col>
                        <Col className="align-right">
                            <h2>About</h2>
                            <h4><a href="/about">Company</a></h4>
                            Social icons here.
                        </Col>
                    </Row>
                </Container>
            </div>
            Copyright Company.
        </footer>
    );
};

export default Footer;