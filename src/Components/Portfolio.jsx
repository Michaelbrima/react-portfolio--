import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <section id="portfolio" className='portfolio'>
            <h2>My Portfolio:</h2>
            <button>New Word Dictionary Database
                <br/>
                <br/>
                <p>Developed code in PHP that displays and filters computer systems in a database by brand, purpose, and <br/>
                    device type. Done by uploading data from a .csv file to a MySQL database and accessing said webpage <br/>
                    through the ‘PhpMyAdmin’ website. </p>
                <br/>
                <p>Skills Used: HTML · PHP · MySQL</p>
                <br/>
                    <p>Link: https://new-word-dictionary-database.vercel.app/</p>
            </button>
            <br/>
            <button>Computer System Database
                <br/>
                <br/>
                <p>Developed code in PHP that displays and filters computer systems in a database by brand, purpose, and <br/> 
                    device type. Done by uploading data from a .csv file to a MySQL database and accessing said webpage <br/>
                    through the ‘PhpMyAdmin’ website. </p>
                    <br/>
                    <p>Skills Used: HTML · PHP · MySQL</p>
                    <br/> 
                    <p>Link: https://computer-system-database.vercel.app/index.php/</p>
            </button>
            <br/>
            <button>Cursor Preview Project
                <br/>
                <p>A project featuring the preview of a website when hovered over using HTML, CSS, JavaScript and jQuery. <br/> 
                    Done by opening anchor tags in an i-frame window using the ‘show’ and ‘hide’ methods in jQuery. </p>
                    <br/>
                    <p>Skills Used: HTML · Cascading Style Sheets (CSS) · JavaScript · jQuery </p>
                    <br/>
                    <p>Link: https://cursor-preview-project.vercel.app/</p>
            </button>
            <br/>
            <button>My Resume Project
                <br/>
                    <p>Developed webpage of my entire former resume using HTML code and CSS effects including through the <br/>
                    use of table elements, I-frames and anchor tags. </p>
                    <br/>
                    <p>Skills Used: HTML · Cascading Style Sheets (CSS) </p>
                    <br/>
                    <p>Link: https://my-resume-project-one.vercel.app/</p>
            </button>
        </section>
    );
};

export default Portfolio;