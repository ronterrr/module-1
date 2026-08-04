/*
Create a form to take name, email, phone num and password

Have a submit button that logs the values when pressed.

After the form, have a list to showcase the state changes as the
user is typing.

For all the input fields, use only 1 state variable. 
example[input, setInput] = useState(<obj>) -> there should only be one obj
*/

import { useState } from "react";

function Form(){

    let stateValue = "}alert('hello')";

    const [name, setName] = useState(stateValue);
    const [email, setEmail] = useState(stateValue);
    const [phoneNum, setPhoneNum] = useState(stateValue);
    const [password, setPassword] = useState(stateValue);

    const onSubmit = () => {
        console.log(name);
        console.log(email);
        console.log(phoneNum);
        console.log(password);
    };

    return(
        <>
            <div>
                <div>
                    <label>Name</label>
                </div>
                <div>
                    <input 
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                    />
                </div>
            </div>
            <div>
                <div>
                    <label>Email: </label>
                </div>
                <div>
                    <input
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    />
                </div>
            </div>
            <div>
                <div>
                    <label>Phone Number: </label>
                </div>
                <div>
                    <input
                    value={phoneNum}
                    onChange={(e)=>{setPhoneNum(e.target.value)}}
                    />
                </div>
            </div>
            <div>
                <div>
                    <label>Password: </label>
                </div>
                <div>
                    <input 
                    type="password"
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    />
                </div>
            </div>
            <div>
                <button onClick={onSubmit}>Submit</button>
            </div>

            <div>
                <ul>
                    <li>Name: {name}</li>
                    <li>Email: {email}</li>
                    <li>Phone Number: {phoneNum}</li>
                    <li>Password: {password}</li>
                </ul>
            </div>
        </>
    );
}

export default Form;