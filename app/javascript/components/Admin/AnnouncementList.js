// List structure to contain the announcements
import React from "react"

export default (props)=>(
    <div className="container" id="announcement">
        <div className="text-center my-2" id="title-font">{props.title}</div>
        <hr className="mt-0 black-hr" />
        {props.list.map((msg)=> (<p key={msg}>{msg}</p>))}
    </div>
);
