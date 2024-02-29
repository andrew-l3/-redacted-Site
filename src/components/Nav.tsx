import cseSoc from '../images/cseSoc.webp';
import '../css/nav.scss';

function Nav() {
    return (
        <section className='nav_header'>
            <div className='navbar'>
                <div className='nav_logo'>
                    <a href='/#'><img src={cseSoc} alt='cseSoc main logo'></img></a>
                </div>
                <div className='hamburger_menu_container'>
                    <label className='hamburger_menu'>
                        <input type='checkbox'></input>
                        <div className='nav_buttons'>
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
                        </div>
                    </label>
                </div>
            </div>
      </section>
    )
}

export default Nav