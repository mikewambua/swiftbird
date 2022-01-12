import { FiCornerDownRight} from 'react-icons/fi'
import { FaYoutube} from 'react-icons/fa'
import './Testimonials.scss'

export default function Testimonials() {

    const data= [
        {
            id:"1",
            name:'Melissa',
            title: 'Marketing Director, Google Inc.',
            img:'assets/woman-1.jpg',
            icon:'',
            desc:'You created an excellent content for our new production line. Thanks'
        },
        {
            id:"4",
            name:'James',
            title: 'Advertising Manager, Swiftbirds.',
            img:'assets/woman-1.jpg',
            icon:'',
            desc:'Thanks for the nice content for our products.'
        },
        {
            id:"2",
            name:'Andrew Mattson',
            title: 'CEO, Travel Tours',
            img:'assets/lady.jpg',
            icon:'',
            desc:'Thanks buddy for the nice landing page for our website.',
            featured: true,
        },
        {
            id:"3",
            name:'Sharon',
            title: 'Public Relations Director, Plutonix.',
            img:'assets/woman-1.jpg',
            icon:'',
            desc:'Our website has attracted hundreds of visitors thanks to your SEO optimization.'
        },
    ]
    return (
        <div className='testimonials' id='testimonials'>
            <h1>Testimonials</h1>
            <div className='container'>
                {data.map((p)=>
                    <div className={p.featured ? 'card featured': 'card'}>
                        <div className='top'>
                            <FiCornerDownRight className="left"/>
                            <img src={p.img} className='user' alt=''/>
                            <FaYoutube className='right'/>
                        </div>
                        <div className='center'>
                         {p.desc}
                        </div>
                        <div className='bottom'>
                            <h2>{p.name}</h2>
                            <h4>{p.title}</h4>
                        </div>
                    </div>
                 )}
                
            </div>
        </div>
    )
}
