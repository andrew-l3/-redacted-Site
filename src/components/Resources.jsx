import '../css/resources.scss';

function Resources() {
    return (
        <section class='resources_header'>
            <div class='work_container'>
                <span class='title_heading'>Student <span class='title_heading alt'>Resources</span></span>
                <div class='work_btn_container'>
                    <div class='work_hero_btn'>
                        <a class='work_hero_link' href='/#'>Get Involved</a>
                        <i class="bi bi-arrow-right"></i>
                    </div>
                    <a class='work_hero_link lgt' href='/#'>Discover More</a>
                </div>
            </div>
            <div class='resources_accordion'>
                <div class='accordion_item'>
                    <a class='resources_link' href='/#'>Circles</a>
                    <span class='resources_txt'>A UNSW degree planner where you can explore and validate your degree structure.</span>
                </div>
                <div class='accordion_item'>
                    <a class='resources_link' href='/#'>Structs</a>
                    <span class='resources_txt'>An educational data structures and algorithms platform.</span>
                </div>
                <div class='accordion_item'>
                    <a class='resources_link' href='/#'>Job Board</a>
                    <span class='resources_txt'>A place where CSESoc students can look for relevant job opportunities.</span>
                </div>
                <div class='accordion_item'>
                    <a class='resources_link' href='/#'>Notangles</a>
                    <span class='resources_txt'>Trimester timetabling tool - no more timetable tangles!</span>
                </div>
                <div class='accordion_item'>
                    <a class='resources_link' href='/#'>CSElectives</a>
                    <span class='resources_txt'>Read course reviews to help you pick your electives or even write your own!</span>
                </div>
                <div class='accordion_item'>
                    <a class='resources_link' href='/#'>CompClub</a>
                    <span class='resources_txt'>Promoting computing to high school students.</span>
                </div>
                <div class='accordion_item'>
                    <a class='resources_link' href='/#'>CSESoc Media</a>
                    <span class='resources_txt'>All things content.</span>
                </div>
                <div class='accordion_item'>
                    <a class='resources_link' href='/#'>First Year Guide</a>
                    <span class='resources_txt'>The ultimate guide to conquering first year at CSE.</span>
                </div>
                <div class='accordion_item last'>
                    <a class='resources_link' href='/#'>Enrolment Guide</a>
                    <span class='resources_txt'>Learn how to get a headstart on uni.</span>
                </div>
            </div>
      </section>
    )
}

export default Resources