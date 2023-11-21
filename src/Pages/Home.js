import React from 'react';

import pic_edit from '../Images/pic_edit.png';

// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import GithubIcon from "@material-ui/icons/GitHub";
// import EmailIcon from "@material-ui/icons/Email";
import "../Styles/Home.css";




const Home = () => {

    
        
        

    return (
        
            <div className='home'  >
                
            
            <img src={pic_edit} alt='pic_edit' className='logo' />
            

                <div className='about'>
                    
                    <h2>Hi, I am Sinera</h2>

                    <div className="prompt">
                        <p>Currenly I am a IT undergraduate in University of Moratuwa, hoping to be a IT professonel with true desire of serving to my country with gained knowledge</p>
                        {/* <GithubIcon />
                        <EmailIcon />
                        <LinkedInIcon /> */}
                    </div>


                </div>


            </div>
          
    )
}
export default Home;