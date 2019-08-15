import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {

    return (
        <div className="footer">
            <button className="footer__item"><Link to={`/`}>Home</Link></button>
            <a href="https://github.com/BenTheChi" className="footer__item">Github</a>
            <a href="https://www.linkedin.com/in/benchi/" className="footer__item">Contact</a>
        </div>
    )
}

export default Footer;