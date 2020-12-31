import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
              image="https://i.pinimg.com/originals/57/53/74/575374bf227f9845685a2950dd976f88.png"
              profileSrc="https://i.ibb.co/TLvw0fR/IMG-20201207-084505.jpg"
              title="Priti Kumari"
            />

            <Story 
              image="https://i.redd.it/y809f4mdwqn01.jpg"
              profileSrc="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Priya"
            />

            <Story 
              image="https://5.imimg.com/data5/WM/OX/MY-33847593/doremon-cartoon-wallpaper-500x500.jpg"
              profileSrc="https://www.newmynamepix.com/upload/post/sample/1589515256_New_Beautiful_Girl_Pictures_Profile_With_Name_Images.jpg"
              title="Angle_Priya"
            />
            <Story 
              image="https://pm1.narvii.com/6661/d84ea6243ea791e19778091eb87ae2acb9c26384_00.jpg"
              profileSrc="https://www.newmynamepix.com/upload/post/sample/1589448204_Print_My_Name_On_Beautiful_Girl_Whatsapp_Profile_Photo.jpg"
              title="Sakshi"
            />
            <Story 
              image="https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg"
              profileSrc="https://mynamepix.com/images/styles/cool-girl_name_pix_3937.jpg"
              title="Komal Sahu"
            />
            
        </div>
    )
}

export default StoryReel
