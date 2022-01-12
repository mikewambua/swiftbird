import './Topbar.scss'
import { FaEnvelope} from 'react-icons/fa'
import { AiTwotonePhone } from 'react-icons/ai'

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className= {'topbar ' + (menuOpen && 'active')} id='topbar'>
            <div className='wrapper'>
                <div className='left'>
                    <a href="#intro" className='logo'>mica</a>
                    <div className='itemContainer'>
                        <AiTwotonePhone className='icon'/>
                        <span>+254 712892706</span>
                    </div>
                    <div className='itemContainer'>
                        <FaEnvelope className='icon'/>
                        <span>mica@mica.com</span>
                    </div>
                </div>
                <div className='right'>
                    <div className='hamburger' onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
