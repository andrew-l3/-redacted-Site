import logo from '../images/not_logo.webp';
import '../css/nav.scss';
import { motion } from "framer-motion"
import { navLinks } from '../data/Data';

function Nav() {

    const icons:string[] = ['tiktok', 'discord', 'github', 'instagram', 'facebook', 'youtube', 'linkedin', 'twitter', 'wechat'];

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
                                {navLinks.map((item) => {
                                    return (
                                        <a href={item.link}>{item.title}</a>
                                    );
                                })}
                            </div>
                            <div className='cta_links'>
                                <a href='/#'>Sponsorship</a>
                            </div>
                            <div className='media_links'>
                                {icons.map((item) => {
                                    return (
                                        <a href='/#'><i className={'bi bi-' + item}></i></a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </label>
                </div>
            </div>
      </section>
    )
}

export default Nav