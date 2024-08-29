import React from 'react';
import './Skills.css';

const Skills = () => {
    return(
        <section id="skills" className='skills'>
            <h2>My Skills:</h2>

            <div id="tables">
        <table>
            <tbody>
                <tr> SQL / MySQL </tr>
                <tr> PhpMyAdmin </tr>
                <tr> HTML </tr>
                <tr> CSS </tr>
                <tr> JavaScript </tr>
                <tr> jQuery </tr>
                <tr> PHP </tr>
                <tr> Node.js </tr>
            </tbody>
        </table>
        <table>
            <tbody>
                <tr> MongoDB </tr>
                <tr> VS Code (Visual Studio Code) </tr>
                <tr> Notepad </tr>
                <tr> Notepad++ </tr>
                <tr> Laragon </tr>
                <tr> RESTful API </tr>
            </tbody>
        </table>
        <table>
            <tbody>
                <tr> Bootstrap </tr>
                <tr> Express </tr>
                <tr> JSON </tr>
                <tr> Fetch Requests </tr>
                <tr> React.js </tr>
            </tbody>
        </table>
    </div>

    {/* <table>
        <tr>
            <td>
                SQL / MySQL
            </td>
            <br/>
            <td>
                MongoDB
            </td>
            <br/>
            <td>
                Bootstrap
            </td>
        </tr>
    </table> */}
        </section>
    );
};

export default Skills;