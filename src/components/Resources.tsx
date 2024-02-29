import '../css/resources.scss';
import Sites from './Sites';

function Resources() {
    return (
        <section className='resources_header'>
            <div className='work_container'>
                <span className='title_heading'>Student <span className='title_heading alt'>Resources</span></span>
                <div className='work_btn_container'>
                    <a className='primary_btn' href='/#'>Get Involved</a>
                    <a className='discover_btn' href='/#'>Discover More</a>
                </div>
            </div>
            <Sites/>
      </section>
    )
}

export default Resources