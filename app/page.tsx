import Image from 'next/image'
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                {/*<base href={process.env.BASE_PATH} />*/}
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Mate&display=swap" rel="stylesheet"/>
            </Head>
            <main>
                <section className="hero-section" style={{backgroundImage: `url(${process.env.BASE_PATH}/img/hero-background.png)`}}>
                    <header>
                    <span>
                        <a href="#projects-section">Projects </a>
                    </span>
                        <span>
                        <a href="#resume-section">Resume </a>
                    </span>
                    </header>
                    <div className="portfolio-text">
                        Portfolio
                    </div>

                    <div>
                        <svg className="waves" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink"
                             viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                            <defs>
                                <path id="gentle-wave"
                                      d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
                            </defs>
                            <g className="parallax">
                                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(240,240,240,0.7)"/>
                                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(240,240,240,0.5)"/>
                                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(240,240,240,0.3)"/>
                                <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(240,240,240,0.9)"/>
                            </g>
                        </svg>
                    </div>
                </section>

                <section id="resume-section" className="about-me-section">
                    <div className="container">
                        {/*<div className="photo"></div>*/}
                        <div className="person">
                            <div className="person_container">
                                <img className="person_circle" src={`${process.env.BASE_PATH}/img/circle.PNG`} alt=""/>
                                <img className="person_img" src={`${process.env.BASE_PATH}/img/ganna-photo.PNG`} alt="Ganna photo"/>
                            </div>
                        </div>
                        <div className="info">
                            Hello! My name is Ganna Salatsynska.<br/>
                            I worked as Java Engineer and switched to Frontend. I am a collaborative and team-oriented
                            person with a proven track record of working effectively in cross-functional teams.
                            <br/>
                            Throughout my career, I have been a dedicated team member, always ready to contribute and
                            collaborate to solve problems.
                            <br/>
                            Outside of work, I enjoy engaging in sports and outdoor activities. My hobbies help me
                            maintain
                            a healthy work-life balance and stay energized and focused.
                        </div>
                    </div>
                    <br/>
                    <div className="cv-info">
                        <div className="column">
                            <h3>Contact</h3>
                            <p>Phone: +380980183883</p>
                            <p>Email: salatsynskahv@gmail.com</p>
                            <br/>
                            <h3>Skills</h3>
                            <p>Programming languages and technologies:
                                JavaScript (React, Angular) - 1.5 year experience.
                                Java (Java core, Java EE, Spring Framework) - 5 years experience.</p>
                            <p>Web technologies: HTML, CSS (SASS).</p>
                            <p>Testing Frameworks: Cypress</p>
                            <p>CMS: Sanity Studio, Liferay</p>
                            <p>Build systems: Maven, Ant (+Ivy).</p>
                            <p>Tools: JntelliJ IDEA, Tortoise SVN, SQL Developer, Postman.</p>
                        </div>
                        <div className="column">
                            <h3>Education</h3>
                            <p>
                                <b>National University of 'Kyiv Mohyla Academy' </b>
                                <br/>
                                Bachelor of Science: Applied Mathematics
                                2009 / 2013
                                <br/><br/>

                                <b>Netcracker Training Center</b> 2012
                                <br/><br/>
                                <b>National University of 'Kyiv Mohyla Academy' </b><br/>
                                Master of Science: Systems and Methods of Decision Making
                                2013 / 2015
                            </p>
                            <br/>
                            <h3>Work experience</h3>
                            <p>
                                Netcracker 2014 / present
                                Implemented new features of an existing system, contributing to its enhanced
                                functionality
                                and usability.
                                Estimated production times and staging requirements for new designs, enabling the team
                                to
                                deliver projects on time and within budget.
                                Troubleshot new and existing product problems involving designs, materials, or
                                processes,
                                ensuring smooth and efficient operation of the system.
                                Wrote tech design and detailed design specifications, providing an overview of the
                                architecture, system functions, API, and extension points for product customization.
                            </p>
                            <br/>
                            <h3>Languages</h3>
                            <ul>
                                <li>Ukrainian - Native</li>
                                <li>English - Intermediate</li>
                                <li>Polish - Basic</li>
                            </ul>
                        </div>
                    </div>

                </section>
                <section id="projects-section" className="project-section">
                    <h2>Projects</h2>
                    <div className="desc-container">
                        <div className="desc-info">
                            Wishlist - app that allows you to save all your plans for shopping and share it with
                            friends.
                            App allows you to create custom witlists (tables with list of wishes) and share it with
                            friends.
                            Technologies used:
                            <ul>
                                <li>React</li>
                                <li>MonogoDB</li>
                                <li>NodeJs, Express, Mongoose</li>
                                <li>Firebase</li>
                            </ul>
                            <br/>
                            <a href="https://wishlist-client.onrender.com/" target="_blank"> Live Demo </a>
                        </div>
                        <div className="desc-link">
                            <a href="https://wishlist-client.onrender.com/" target="_blank">
                                <img src={`${process.env.BASE_PATH}/img/wishlist-app.PNG`} alt="wishlist screen"/>
                            </a>
                        </div>
                    </div>

                    <div className="desc-container">

                        <div className="desc-info">
                            Food Delivery service:
                            <ul>
                                <li>React</li>
                                <li>MonogoDB</li>
                                <li>NodeJs, Express, Mongoose</li>
                                <li>Firebase</li>
                            </ul>
                            <br/>
                            <a href="https://wishlist-client.onrender.com/" target="_blank"> Live Demo </a>
                        </div>
                        <div className="desc-link">
                            <a href="https://food-delivery-3ft8.onrender.com/" target="_blank">
                                <img src={`${process.env.BASE_PATH}img/food-delivery-app.PNG`} alt="food delivery app"/>
                            </a>
                        </div>
                    </div>
                    <div className="desc-container">
                        <div className="desc-info">
                            Expense tracker
                            <ul>
                                <li>React</li>
                                <li>MonogoDB</li>
                                <li>NodeJs, Express, Mongoose</li>
                                <li>Firebase</li>
                            </ul>
                            <br/>
                            <a href="https://wishlist-client.onrender.com/" target="_blank"> Live Demo </a>
                        </div>
                        <div className="desc-link">

                        </div>
                    </div>
                    <div className="desc-container">
                        <div className="desc-info">
                            Online shop
                            <ul>
                                <li>React</li>
                                <li>MonogoDB</li>
                                <li>NodeJs, Express, Mongoose</li>
                                <li>Firebase</li>
                            </ul>
                            <br/>
                            <a href="https://wishlist-client.onrender.com/" target="_blank"> Live Demo </a>
                        </div>
                        <div className="desc-link">

                        </div>
                    </div>
                    <div className="rotate-180">
                        <svg className="waves-2" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink"
                             viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                            <defs>
                                <path id="gentle-wave"
                                      d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
                            </defs>
                            <g className="parallax">
                                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(240,240,240,0.7)"/>
                                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(240,240,240,0.5)"/>
                                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(240,240,240,0.3)"/>
                                <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(240,240,240,0.9)"/>
                            </g>
                        </svg>
                    </div>
                </section>
                <footer style={{backgroundImage: `url(${process.env.BASE_PATH}/img/footer.jpg)`}}>
                </footer>
            </main>
        </>
    )
}
