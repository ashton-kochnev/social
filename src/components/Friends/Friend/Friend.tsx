import React from 'react';
import {SidebarType} from "../../../Redux/state";

const Friend: React.FC<SidebarType> = (props) => {
    return (
        <div>
            <img src={props.link} alt="img"/>
            <div>{props.name}</div>
        </div>
    )
}

export default Friend;