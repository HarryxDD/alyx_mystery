import React, { useState } from 'react'

import './Registration.css'

const Registration = () => {
    const [state, setState] = useState({
        fname: "",
        uname: "",
        email: "",
        phone: "",
        password: "",
        gender: "",
        password_confirm: ""
    });

    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        })
    }

    function handleSubmit() {
        console.log(state)
        if (state.password != state.password_confirm) {
            alert("Wrong password confirm!")
        } 
        else alert('Register Success!')
    }

  return (
    <div className="app__registration">
        <div className="registration__title">Registration</div>
        <form action="#" onSubmit={handleSubmit}>
            <div className="registration__user-details">
                <div className="registration__input-box">
                    <span className="" details>Full name</span>
                    <input name="fname" type="text" placeholder="Enter your name" required 
                            onChange={handleChange}
                            value={state.fname}/>
                </div>

                <div className="registration__input-box">
                    <span class="" details>Username</span>
                    <input name="uname" type="text" placeholder="Enter your username" required 
                        onChange={handleChange}
                        value={state.uname}/>
                </div>

                <div className="registration__input-box">
                    <span className="" details>Email</span>
                    <input name="email" type="email" placeholder="Enter your email" required 
                        onChange={handleChange}
                        value={state.email}/>
                </div>

                <div className="registration__input-box">
                    <span className="" details>Phone Number</span>
                    <input name="phone" type="number" placeholder="Enter your number" required 
                            onChange={handleChange}
                            value={state.phone}/>
                </div>

                <div className="registration__input-box">
                    <span className="" details>Password</span>
                    <input name="password" type="password" placeholder="Enter your password" required 
                        onChange={handleChange}
                        value={state.password}/>
                </div>

                <div className="registration__input-box">
                    <span className="" details>Confirm Password</span>
                    <input name="password_confirm" type="password" placeholder="Confirm your password" required
                            onChange={handleChange}
                            value={state.password_confirm}/>
                </div>

                <div className="registration__gender-details" name="gender"
                    onChange={handleChange}
                    value={state.gender}>
                    <input type="radio" name="gender" id="dot-1" value="Male"/>
                    <input type="radio" name="gender" id="dot-2" value="Female"/>
                    <input type="radio" name="gender" id="dot-3" value="Prefer not to say"/>
                    <span className="registration__gender-title">Gender</span>
                    <div className="registration__category">
                        <label for="dot-1">
                            <span class="registration__dot one"></span>
                            <span className="registration__gender">Male</span>
                        </label>

                        <label for="dot-2">
                            <span className="registration__dot two"></span>
                            <span className="registration__gender">Female</span>
                        </label>

                        <label for="dot-3">
                            <span className="registration__dot three"></span>
                            <span className="registration__gender">Prefer not to say</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="registration__button">
                <input type="submit" value="Register" />
            </div>
        </form>
    </div>
  )
}

export default Registration