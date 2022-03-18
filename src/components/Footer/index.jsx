import React from 'react';
import './style.css';

const Footer = ({year, author, disclosure}) => {
    return(
        <footer className='footer'>
			<p className='footer__copyright'>&copy; {year}, {author}</p>
			<p className='footer__disclosure'>{disclosure}</p>
		</footer>

    )
}

export default Footer;