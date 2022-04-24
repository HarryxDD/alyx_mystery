import React, { useState } from 'react'

import './Survey.css'

const Survey = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        age: "",
        profession: "",
        recommend: "",
        comment: ""
    });

    const [checks, setCheckState] = useState({
        c: false,
        cpp: false,
        cs: false,
        java: false,
        python: false,
        javascript: false,
        other: false
    })

    function handleCheckState(evt) {
        const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
      
        setCheckState({
          ...checks,
          [evt.target.name]: value
        });
    }

    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.id]: value
        })
    }

    function handleSubmit() {
        console.log(state)
        console.log(checks)
        alert('Thanks for filling the form!')
    }
    
  return (
    <div className="app__survey">
        <h1>ALYX's Client Survey Form</h1>
  
        <form id="form" onSubmit={handleSubmit}>
            <div class="form__control">
                <label for="name" id="label-name">
                    Name
                </label>
    
                <input type="text"
                    id="name"
                    placeholder="Enter your name" 
                    value={state.name}
                    onChange={handleChange} required/>
            </div>

            <div class="form__control">
                <label for="email" id="label-email">
                    Email
                </label>
    
                <input type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={state.email}
                    onChange={handleChange} required/>
            </div>

            <div class="form__control">
                <label for="age" id="label-age">
                    Age
                </label>
    
                <input type="text"
                    id="age"
                    placeholder="Enter your age"
                    value={state.age}
                    onChange={handleChange} required/>
            </div>
  
            <div class="form__control">
                <label for="role" id="label-role">
                    Which profession best describes you?
                </label>
                
                <select name="profession" id="profession"
                        onChange={handleChange}
                        value={state.profession}>
                    <option id="profession">Choose one option</option>
                    <option id="profession" value="student">Student</option>
                    <option id="profession" value="intern">Intern</option>
                    <option id="profession" value="professional">
                        Professional
                    </option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div class="form__control">
                <label>
                    Would you recommed ALYX
                    to a friend?
                </label>
    
                <label for="recommed-1">
                    <input type="radio"
                        id="recommend"
                        name="recommend"
                        value="yes"
                        required
                        checked={state.recommend === "yes"}
                        onChange={handleChange}/>Yes
                </label>
                <label for="recommed-2">
                    <input type="radio"
                        id="recommend"
                        name="recommend"
                        value="no"
                        checked={state.recommend === "no"}
                        onChange={handleChange}/>No
                </label>
                <label for="recommed-3">
                    <input type="radio"
                        id="recommend"
                        name="recommend"
                        value="maybe"
                        checked={state.recommend === "maybe"}
                        onChange={handleChange}/>Maybe
                </label>
            </div>
  
            <div class="form__control" id="itemForm">
                <label>Languages and Frameworks known
                    <small>(Check all that apply)</small>
                </label>

                <label for="inp-1" class="item">
                    <input type="checkbox"
                        name="c"
                        value="C"
                        checked={checks.c}
                        onChange={handleCheckState}/>C
                    </label>

                <label for="inp-2" class="item">
                    <input type="checkbox"
                        name="cpp"
                        value="C++"
                        checked={checks.cpp}
                        onChange={handleCheckState}/>C++
                </label>

                <label for="inp-3" class="item">
                    <input type="checkbox"
                        name="cs"
                        value="C#"
                        checked={checks.cs}
                        onChange={handleCheckState}/>C#
                    </label>

                <label for="inp-4" class="item">
                    <input type="checkbox"
                        name="java"
                        value="Java"
                        checked={checks.java}
                        onChange={handleCheckState}/>Java
                    </label>

                <label for="inp-5" class="item">
                    <input type="checkbox"
                        name="python"
                        value="Python"
                        checked={checks.python}
                        onChange={handleCheckState}/>Python
                </label>

                <label for="inp-6" class="item">
                    <input type="checkbox"
                        name="javascript"
                        value="JavaScript"
                        checked={checks.javascript}
                        onChange={handleCheckState}/>JavaScript
                </label>

                <label for="inp-6" class="item">
                    <input type="checkbox"
                        name="other"
                        value="Other"
                        checked={checks.other}
                        onChange={handleCheckState}/>Other
                </label>
            </div>
  
            <div class="form__control">
                <label for="comment">Any comments or suggestions?</label>
    
                <input type="text"
                    id="comment"
                    placeholder="Enter your comment here"
                    value={state.comment}
                    onChange={handleChange}/>
            </div>
  
            <button type="submit" value="submit">Submit</button>
            
        </form>
    </div>
  )
}

export default Survey