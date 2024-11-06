import axios from "axios";
import { useState } from "react";

const RegisterFormComponent = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        const response = await axios.post("http://localhost:6969/api/users/register", {
            username: username,
            password: password,
        });

        if(response.status === 201){
            setUsername('');
            setPassword('');
            alert("Registered Successfully!");
            window.location.href = '/login';
        }else{
            alert("Something went wrong while registering!");
        };
    };

    return(
        <div className="register-form-container">
            <h1>Register Form</h1>
            <div className="register-input-container">
                <label>Username</label><br />
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br />

                <label>Password</label><br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            
            <br />

            <div className="button-container">
                <button onClick={handleRegister}>Register</button>
            </div>
        </div>
    );
};

export default RegisterFormComponent;