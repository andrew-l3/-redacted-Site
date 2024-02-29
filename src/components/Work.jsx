import bees from '../images/bees.webp';
import festive from '../images/festive.webp';
import pets from '../images/pets.webp';
import lunar from '../images/lunar.webp';
import '../css/work.scss';

function Work() {
    return (
        <section class='work_header'>
            <div class='work_container'>
                <span class='title_heading'>Our <span class='title_heading alt'>Work</span></span>
                <div class='work_btn_container'>
                    <a className='primary_btn' href='/#'>Get Involved</a>
                    <a class='discover_btn' href='/#'>Discover More</a>
                </div>
            </div>
            <div class='work_image_grid'>
                <img src={lunar} alt='' class=''></img>
                <img src={festive} alt='' class=''></img>
                <img src={pets} alt='' class=''></img>
                <img src={bees} alt='' class=''></img>
            </div>
      </section>
    )
}

export default Work