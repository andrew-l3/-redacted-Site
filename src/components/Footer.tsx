import cseSoc from '../images/cseSoc.webp';
import '../css/footer.scss';

function Footer() {
    return (
        <section className='footer_header'>
            <div className='outer_footer_container'>
                <div className='footer_container'>
                    <div className='footer_meta'>
                        <div className='footer_logo'>
                            <img src={cseSoc} alt=''></img>
                        </div>
                        <div className='footer_links'>
                            <a href='/#'>B03 CSE Building K17, UNSW</a>
                            <a href='/#'>csesoc@csesoc.org.au</a>
                        </div>
                    </div>
                    <div className='footer_navs'>
                        <span className='footer_navs_header'>Social Media</span>
                        <div className='footer_links_container'>
                            <div className="footer_nav_links">
                                <a href='/#'>Discord Community</a>
                                <a href='/#'>Facebook Page</a>
                                <a href='/#'>Facebook Group</a>
                                <a href='/#'>Linkedin</a>
                            </div>
                            <div className="footer_nav_links">
                                <a href='/#'>Instagram</a>
                                <a href='/#'>YouTube</a>
                                <a href='/#'>TikTok</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <span className='footer_copyright'>© 2024 — CSESoc UNSW</span>
                </div>
            </div>
      </section>
    )
}

export default Footer