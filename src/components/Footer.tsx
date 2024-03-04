import logo from '../images/not_logo.webp';
import '../css/footer.scss';
import  { footerLinksMain, footerLinksSec } from '../data/Data';

function Footer() {
    return (
        <section className='footer_header'>
            <div className='outer_footer_container'>
                <div className='footer_container'>
                    <div className='footer_meta'>
                        <div className='footer_logo'>
                            <a href='/#'><img src={logo} alt=''></img></a>
                        </div>
                        <div className='footer_links'>
                            <a href='/#'>ABC (Redacted) Building DEF, (Redacted)</a>
                            <a href='/#'>(redacted)@(redacted).org.au</a>
                        </div>
                    </div>
                    <div className='footer_navs'>
                        <span className='footer_navs_header'>Social Media</span>
                        <div className='footer_links_container'>
                            <div className="footer_nav_links">
                                {footerLinksMain.map((item) => {
                                    return (
                                        <a href={item.link}>{item.title}</a>
                                    );
                                })}
                            </div>
                            <div className="footer_nav_links">
                                {footerLinksSec.map((item) => {
                                    return (
                                        <a href={item.link}>{item.title}</a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <span className='footer_copyright'>© 2024 — Definitely Not (Redacted)</span>
                </div>
            </div>
      </section>
    )
}

export default Footer