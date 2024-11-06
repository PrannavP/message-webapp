import axios from "axios";
import { useState } from "react";

const LoginFormComponent = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        const response = await axios.post("http://localhost:6969/api/users/login", {
            username: username,
            password: password,
        });

        console.log(response);

        if(response.status === 200){
            setUsername('');
            setPassword('');
            alert("Login success!");

            // save username in localstorage (for now)
            localStorage.setItem("user", username);

            window.location.href = '/chat';
        }else{
            alert("Something went wrong while login!");
        };
    };

    return(
        <div className="login-form-container">
            <h1>Login Form</h1>
            <div className="login-input-container">
                <label>Username</label><br />
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br />

                <label>Password</label><br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <br />

            <div className="login-button-container">
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default LoginFormComponent;