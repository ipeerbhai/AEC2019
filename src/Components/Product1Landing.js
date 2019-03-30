import React from 'react';
import {
    Jumbotron,
    Button,
} from 'reactstrap';

//----------------------------------------------------------------------------------
// Component:
//  This is Main Landing page.
const ThinkCyberLanding = (props) => {
    return (
        <main role="main" className="unmargin">
            <Jumbotron className="fullscreen">
                <div className="undim text-left">
                    <h1 className="display-3">ThinkCyber</h1>
                    <p className="lead">We do process research to solve your problems.</p>
                    <hr className="my-2" style={{ "borderColor": "#888" }} />
                    <h2>Introducing ThinkCyber</h2>
                    <p>93% of data breaches in 2018 were API breaches.  We can fix that.</p>
                    <p className="lead">
                        <Button color="primary" href="/products/thinkcyber/" >Learn More</Button>
                    </p>
                </div>
            </Jumbotron>
        </main>
    )
}

export default ThinkCyberLanding;