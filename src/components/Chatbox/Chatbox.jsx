// eslint-disable-next-line no-unused-vars
import Recat from 'react'
import './Chatbox.css'
import assets from '../../assets/assets'

const Chatbox = () =>{
    return(
        <div className='chat-box'>
            <div className='chat-user'>
                <img src={assets.profile_img} alt=""/>
                <p>Yogesh Bidvae <img className='dot' src={assets.green_dot} alt=''/></p>
                <img src={assets.help_icon} alt=''/>
            </div>

            <div className='chat-msg'>
            <div className='s-msg'>
                    <p className='msg'>Heloo everyone this side yogesh......</p>
                    <div>
                        <img src={assets.profile_img} alt=""/>
                        <p>3:30pm</p>
                    </div>

                </div>
                <div className='s-msg'>
                    <img className='msg-img' src={assets.pic1} alt=''/>
                    <div>
                        <img src={assets.profile_img} alt=""/>
                        <p>3:30pm</p>
                    </div>

                </div>
                <div className='r-msg'>
                    <p className='msg'>Hii guys....</p>
                    <div>
                        <img src={assets.profile_img} alt=""/>
                        <p>3:30pm</p>
                    </div>

                </div>

            </div>





            <div className='chat-input'>
                <input type='text' placeholder='Send a message'/>
                <input type='file' id='image' accept='image/png, image/jpeg' hidden/>
                <label htmlFor='image'>
                    <img src={assets.gallery_icon} alt=""/>
                </label>
                <img src={assets.send_button} alt=""/>

            </div>

        </div>
    )
}

export default Chatbox