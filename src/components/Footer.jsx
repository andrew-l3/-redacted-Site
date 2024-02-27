import cseSoc from '../images/cseSoc.webp';
import '../css/footer.scss';

function Footer() {
    return (
        <section class='footer_header'>
            <div class='outer_footer_container'>
                <div class='footer_container'>
                    <div class='footer_meta'>
                        <div className=''>
                            <img src={cseSoc} alt='' class='footer_logo'></img>
                        </div>
                        <div class='footer_links'>
                            <a class='footer_link' href='/#'>B03 CSE Building K17, UNSW</a>
                            <a class='footer_link alt' href='/#'>csesoc@csesoc.org.au</a>
                        </div>
                    </div>
                    <div class='footer_navs'>
                        <span class='footer_navs_header'>Social Media</span>
                        <div class='footer_links_container'>
                            <div class="footer_nav_links">
                                <a class='footer_link' href='/#'>Discord Community</a>
                                <a class='footer_link' href='/#'>Facebook Page</a>
                                <a class='footer_link' href='/#'>Facebook Group</a>
                                <a class='footer_link' href='/#'>Linkedin</a>
                            </div>
                            <div class="footer_nav_links">
                                <a class='footer_link' href='/#'>Instagram</a>
                                <a class='footer_link' href='/#'>YouTube</a>
                                <a class='footer_link' href='/#'>TikTok</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <span class='footer_copyright'>© 2024 — CSESoc UNSW</span>
                </div>
            </div>
      </section>
    )
}

export default Footer