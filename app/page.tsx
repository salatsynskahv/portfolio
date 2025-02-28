'use client';
import Head from "next/head";
import ProjectDescription from "@/app/components/project-desc";
import {workDescs} from "@/app/fixture-workdesc";
import {WorkDescription} from "@/app/components/work-description";
import {WorkDescriptionObj} from "@/app/interfaces/WorkDescriptionObj";
import {useEffect, useState} from "react";
import {juliusSansOne, mate} from "@/app/fonts";

export default function Home() {

    const [workDesc, setWorkDesc] = useState<WorkDescriptionObj[]>([]);

    useEffect(() => {
        setWorkDesc(workDescs as WorkDescriptionObj[]);
    }, []);

    return (
        <>
            <Head>
                {/*<base href={process.env.BASE_PATH} />*/}
            </Head>
            <main>
                <section className={`hero-section ${mate.className}`}
                         style={{backgroundImage: `url(${process.env.BASE_PATH}/img/hero-background.png)`}}>
                    <header>
                    <span>
                        <a href="#projects-section">Projects </a>
                    </span>
                        <span>
                        <a href="#resume-section">Resume </a>
                    </span>
                    </header>
                    {/*<div className={`${juliusSansOne.className} portfolio-text`}>*/}
                    {/*    Portfolio*/}
                    {/*</div>*/}
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
                </section>

                <section id="resume-section" className={`${mate.className} about-me-section`}>
                    <div className="container">
                        {/*<div className="photo"></div>*/}
                        <div className="person">
                            <div className="person_container">
                                <img className="person_circle" src={`${process.env.BASE_PATH}/img/circle.PNG`} alt=""/>
                                <img className="person_img" src={`${process.env.BASE_PATH}/img/ganna-photo.PNG`}
                                     alt="Ganna photo"/>
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
                                JavaScript,<br/>
                                Angular (RxJs, NgRX),<br/>
                                Java (Java core, Java EE, Spring Framework)</p>
                            <p>Web technologies: HTML, CSS (SASS).</p>
                            <p>Testing Frameworks: Testcafe, Cypress</p>
                            <p>CMS: Sanity Studio, Liferay</p>
                            <p>Tools: IntelliJ IDEA, Tortoise SVN, SQL Developer, Postman.</p>

                            <h3>Languages</h3>
                            <ul>
                                <li>Ukrainian - Native</li>
                                <li>English - Intermediate</li>
                                <li>Polish - Basic</li>
                            </ul>
                        </div>
                        <div className="column">
                            <h3>Education</h3>
                            <p>
                                <b>National University of 'Kyiv Mohyla Academy' </b>
                                <br/>
                                Bachelor of Science: Applied Mathematics
                                2009 / 2013<br/> <br/>
                                <b>National University of 'Kyiv Mohyla Academy' </b><br/>
                                Master of Science: Systems and Methods of Decision Making
                                2013 / 2015
                            </p>
                            <br/>
                            <h3>Work experience</h3>
                            {
                                workDesc.map(workDesc => {
                                    return <WorkDescription workDesc={workDesc}/>;
                                })}
                            <br/>
                        </div>
                    </div>

                </section>
                <section id="projects-section" className="project-section">
                    <h2>Projects</h2>

                    {/*<ProjectDescription*/}
                    {/*    description="Wishlist Magic App: Create and share custom wishlists with friends, making thoughtful gifting a breeze."*/}
                    {/*    githubLink="https://github.com/salatsynskahv/wishlist-client"*/}
                    {/*    link="https://wishlist-client.onrender.com/"*/}
                    {/*    images={["wishlist/wishlist-screenshot1.jpeg"]}*/}
                    {/*    technologies={['react-js', 'react-redux', 'scss', 'nodejs',*/}
                    {/*        'express', 'mongoose', 'mongodb', 'firebase']}/>*/}


                    <ProjectDescription
                        description="Test task for Angular Developer position. Develop dahsboard that renders charts
                        of historical and realtime prices"
                        githubLink="https://github.com/salatsynskahv/fintaChart"
                        link="https://finta-chart-v1pb-12nzobvc8-salatsynskahvs-projects.vercel.app"
                        images={['fintachart/fintachart.png']}
                        technologies={['Angular', 'RxJs',]}/>

                    <ProjectDescription
                        description="Test task for FullStack Engineer"
                        githubLink="https://github.com/salatsynskahv/botscrew-test-fronend"
                        link="https://botcrew-test-fronend-production.up.railway.app/"
                        images={['botscrew/botscrew.png']}
                        technologies={['Java', 'Spring Data JPA', 'React', 'Tailwind']}/>


                    {/*<ProjectDescription*/}
                    {/*    description="Aster Silk - online shop of Ukrainian clothing brand"*/}
                    {/*    githubLink=""*/}
                    {/*    link="https://astersilk.com/"*/}
                    {/*    images={['aster-silk/aster_silk_screenshot1.jpeg', 'aster-silk/aster_silk_screenshot2.jpeg', 'aster-silk/aster_silk_screenshot3.jpeg']}*/}
                    {/*    technologies={['wordPress', 'wooCommerce', 'css', 'php']}/>*/}


                    {/*<ProjectDescription*/}
                    {/*    description="Finance Tracker - small web application that allows users categorize and analize their expences"*/}
                    {/*    githubLink="https://github.com/salatsynskahv/finance-tracker"*/}
                    {/*    link="https://finance-tracker-frontend-cyan.vercel.app"*/}
                    {/*    images={['finance-tracker/one.png', 'finance-tracker/two.png',*/}
                    {/*        'finance-tracker/three.png']}*/}
                    {/*    technologies={['react-js', 'next.js', 'scss', 'zustand', 'nodejs',*/}
                    {/*        'express', 'mongoose', 'mongodb']}*/}
                    {/*/>*/}

                    {/*<ProjectDescription*/}
                    {/*    description="Test task for interview. Draggable dynamic tree with navbar"*/}
                    {/*    githubLink="https://github.com/salatsynskahv/categories-tree"*/}
                    {/*    link="https://categories-tree.vercel.app/"*/}
                    {/*    images={['finance-tracker/one.png']}*/}
                    {/*    technologies={['react-js', 'typescript', 'scss']}*/}
                    {/*/>*/}


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
                <footer style={{backgroundImage: `url(${process.env.BASE_PATH}/img/footer.png)`}}>
                </footer>
            </main>
        </>
    )
}
