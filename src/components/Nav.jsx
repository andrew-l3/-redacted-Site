import cseSoc from '../images/cseSoc.webp';
import '../css/nav.scss';

function Nav() {
    return (
        <section class='nav_header'>
            <div class='navbar'>
                <div class='nav_logo'>
                    <a href='/#'><img src={cseSoc} alt=''></img></a>
                </div>
                <div className='hamburger_menu_container'>
                    <label className='hamburger_menu'>
                        <input type='checkbox'></input>
                        <div class='nav_buttons'>
                            <div class='nav_links'>
                                <a href='/#'>Home</a>
                                <a href='/#'>About Us</a>
                                <a href='/#'>Get In Touch</a>
                                <a href='/#'>Events</a>
                                <a href='/#'>Resources</a>
                            </div>
                            <div class='cta_links'>
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