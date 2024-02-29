import bees from '../images/bees.webp';
import festive from '../images/festive.webp';
import pets from '../images/pets.webp';
import lunar from '../images/lunar.webp';
import '../css/work.scss';

function Work() {
    return (
        <section className='work_header'>
            <div className='work_container'>
                <span className='title_heading'>Our <span className='title_heading alt'>Work</span></span>
                <div className='work_btn_container'>
                    <a className='primary_btn' href='/#'>Get Involved</a>
                    <a className='discover_btn' href='/#'>Discover More</a>
                </div>
            </div>
            <div className='work_image_grid'>
                <img src={lunar} alt='' className=''></img>
                <img src={festive} alt='' className=''></img>
                <img src={pets} alt='' className=''></img>
                <img src={bees} alt='' className=''></img>
            </div>
      </section>
    )
}

export default Work