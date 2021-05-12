import React from 'react'
import logo from "../assets/logo.jpeg"
import userpic from "../assets/user-profile-pic.jpeg"
import "./topbar.css"

function Topbar() {
    return (
        <>
            <div className="top-bar">
                <img src={logo} alt="" className="logo" />
                <div className="user-name-job-pic">
                    <img src={userpic} alt="" className="userpic-top" />
                    <div className="user-name-job">
                        <p>Chukwu Albert Obiazor</p>
                        <p>Software Developer</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topbar
