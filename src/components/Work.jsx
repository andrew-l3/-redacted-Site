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
                    <div class='work_hero_btn'>
                        <a class='work_hero_link' href='/#'>Get Involved</a>
                        <i class="bi bi-arrow-right"></i>
                    </div>
                    <a class='work_hero_link lgt' href='/#'>Discover More</a>
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