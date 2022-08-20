import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './styles.scss';
import { DiApple, DiAndroid } from 'react-icons/di'
import { FaDev, FaDatabase } from 'react-icons/fa'

const personalDeltails = [
    {
        label: "Name:",
        value: "Bilal Hamwia",
    },
    {
        label: "Age:",
        value: "26",
    },
    {
        label: "Address:",
        value: "Syria",
    },
    {
        label: "Email:",
        value: "bilalhmawia95@gmail.com",
    },
    {
        label: "Contact No:",
        value: "+963 932329731",
    },
];

const jobSummary = 'five-year computer science student, future web developer, with 3 years experience in database and website build and design. My passion for web space development brought me to [ Arab International University ] I am graduation at my bachelors degree Currently , i focus on development and build user interface elements on responsive website. i typically HTML/CSS and JavaScript in the client, PHP , ASP.NET (C#) , ReactJs On BackEnd ';


const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(-900px)'
                        }}

                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >
                        <h3>Software Developer</h3>
                        <p>{jobSummary}</p>
                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(500px)'
                        }}

                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >

                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {
                                personalDeltails.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__servicesWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(600px)'
                        }}

                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >
                        <div className="about__content__servicesWrapper__innerContent">
                            <div>
                                <FaDev size={60} color="var(--yallow-them-main-color)" />
                            </div>
                            <div>
                                <DiAndroid size={60} color="var(--yallow-them-main-color)" />
                            </div>
                            <div>
                                <FaDatabase size={60} color="var(--yallow-them-main-color)" />
                            </div>
                            <div>
                                <DiApple size={60} color="var(--yallow-them-main-color)" />
                            </div>
                        </div>
                    </Animate>

                </div>

            </div>
        </section>
    );
};

export default About;