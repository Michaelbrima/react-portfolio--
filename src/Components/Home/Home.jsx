import React from 'react'
import './Home.css'

//For the Image:
import IMG from '../../Assets/professionalphoto.jpg'

//Social-media-icon
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";



const Home = () => {
    return (
        <>
            <div className="home">
                <div className="home-content">
                    <h3>Hello, My name is</h3>
                    <h1>Michael Brima</h1>
                    <h2>And I am a <span>Node.js Javascript Web Developer</span></h2>
                    <p>
                        I have experience creating coding projects in SQL as well as in Front End coding languages such
                        as HTML, CSS, Bootstrap JavaScript (including JavaScript libraries like JQuery), and PHP. I am
                        also familiar with back-end technologies as well including Node.js, Express, JSON, Fetch
                        Requests, RESTful APIs, and MongoDB as well as developing code in software and programs
                        well known to web development including Notepad, Notepad++, VS Code (or Visual Studio
                        Code), Laragon, and PhpMyAdmin.
                    </p>
                    <div className="social-media">
                        <li><a href='#'><FaGithub /></a></li>
                        <li><a href='#'><CiLinkedin /></a></li>
                    </div>
                    <div className="button">
                        <button className='btn'>Download CV</button>
                        <button className='btn'>Hire Me</button>
                    </div>
                </div>
                <div className="image">
                    <img src={IMG} alt='Portfolio-Image' />
                </div>
            </div>
        </>
    )
}

export default Home