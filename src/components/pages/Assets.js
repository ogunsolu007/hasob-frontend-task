import React from 'react'
import "./common.css"
import "./asset.css"
import assetpic from "../../assets/asset.jpeg"
import Topbar from '../Topbar';
import Sidebar from '../Sidebar';
import { BiPhoneCall } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
function Userprofile() {
    return (
        <>
            <Topbar />
            <Sidebar />
            <div className="container">
                <div className="col-1">
                    <div className="heading">
                        <h2>User Profile</h2>
                    </div>
                    <div className="userdetail">
                        <img src={assetpic} alt="" className="userpic-detail" />
                        <div className="userdetail-contact">

                            <div className="infos-1-head">
                                <p>Vendor Details</p>
                            </div>
                            <div className="infos-1">
                                <BiPhoneCall />
                                <p>HP Nigeria Limited</p>

                            </div>

                            <div className="infos-1">
                                <BiPhoneCall />
                                <p> 08069392305</p>

                            </div>
                            <div className="infos-1">
                                <HiOutlineMail />
                                <p>  chukwuma@hasob.ng</p>
                            </div>
                            <div className="infos-1">

                                <p> www.hp.nigeria.com</p>
                            </div>

                        </div>

                    </div>

                </div>
                <div className="col-2">
                    <div className="heading-2">
                        <div className="heading-2-flex">
                            <h2>Basic Information</h2>
                            <div className="btn2">
                                <button className="edit2">Add Asset</button>
                                <button className="edit2">Edit Asset</button>
                            </div>
                        </div>

                    </div>
                    <div className="user-detail">
                        <form >
                            <textarea name="summary" id="summary" cols="30" rows="8" placeholder="Summary"></textarea>
                        </form>
                        <div className="userdetail-contact-2">
                            <div className="infos-3">
                                <h4>Asset Id: </h4>
                                <p>0113786</p>
                            </div>
                            <div className="infos-3">
                                <h4>Serial #:</h4>
                                <p>08122278609</p>
                            </div>
                            <div className="infos-3">
                                <h4>Date of Purchase:</h4>
                                <p>23/11/2019</p>
                            </div>

                            <div className="infos-3">
                                <h4>Status:</h4>
                                <p>Assigned</p>
                            </div>
                            <div className="infos-3">
                                <h4>Location:</h4>
                                <p>General Office 1</p>
                            </div>
                            <div className="infos-3">
                                <h4>Assigned to:</h4>
                                <p>Snr. Php Developer</p>
                            </div>
                            <div className="infos-3">
                                <h4>Issued_date:</h4>
                                <p>7th Dec 2019</p>
                            </div>
                            <div className="infos-3">
                                <h4>Due_date:</h4>
                                <p>30th Sept 2020</p>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Userprofile
