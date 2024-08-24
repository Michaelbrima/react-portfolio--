import react from 'react'
import './Nav.css'

const Nav = () => {
    return (
        <>
            <div className="navbar">
                <h1>Portfolio</h1>
                <nav>
                    <a href="#">Home <span></span></a>
                    <a href="#">About <span></span></a>
                    <a href="#">Service <span></span></a>
                    <a href="#">Portfolio <span></span></a>
                    <a href="#">Contact <span></span></a>
                </nav>
            </div>
        </>
    )
}

export default Nav