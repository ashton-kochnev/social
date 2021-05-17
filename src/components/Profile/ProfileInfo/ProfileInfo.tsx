import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <img
                className={classes.img}
                src='https://www.w3schools.com/howto/img_snow_wide.jpg'
                alt='img'/>
        </div>
    )
}

export default ProfileInfo;