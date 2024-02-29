import '../css/resources.scss';
import Sites from './Sites.jsx';

function Resources() {
    return (
        <section class='resources_header'>
            <div class='work_container'>
                <span class='title_heading'>Student <span class='title_heading alt'>Resources</span></span>
                <div class='work_btn_container'>
                    <a className='primary_btn' href='/#'>Get Involved</a>
                    <a class='discover_btn' href='/#'>Discover More</a>
                </div>
            </div>
            <Sites/>
      </section>
    )
}

export default Resources