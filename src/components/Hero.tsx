'use client'
import terminal from '../images/terminal.webp';
import '../css/hero.scss';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useRef, useEffect } from 'react';

function Hero() {
    const container = useRef<HTMLDivElement>(null);
    const mask = useRef<HTMLDivElement>(null);
    let initial:number = 0;

    useEffect(() => {requestAnimationFrame(expand)});

    const expand = () => {
        let size:boolean = window.innerWidth >= 1200;
        mask.current!.style.maskSize = ((size ? 0.8 : 1) + progress()) * 100 + '%';
        mask.current!.style.height = ((size ? 0.7 : 1) + progress()) * 100 + 'vh';
        mask.current!.style.top = (size ? Math.max((0.2 - progress() * 0.68) * 100, 0) : 0) + 'vh';
        requestAnimationFrame(expand);
    }

    const progress = () => {
        const curr:number = mask.current!.offsetTop / (container.current!.getBoundingClientRect().height - window.innerHeight);
        return initial += (curr - initial) * 0.2;
    }

    const icons:string[] = ['tiktok', 'discord', 'github'];

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
                            <span className='sub_heading'>We are the principal representative body for (redacted) computing students</span>
                            <a className='primary_btn' href='/#'>Get Involved</a>
                        </div>
                    </div>
                    <span className='date'>2024</span>
                    <div className='social_links'>
                        {icons.map((item) => {
                            return (
                                <a href='/#'><i className={'bi bi-' + item}></i></a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero