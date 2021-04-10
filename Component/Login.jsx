import React, {useState} from "react";
import axios from "axios"
const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const authObject = { 'Project-ID': "443377fe-64bb-4243-8ba5-ca5ac20ad0ff", "User-Name": username, "User-Secret": password  }

        try {
            await axios.get("https://api.chatengine.io/chats", { headers: authObject });

            localStorage.setItem("username", username);
            localStorage.setItem("password", password);

            window.location.reload();
        } catch (error) {
            setError("oops, Incorrect credentials")
        }
    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} placeholder="Enter Name" onChange={(e) => setUsername(e.target.value)} className="input" required/>
                    <input type="password" value={password} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} className="input" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default Login;