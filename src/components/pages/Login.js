import React, { useState } from 'react'
import Divider from '@material-ui/core/Divider';
import "./login.css"
import { Link } from 'react-router-dom';
function Login() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="sign-in">
            {/* tab */}
            <div className="form-tab-container">
                <div className="block-tabs">
                    <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}>Sign in</div>
                    <Divider orientation="vertical" style={{ width: "4px" }} />

                    <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}>Sign up</div>
                </div>

                <div className="form-content">
                    <div className={toggleState === 1 ? "form  active-form" : "form"}>
                        <form className="home" >
                            <input type="text" placeholder="Email" className="text" />
                            <input type="password" placeholder="Confirm Password" className="text" />

                            <div className="form-flex">
                                <div>
                                    <input type="checkbox" name="my-checkbox" id="opt-in" />
                                    <label for="opt-in">Remember me</label>
                                </div>

                                <p><a href="#">Forgot password?</a></p>
                            </div>
                            <button className="btn  sign-btn">   <Link to="/Userprofile">Sign in</Link></button>

                            <p>Don't have an account? <a href="#">signup</a>
                            </p>
                        </form>
                    </div>
                    <div className={toggleState === 2 ? "form  active-form" : "form"}>
                        <form className="home">
                            <input type="text" placeholder="First Name" className="text" />
                            <input type="text" placeholder="Last Name" className="text" />
                            <input type="email" placeholder="Email" className="text" />
                            <input type="password" placeholder="Password" className="text" />
                            <input type="password" placeholder="Confirm Password" className="text" />
                            <button className="btn  sign-btn">Sign up</button>

                            <p>Already have an account? <a href="#">sign in</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
