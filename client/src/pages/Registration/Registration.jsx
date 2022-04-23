import React from 'react'

import './Registration.css'

const Registration = () => {
  return (
    <div className="app__registration">
        <div className="registration__title">Registration</div>
        <form action="#">
            <div className="registration__user-details">
                <div className="registration__input-box">
                    <span className="" details>Full name</span>
                    <input type="text" placeholder="Enter your name" required />
                </div>

                <div className="registration__input-box">
                    <span class="" details>Username</span>
                    <input type="text" placeholder="Enter your username" required />
                </div>

                <div className="registration__input-box">
                    <span className="" details>Email</span>
                    <input type="text" placeholder="Enter your email" required />
                </div>

                <div className="registration__input-box">
                    <span className="" details>Phone Number</span>
                    <input type="text" placeholder="Enter your number" required />
                </div>

                <div className="registration__input-box">
                    <span className="" details>Password</span>
                    <input type="text" placeholder="Enter your password" required />
                </div>

                <div className="registration__input-box">
                    <span className="" details>Confirm Password</span>
                    <input type="text" placeholder="Confirm your password" required />
                </div>

                <div className="registration__gender-details">
                    <input type="radio" name="gender" id="dot-1" />
                    <input type="radio" name="gender" id="dot-2" />
                    <input type="radio" name="gender" id="dot-3" />
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