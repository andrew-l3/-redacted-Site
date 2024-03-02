import logo from '../images/logo.webp';
import '../css/nav.scss';
import { motion } from "framer-motion"
import { useState } from 'react';

function Nav() {
    return (
        <section className='nav_header'>
            <div className='navbar'>
                <div className='nav_logo'>
                    <a href='/#'><img src={logo} alt='cseSoc main logo'></img></a>
                </div>
                <div className='hamburger_menu_container'>
                    <label className='hamburger_menu'>
                        <input type='checkbox'></input>
                        <motion.div 
                            className='nav_buttons'
                        >
                            <div className='nav_links'>
                                <a href='/#'>Home</a>
                                <a href='/#'>About Us</a>
                                <a href='/#'>Get In Touch</a>
                                <a href='/#'>Events</a>
                                <a href='/#'>Resources</a>
                            </div>
                            <div className='cta_links'>
                                <a href='/#'>Sponsorship</a>
                            </div>
                            <div className='social_links'>
                                <a href='/#'><i className="bi bi-tiktok"></i></a>
                                <a href='/#'><i className="bi bi-discord"></i></a>
                                <a href='/#'><i className="bi bi-github"></i></a>
                                <a href='/#'><i className="bi bi-instagram"></i></a>
                                <a href='/#'><i className="bi bi-facebook"></i></a>
                                <a href='/#'><i className="bi bi-youtube"></i></a>
                                <a href='/#'><i className="bi bi-linkedin"></i></a>
                                <a href='/#'><i className="bi bi-twitter"></i></a>
                                <a href='/#'><i className="bi bi-wechat"></i></a>
                            </div>
                        </motion.div>
                    </label>
                </div>
            </div>
      </section>
    )
}

export default Nav