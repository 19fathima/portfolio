import React, { useState } from 'react'
import './projects.css'

const Projects = () => {

    const [toggle, setToggle] = useState(0);

    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">What I have built</span>

            <div className="projects__container container grid">
                <div className="projects__content">
                    <div>
                        <i className="uil uil-web-grid projects__icon"></i>
                        <h3 className="projects__title">Prescripto</h3>
                    </div>
                    <span className="projects__button" onClick={() => setToggle(1)} >View More
                    <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={toggle === 1 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={() => setToggle(0)} ></i>
                            <h3 className="projects__modal-title">Prescripto</h3>
                            <div className="projects__modal-subtitle">
                                <p className="projects__modal-description">
                                  A web app for medication management and appointments  
                                </p>
                                <a href="https://github.com/19fathima/Prescripto" target='_blank'><i class='bx bx-link-alt'></i></a>
                            </div>

                            <ul className="projects__modal-items grid">
                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__button"></i>
                                    <p className="projects__modal-info">
                                        User sign-in and role based authentication.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Filter and search feature based on doctor speciality.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                       Efficient client-side routing using React Router.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        UI for user login, accounts and appointments.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        TechStack: ReactJS, Tailwind CSS.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div>
                        <i className="uil uil-edit projects__icon"></i>
                        <h3 className="projects__title">Edemy</h3>
                    </div>
                    <span className="projects__button" onClick={() => setToggle(3)} >View More
                    <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>
                    
                    <div className={toggle === 3 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={() => setToggle(0)} ></i>
                            <h3 className="projects__modal-title">Edemy - Learning Management System</h3>
                            <div className="projects__modal-subtitle">
                                <p className="projects__modal-description">
                                  An e-learning platform for seamless online learning experiences
                                </p>
                                <a href="https://github.com/19fathima/Edemy" target='_blank'><i class='bx bx-link-alt'></i></a>
                            </div>
                            

                            <ul className="projects__modal-items grid">
                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                       Authentication and role-based access for users.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Responsive and user-friendly ui using Tailwind CSS.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                      Course enrollment, video lessons and progress tracking.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        More features to add..
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        TechStack: ReactJS, Tailwind CSS and Clerk
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div>
                        <i class='uil uil-chat-info projects__icon' ></i>
                        <h3 className="projects__title">Estate <br/> App</h3>
                    </div>
                    <span className="projects__button" onClick={() => setToggle(2)} >View More
                    <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={toggle === 2 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={() => setToggle(0)} ></i>
                            <h3 className="projects__modal-title">Real Estate</h3>
                            <div className="projects__modal-subtitle">
                                <p className="projects__modal-description">
                                  A Real Estate Web App for buying or renting homes easily
                                </p>
                                <a href="https://github.com/19fathima/Real-Estate" target='_blank'><i class='bx bx-link-alt'></i></a>
                            </div>

                            <ul className="projects__modal-items grid">
                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        User authentication and account verification.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Properties can be posted & tracked on board layout.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Filter and search features for properties.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Users get notified on every new property listing.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        TechStack: ReactJS, React Toast, Framer motion
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Projects