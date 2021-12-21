import React from 'react'
import SideBarOption from "./SideBarOption" ; 
import "./SideBar.css"

function SideBar() {
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
            <SideBarOption option="Home"/>
            <SideBarOption option="Search"/>
            <SideBarOption option="Your Library "/>
        </div>
    )
}

export default SideBar
