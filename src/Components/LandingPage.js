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
                <h1 className="display-3">Accidon't Technologies</h1>
                <p className="lead">Worker Safety AI technologies</p>
                <hr className="my-2" style={{ "borderColor": "#888" }} />
                <h2>Introducing Accidon't Construction</h2>
                <p>Fatigued workers cause accidents.  Accidents harm both worker and business.  Our AI technology monitors worker fatigue, helping you improve your safety ratings.</p>
                <p className="lead">
                    <Button color="primary" href="/enterprise/dashboard/" >Try Now</Button>
                </p>
            </div>
        </Jumbotron>
    )
}

export default LandingPage;