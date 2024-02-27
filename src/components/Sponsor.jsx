import purple from '../images/purple.webp';
import '../css/sponsor.scss';
import "bootstrap-icons/font/bootstrap-icons.css";
import {isMobile} from 'react-device-detect';

function Sponsor() {
    return (
        <section class='sponsor_header'>
            <div class='sponsor_outer_container'>
                <div className=''>
                    <img src={purple} alt='' class='sponsor_purple'></img>
                </div>
                <div class='sponsor_text_content'>
                    {isMobile ? <span class='sponsor_heading'>Sponsors</span> : <span class='sponsor_heading'>Support</span>}
                    <div class='hero_content'>
                        <span class='sponsor_sub_heading'>We have an extremely active community of over 3000 CSE students, achieved through our offering of career, social and educational events.</span>
                        <div class='sponsor_btn'>
                            <div class='sponsor_btn_inner'>
                                <a class='sponsor_link' href='/#'>Get Involved</a>
                                <i class="bi bi-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <span class='date'>2024</span>
            </div>
      </section>
    )
}

export default Sponsor