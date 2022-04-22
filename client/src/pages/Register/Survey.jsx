import React from 'react'

import './Survey.css'

const Survey = () => {
  return (
    <div className="app__survey">
        <div className="survey__title">Registration</div>
        <form action="#">
            <div className="survey__user-details">
                <div className="survey__input-box">
                    <span className="" details>Full name</span>
                    <input type="text" placeholder="Enter your name" required />
                </div>

                <div className="survey__input-box">
                    <span class="" details>Username</span>
                    <input type="text" placeholder="Enter your username" required />
                </div>

                <div className="survey__input-box">
                    <span className="" details>Email</span>
                    <input type="text" placeholder="Enter your email" required />
                </div>

                <div className="survey__input-box">
                    <span className="" details>Phone Number</span>
                    <input type="text" placeholder="Enter your number" required />
                </div>

                <div className="survey__input-box">
                    <span className="" details>Password</span>
                    <input type="text" placeholder="Enter your password" required />
                </div>

                <div className="survey__input-box">
                    <span className="" details>Confirm Password</span>
                    <input type="text" placeholder="Confirm your password" required />
                </div>

                <div className="survey__gender-details">
                    <input type="radio" name="gender" id="dot-1" />
                    <input type="radio" name="gender" id="dot-2" />
                    <input type="radio" name="gender" id="dot-3" />
                    <span className="survey__gender-title">Gender</span>
                    <div className="survey__category">
                        <label for="dot-1">
                            <span class="survey__dot one"></span>
                            <span className="survey__gender">Male</span>
                        </label>

                        <label for="dot-2">
                            <span className="survey__dot two"></span>
                            <span className="survey__gender">Female</span>
                        </label>

                        <label for="dot-3">
                            <span className="survey__dot three"></span>
                            <span className="survey__gender">Prefer not to say</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="survey__button">
                <input type="submit" value="Register" />
            </div>
        </form>
    </div>
  )
}

export default Survey