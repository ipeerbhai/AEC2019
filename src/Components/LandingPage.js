import React from 'react';
import {
    Jumbotron,
    Button,
} from 'reactstrap';

//----------------------------------------------------------------------------------
// Component:
//  This is Main Landing page.
const LandingPage = () => {
    return (
        <Jumbotron className="fullscreen tp-jumbotron landing-dim">
            <div className="undim text-left">
                <h1 className="display-3">Damage Dogs</h1>
                <p className="lead">Explosion!</p>
                <hr className="my-2" style={{ "borderColor": "#888" }} />
                <h2>Look at booms</h2>
                <p className="lead">
                    <Button color="primary" href="/enterprise/boomView/" >Try Now</Button>
                </p>
            </div>
        </Jumbotron>
    )
}

export default LandingPage;