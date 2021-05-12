import React from 'react'
import { Link } from "react-router-dom"
import { SidebarData } from "./SidebarData"
import "./Sidebar.css"

import userpic from "../assets/user-profile-pic.jpeg"

function Sidebar() {
    return (
        <>
       
            <nav className="sidebar-menu">
                <img src={userpic} alt="" className="userpic" />
                <ul className="side-menu-items">
                    {SidebarData.map((item, index) => {
                        return (
                            <button>
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.title}
                                    </Link>
                                </li>
                            </button>

                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Sidebar
