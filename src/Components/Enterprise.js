import React from 'react';
import { Container, Row, Col, Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

let Dashboard = (props) => {
    return (
        <Container className="standout">
            <Row>
                <Col sm="12" md={{ size: 12, offset: 4 }}>
                    <h1>Active Projects</h1>
                </Col>
            </Row>
            <Row>
                <Card inverse>
                    <CardImg width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&w=318&h=270&bg=333333&txtclr=666666" alt="Card image cap" />
                    <CardImgOverlay>
                        <CardTitle><a href="/enterprise/site-dashboard/">Overlake Hospital Expansion</a></CardTitle>
                        <CardText style={{ backgroundColor: "red" }}>Sunday, February 24.<br />  Current Status: RED<br />Site Safety Contact: Jenny Eversafe (206) 555-1212</CardText>
                        <CardText>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </CardText>
                    </CardImgOverlay>
                </Card>
                <Card inverse>
                    <CardImg width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&w=318&h=270&bg=333333&txtclr=666666" alt="Card image cap" />
                    <CardImgOverlay>
                        <CardTitle><a href="/">PSE Seismic Retrofit</a></CardTitle>
                        <CardText style={{ backgroundColor: "Orange" }}>Sunday, February 24.<br />  Current Status: Yellow<br />Site Safety Contact: Penny Eversafe (206) 555-1213</CardText>
                        <CardText>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </CardText>
                    </CardImgOverlay>
                </Card>
                <Card inverse>
                    <CardImg width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&w=318&h=270&bg=333333&txtclr=666666" alt="Card image cap" />
                    <CardImgOverlay>
                        <CardTitle><a href="/">Microsoft Building 11 demo</a></CardTitle>
                        <CardText style={{ backgroundColor: "Green" }}>Sunday, February 24.<br />  Current Status: Green<br />Site Safety Contact: Manny Eversafe (206) 555-1214</CardText>
                        <CardText>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </CardText>
                    </CardImgOverlay>
                </Card>
            </Row>
        </Container>
    );

};

export default Dashboard;