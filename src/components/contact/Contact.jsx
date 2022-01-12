import { useState } from 'react';
import './contact.scss'

export default function Contact() {

    const [message, setMessage] = useState(false)
    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true);
    }
    return (
        <div className='contact' id='contact'>
            <div className='left'>
                <img src='assets/woman-2.jpg' alt=''/>
            </div>
            <div className='right'>
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type='email' placeholder='Email'/>
                    <textarea placeholder='Message'></textarea>
                    <button type='submit'>Send</button>
                    {message && <span>Thanks, I will reach out to you soon!</span>}
                </form>
            </div>
        </div>
    )
}




