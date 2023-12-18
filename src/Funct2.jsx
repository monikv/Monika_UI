import React, { useState } from 'react';
function Funct2() {

    const [Email, setEmail] = useState("");
    const [confirmEmail, setconfirmEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");


    const onChange = (e) => {
        setEmail("");
        setconfirmEmail("");
        setPassword("");
        setconfirmPassword("");
    }
    const onsubmit = () => {

        console.log("Email", Email);
        console.log("confirmEmail", confirmEmail);
        console.log(" Password", Password);
        console.log("confirmPassword", confirmPassword);

    }

    const onClear = () => {

        setEmail("");
        setconfirmEmail("");
        setPassword("");
        setconfirmPassword("");
    }

    return (
        <div>
            <label> Email</label>
            <input type="text" name="Email" value={Email} onChange={(e) => setEmail(e.target.value)} ></input>
            <label>confirmEmail</label>
            <input type="text" name="confirmEmail" value={confirmEmail} onChange={(e) => setconfirmEmail(e.target.value)}></input>
            <label>Password</label>
            <input type="text" name="Password" value={Password} onChange={(e) => setPassword(e.target.value)} ></input>
            <label>confirmPassword</label>
            <input type="text" name="confirmPassword" value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)}></input>
            <button onClick={onsubmit}>Submit</button>
            <button onClick={onClear} >Clear</button>
        </div>
    );
}

export default Funct2;