// import { BiLaptop } from 'react-icons/bi'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
// import { BsTriangleFill} from 'react-icons/bs'
import './Works.scss'
import { useState } from 'react'

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        {
            id:"1",
            icon:'assets/img-2.jpg',
            title: 'Android Development',
            desc: 'I design and develop scalable android applications',
            img:'assets/img-2.jpg',
        },
        {
            id:"2",
            icon:'assets/img-7.jpg',
            title: 'Website Development',
            desc: 'I design and develop responsive and SEO optimized websites',
            img:'assets/img-7.jpg',
        },
        {
            id:"3",
            icon:"assets/img-3.jpg",
            title: 'Digital Content Creation',
            desc: 'I create digital content for organizations',
            img:'assets/img-3.jpg',
        },
        {
            id:"4",
            icon:"assets/img-4.jpg",
            title: 'Online Advertising',
            desc: 'Social media plays a critical role in advertsing a company\'s product. I help clients in advertising their business through social media',
            img:'assets/img-4.jpg',
        },
    ];

    const handleClick = (direction) =>{
        direction === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide -1:2):
        setCurrentSlide(currentSlide <data.length -1 ? currentSlide + 1:0);
    }
    return (
        <div className='works' id='works'>
            <div className='slider' style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d)=>(
                    <div className='container'>
                    <div className='item'>
                        <div className='left'>
                            <div className='leftContainer'>
                                <div className='imgContainer'>
                                    <img src={d.icon}className='imgIcon' alt=''/>
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className='right'>
                            <img src={d.img} alt=''/>
                        </div>
                    </div>
                </div>
                ))};
                
            </div>
            <FaAngleLeft className="arrowIcon left" onClick={() =>handleClick('left')}/>
            <FaAngleRight className="arrowIcon right" onClick={() =>handleClick() }/>
        </div>
    )
}
