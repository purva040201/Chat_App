/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react'; // Corrected typo in import statement
import './RightSidebar.css';
import assets from '../../assets/assets';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { signOut } from 'firebase/auth'; // Import signOut from Firebase
import { auth } from '../../config/firebase'; // Import the Firebase auth object

const RightSidebar = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const logout = async () => {
        try {
            await signOut(auth); // Sign out the user
            navigate('/login'); // Navigate to the login page
        } catch (error) {
            console.error("Error logging out: ", error);
        }
    };

    return (
        <div className='rs'>
            <div className='rs-profile'>
                <img src={assets.profile_img} alt=''/>
                <h3>Yogesh Bidave <img src={assets.green_dot} className='dot' alt=''/></h3>
                <p>Hey, there I am Yogesh</p>
            </div>
            <hr/>
            <div className='rs-media'>
                <p>Media</p>
                <div>
                    <img src={assets.pic1} alt=""/>
                    <img src={assets.pic2} alt=""/>
                    <img src={assets.pic3} alt=""/>
                    <img src={assets.pic4} alt=""/>
                    <img src={assets.pic1} alt=""/>
                    <img src={assets.pic2} alt=""/>
                </div>
            </div>
            <button onClick={logout}>Logout</button> {/* Attach the logout function */}
        </div>
    );
};


export default RightSidebar;
