import terminal from '../images/terminal.webp';
import '../css/helloWorld.scss';
import "bootstrap-icons/font/bootstrap-icons.css";

function HelloWorld() {
    return (
        <section class='image_header'>
            <div class='outer_container'>
                <div className='pic4'>
                    <img src={terminal} alt='' class='terminal'></img>
                </div>
                <div class='text_content'>
                    <span class='heading'>Hello World</span>
                    <div class='hero_content'>
                        <span class='sub_heading'>We are the principal representative body for UNSW computing students</span>
                        <div class='hero_btn'>
                            <div class='hero_btn_inner'>
                                <a class='hero_link' href='/#'>Get Involved</a>
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

export default HelloWorld