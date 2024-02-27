import cseSoc from '../images/cseSoc.webp';
import '../css/nav.scss';

function Nav() {
    return (
        <section class='nav_header'>
            <div class='navbar'>
                <div class='logo'>
                    <a href='/#'><img class='lgo' src={cseSoc} alt=''></img></a>
                </div>
                <div class='buttons'>
                    <div class='links'>
                        <a class='hdr lnk lk1' href='/#'>About Us</a>
                        <a class='hdr lnk lk2' href='/#'>Get In Touch</a>
                        <a class='hdr lnk lk2' href='/#'>Events</a>
                        <a class='hdr lnk lk3' href='/#'>Resources</a>
                    </div>
                    <div class='cta'>
                        <a class='hdr lnk lk4' href='/#'>Sponsorship</a>
                    </div>
                </div>
            </div>
      </section>
    )
}

export default Nav