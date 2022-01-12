import './Intro.scss'
import {FaArrowDown }from 'react-icons/fa'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'


export default function Intro() {
    const textRef = useRef();
    useEffect(()=>{
        init(textRef.current, 
            { showCursor: true,
               backDelay: 1500,
               backSpeed: 60,
               strings: ['Android Application', 'Website Development', 'Website Design', 'Fullstack Developer'] })
    }, []);
    return (
        <div className='intro' id='intro'>
            <div className='left'>
                <div className='imgContainer'>
                    <img src="assets/lady.jpg" alt='lady'/>
                </div>
            </div>
            <div className='right'>
                <div className='wrapper'>
                    <h2>Hey There, I'm</h2>
                    <h1>Michael Wambua</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href='#portfolio'>
                    <FaArrowDown class= "arrowIcon" />
                </a>
            </div>
        </div>
    )
}
