'use client'
import terminal from '../images/terminal.webp';
import '../css/hero.scss';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from 'react';
import useRefs from 'react-use-refs';

function Hero() {
    const [container, mask] = useRefs(null);
    let initial = 0;

    useEffect(() => {requestAnimationFrame(expand)});

    const expand = () => {
        mask.current.style.maskSize = (0.688 + progress()) * 100 + '%';
        requestAnimationFrame(expand);
    }

    const progress = () => {
        const curr = mask.current.offsetTop / (container.current.getBoundingClientRect().height - window.innerHeight);
        return initial += (curr - initial) * 0.2;
    }

    return (
        <section ref={container} className='hero_header'>
            <div ref={mask} className='hero_mask'>
                <div className='outer_container'>
                    <div className='terminal_image'>
                        <img src={terminal} alt='' className='terminal'></img>
                    </div>
                    <div className='text_content'>
                        <span className='heading'>Hello World</span>
                        <div className='hero_content'>
                            <span className='sub_heading'>We are the principal representative body for UNSW computing students</span>
                            <a className='primary_btn' href='/#'>Get Involved</a>
                        </div>
                    </div>
                    <span className='date'>2024</span>
                </div>
            </div>
        </section>
    )
}

export default Hero