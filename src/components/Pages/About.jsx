import React from 'react';
import './css/About.scss';
import Container from "../fragment/Container";
import Attribution from "../fragment/Attribution";

const About = () => {
    return (
        <Container>
            <div className={"About"}>
                {/*<div className="Dark-mode">
                    <h5>Dark mode to be available soon</h5>
                    <IconButton>
                        <Brightness3/>
                    </IconButton>
                </div>*/}
                <Attribution/>
            </div>
        </Container>
    );
}

export default About;
