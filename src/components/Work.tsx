import bees from '../images/bees.webp';
import festive from '../images/festive.webp';
import pets from '../images/pets.webp';
import lunar from '../images/lunar.webp';
import '../css/work.scss';

function Work() {
    return (
        <section className='work_header'>
            <div className='outer_work_container'>
                <div className='work_container'>
                    <span className='title_heading'>Our <span className='title_heading alt'>Work</span></span>
                    <div className='work_btn_container'>
                        <a className='primary_btn' href='/#'>Get Involved</a>
                        <a className='discover_btn' href='/#'>Latest Events</a>
                    </div>
                </div>
                <q className='sub_heading'>We are one of the biggest and most active societies at (redacted), catering to over 3500 (redacted) students spanning across degrees in Computer Science, Software Engineering, Bioinformatics and Computer Engineering. We run a wide-variety of events for fun, learning new skills and careers. For full listings, check out the (redacted) <a className='inner_link' href='/#'>Discord</a> or our <a className='inner_link' href='/#'>Facebook</a> page!</q>
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