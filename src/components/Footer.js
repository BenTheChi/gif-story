import React from 'react'
import history from '../history'

const Footer = () => {

    return (
        <div className="footer">
            <button onClick={() => {history.push('/')}} className="footer__item">Home</button>
            <a href="https://github.com/BenTheChi" className="footer__item">Github</a>
            <a href="https://www.linkedin.com/in/benchi/" className="footer__item">Contact</a>
        </div>
    )
}

export default Footer;