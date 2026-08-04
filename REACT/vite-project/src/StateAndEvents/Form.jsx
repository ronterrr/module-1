/*
How to handle form input and events
*/

import { useState } from "react";

function Form(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNum, setPhoneNum] = useState("");

    const nameOnChange = (e) => {
        console.log(`Name is: ${e.target.value}`);
        setName(e.target.value);
    };


    const onSubmit = () => {
        console.log("Submit button clicked");
        setName('');
    };

    return(
        <>
        <div>
            <div>
                <div>
                    <label>Name</label>
                </div>
                <div>
                    <input value={name} onChange={nameOnChange}/>
                </div>
            </div>
            <div>
                <div>
                    <label>Email</label>
                </div>
                <div>
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
            </div>
            <div>
                <div>
                    <label>Phone Number</label>
                </div>
                <div>
                    <input value={phoneNum} onChange={(e)=>{setPhoneNum(e.target.value)}}/>
                </div>
            </div>
            <div>
                <div>
                    <label>Password</label>
                </div>
                <div>
                    <input value={password} type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
            </div>
            <div>
                <button onClick={onSubmit}>Submit</button>
            </div>

            <ul>
                <li>Name: {name}</li>
                <li>Email: {email}</li>
                <li>Phone Number: {phoneNum}</li>
                <li>Password: {password}</li>
            </ul>
        </div>
        </>
    )
}

export default Form;