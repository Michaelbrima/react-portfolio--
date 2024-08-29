import react from 'react'
import './Nav.css'
import { HashLink } from 'react-router-hash-link';

const Nav = () => {
    return (
        <nav>

            <duv id="hashlinks">
                    <HashLink to="#about" className="link">
                    About
                    </HashLink>

                    <HashLink to="#portfolio" className="link">
                    Portfolio
                    </HashLink>

                    <HashLink to="#skills" className="link">
                    Skills
                    </HashLink>

                    <HashLink to="#contact" className="link">
                    Contact
                    </HashLink>
            </duv>
            {/* <div className="navbar">
                <h1>Portfolio</h1>
                <nav>
                    <a href="#">Home <span></span></a>
                    <a href="#">About <span></span></a>
                    <a href="#">Service <span></span></a>
                    <a href="#">Portfolio <span></span></a>
                    <a href="#">Contact <span></span></a>
                </nav>
            </div> */}
        </nav>
    )
}

export default Nav