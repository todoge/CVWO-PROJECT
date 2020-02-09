// component to render announcement to the Users
import React from "react"
import AnnouncementList from "../Admin/AnnouncementList"

// Due to time constraints the announcement is current hard coded and not stored in database
const message = ["App finally deployed on Heroku!","Please email austin9090@hotmail.com to contact me"];


export default ()=>(
        <React.Fragment>
            <AnnouncementList title="Announcement" list={message}/>
        </React.Fragment>
)
