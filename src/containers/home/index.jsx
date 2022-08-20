import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import './styles.scss';


const Home = () => {

    const navigate = useNavigate();
    //console.log(navigate);

    const handleNavigateContactMePage = () => {
        navigate('/contact');
    }

    return (
        <section id="home" className="home">
            <div className="home__text-warpper">
                <h1>
                    Hello, I'm Bilal
                    <br />
                    Software Developer
                </h1>
            </div>
            <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform: 'translateY(550px)'
                }}

                end={{
                    transform: 'translatex(0px)'
                }}
            >
                <div className="home__contact-me">
                    <button onClick={handleNavigateContactMePage}>Hire Me</button>
                </div>
            </Animate>
        </section>
    )
}

export default Home;