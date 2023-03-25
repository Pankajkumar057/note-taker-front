import React, { useState } from "react";
import "./signup.css";
import { Navigate } from "react-router-dom";

const SignUp = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [Confirm, setConfirm] = useState("");
    const [redirect, setredirect] = useState(false);

    const url = process.env.REACT_APP_API;


    const validateEmail = (email) => {
        {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }

    const validatePassword = (password) => {
        let error = '';

        if (!password) {
            error = 'Password is required';
        } else if (password.length < 8) {
            error = 'Password must be at least 8 characters long';
        } else if (!/[A-Z]/.test(password)) {
            error = 'Password must contain at least one uppercase letter';
        } else if (!/[a-z]/.test(password)) {
            error = 'Password must contain at least one lowercase letter';
        } else if (!/\d/.test(password)) {
            error = 'Password must contain at least one number';
        }
        return error;
    }

    const HandleClick = () => {
        if (email, password, Confirm) {
            const isVallid = validateEmail(email);
            const isPasswd = validatePassword(password);
            if (isVallid) {
                if (isPasswd !== "") {
                    alert(isPasswd)
                }
                else {
                    if (password === Confirm) {
                        fetch(`${url}/register`, {
                            method: "POST",
                            headers: { 'Content-Type': "application/json" },
                            body: JSON.stringify({
                                email: email,
                                password: password
                            })
                        }).then((res) => res.json()
                        ).then((data) => {
                            console.log(data);
                            if (data.error) {
                                alert(data.error)
                            } else {
                                setemail("")
                                setpassword("")
                                setConfirm("")
                                alert(data.message)
                                setredirect(true)

                            }
                        })
                    } else {
                        alert("Password and confirm password must be same")
                    }

                }
            } else {
                alert("Please enter a valid email")
            }
        } else {
            alert("Please Fill all Fields")
        }

    }
    const performRedirect = () => {
        if (redirect) {
            return <Navigate to="/" />
        }
    }
    return (

        <div className="container">
            {performRedirect()}

            <div className="Rectangle1">

                <div className="logo">
                    <p>Create New Account</p>
                </div>
                <div className="inputs3">
                    <div>
                        <input type="email" className="email" placeholder="User Id" onChange={(e) => { setemail(e.target.value) }} value={email} />
                    </div>
                    <div className="inputpass">
                        <input type='password' className="password" placeholder="Password" onChange={(e) => { setpassword(e.target.value) }} value={password} />
                    </div>
                    <div className="inputpass">
                        <input type='password' className="password" placeholder="Confirm Password" onChange={(e) => { setConfirm(e.target.value) }} value={Confirm} />
                    </div>
                </div>
                <div className="buttons">
                    <button className="button1" onClick={HandleClick}>CONTINUE</button>
                </div>
            </div>

        </div>
    )
}

export default SignUp;