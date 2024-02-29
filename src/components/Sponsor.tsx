import purple from '../images/purple.webp';
import '../css/sponsor.scss';
import "bootstrap-icons/font/bootstrap-icons.css";
import {isMobile} from 'react-device-detect';

function Sponsor() {
    return (
        <section className='sponsor_header'>
            <div className='outer_container'>
                <div className='sponsor_image'>
                    <img src={purple} alt=''></img>
                </div>
                <div className='text_content'>
                    {isMobile ? <span className='heading'>Support</span> : <span className='heading'>Sponsorship</span>}
                    <div className='hero_content'>
                        <span className='sub_heading'>We have an extremely active community of over 3000 CSE students, achieved through our offering of career, social and educational events.</span>
                        <a className='primary_btn' href='/#'>Get Involved</a>
                    </div>
                </div>
                <span className='date'>2024</span>
            </div>
      </section>
    )
}

export default Sponsor