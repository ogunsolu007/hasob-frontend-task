import React from 'react';
import "./common.css";
import userpic from "../../assets/user-profile-pic.jpeg";
import { BiPhoneCall } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar';
function Userprofile() {
    return (
        <>
        <Topbar/>
        <Sidebar/>
            <div className="container">
                <div className="col-1">
                    <div className="heading">
                        <h2>User Profile</h2>
                    </div>
                    <div className="userdetail">
                        <img src={userpic} alt="" className="userpic-detail" />
                        <div className="userdetail-contact">
                            <div className="infos">
                                <p>User profile</p>
                            </div>

                            <div className="infos">
                                <BiPhoneCall />
                                <p> 08069392305</p>

                            </div>
                            <div className="infos">
                                <HiOutlineMail />
                                <p>  chukwuma@hasob.ng</p>
                            </div>
                            <div className="infos">
                                <FaLinkedin />
                                <p> www.linkldin.com/chukwu</p>
                            </div>

                        </div>


                    </div>
                </div>
                <div className="col-2">
                    <div className="heading">
                        <button className="edit">Edit Info</button>
                    </div>
                    <div className="user-detail">
                        <form >
                            <textarea name="summary" id="summary" cols="30" rows="8" placeholder="Summary"></textarea>
                        </form>
                        <div className="userdetail-contact-2">
                            <div className="infos-2">
                                <h4>Full Name: </h4>
                                <p> chukwuma Albert Obiazor</p>
                            </div>
                            <div className="infos-2">
                                <h4>Email:</h4>
                                <p>  chukwuma@hasob.ng</p>
                            </div>
                            <div className="infos-2">
                                <h4>Phone#:</h4>
                                <p>08122278609</p>
                            </div>

                            <div className="infos-2">
                                <h4>Office:</h4>
                                <p>General Office 1</p>
                            </div>
                            <div className="infos-2">
                                <h4>Designation:</h4>
                                <p> chukwuma Albert Obiazor</p>
                            </div>
                            <div className="infos-2">
                                <h4>Social Network</h4>
                                <div>
                                    <FaLinkedin />        <FaTwitter />        <FaFacebook />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Userprofile
