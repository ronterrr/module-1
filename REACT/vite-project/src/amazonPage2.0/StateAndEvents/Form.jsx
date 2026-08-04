/*
How to handle form input and events
*/

function Form(){

    const nameOnChange = (e) => {
        console.log(`Name is: ${e.target.value}`);
    };

    const emailonChange = (e) => {
        console.log(`Email is: ${e.target.value}`)
    };

    const passwordOnChange = (e) => {
        console.log(`Password is: ${e.target.value}`)
    };

    const onSubmit = () => {
        console.log("Submit button clicked");
    };

    return(
        <>
        <div>
            <div>
                <div>
                    <label>Name</label>
                </div>
                <div>
                    <input onChange={nameOnChange}/>
                </div>
            </div>
            <div>
                <div>
                    <label>Email</label>
                </div>
                <div>
                    <input onChange={emailonChange}/>
                </div>
            </div>
            <div>
                <div>
                    <label>Password</label>
                </div>
                <div>
                    <input type="password" onChange={passwordOnChange}/>
                </div>
            </div>
            <div>
                <button onClick={onSubmit}>Submit</button>
            </div>
        </div>
        </>
    )
}

export default Form;