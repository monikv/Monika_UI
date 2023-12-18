import React, { useState } from 'react';


function Funct1() {

    const [Email, setEmail] = useState("");
    const [confirmEmail, setconfirmEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");


    // const handleonchange = () => {
    // setEmail({
    //     [e.target.name]: e.target.value,
    // })
    // setconfirmEmail({
    //     [e.target.name]: e.target.value,
    // })

    // setPassword({
    //     [e.target.name]: e.target.value,
    // })

    // setconfirmPassword({
    //     [e.target.name]: e.target.value,
    // })


    // }


    return (
        <div>
            <label> Email</label>
            <input type="text" name="Email" value={Email} onChange={handleonchange} ></input>
            <label>confirmEmail</label>
            <input type="text" name="confirmEmail" value={confirmEmail} onChange={handleonchange} ></input>
            <label>Password</label>
            <input type="text" name="Password" value={Password} onChange={handleonchange} ></input>
            <label>confirmPassword</label>
            <input type="text" name="confirmPassword" value={confirmPassword} onChange={handleonchange}></input>
            <button onClick={onsubmit}>Submit</button>
            <button onClick={onClear} >Clear</button>
        </div>
    );
}

export default Funct1;