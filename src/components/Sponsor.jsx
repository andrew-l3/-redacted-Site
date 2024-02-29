import purple from '../images/purple.webp';
import '../css/sponsor.scss';
import "bootstrap-icons/font/bootstrap-icons.css";
import {isMobile} from 'react-device-detect';

function Sponsor() {
    return (
        <section class='sponsor_header'>
            <div class='outer_container'>
                <div className='sponsor_image'>
                    <img src={purple} alt=''></img>
                </div>
                <div class='text_content'>
                    {isMobile ? <span class='heading'>Support</span> : <span class='heading'>Sponsorship</span>}
                    <div class='hero_content'>
                        <span class='sub_heading'>We have an extremely active community of over 3000 CSE students, achieved through our offering of career, social and educational events.</span>
                        <a className='primary_btn' href='/#'>Get Involved</a>
                    </div>
                </div>
                <span class='date'>2024</span>
            </div>
      </section>
    )
}

export default Sponsor