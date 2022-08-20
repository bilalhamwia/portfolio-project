import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { ImEnvelop } from "react-icons/im";
import { Animate } from "react-simple-animate";
import './styles.scss';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <PageHeaderContent
                headerText="My Contact"
                icon={<ImEnvelop size={40} />}
            />
            <div className="contact__content">
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(-200px)"
                    }}
                    end={{
                        transform: "translateX(0px)"
                    }}
                >
                    <h3 className="contact__content__header-text">Let's Talk</h3>
                    

                </Animate>
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(200px)"
                    }}
                    end={{
                        transform: "translateX(0px)"
                    }}
                >
                    <div className="contact__content__from">
                        <div className="contact__content__from__controlwrapper">
                            <div>
                                <input required name="name" className="inputName" type={'text'}/>
                                <label htmlFor="name" className="nameLabel">Name</label>
                            </div>
                            <div>
                            <input required  name="email" className="inputEmail" type={'text'}/>
                                <label htmlFor="email" className="emailLabel">Email</label>
                            </div>
                            <div>
                            <textarea required name="description" className="inputDescription" type={'text'} rows="5"/>
                                <label htmlFor="description" className="descriptionLabel">Description</label>
                            </div>
                        </div>
                        <button href="bilalhamwia95@gmail.com">Submit</button>
                    </div>
                </Animate>

            </div>
        </section>
    )
}

export default Contact;