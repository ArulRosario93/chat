import { ChatEngine } from "react-chat-engine";

import "./App.css";

import ChatFeed from "./ChatFeed";

import Login from "../src/Component/Login"

const App = () => {

    if(!localStorage.getItem("username")) return <Login />

    return(
        <ChatEngine 
            height="100vh"
            projectID="443377fe-64bb-4243-8ba5-ca5ac20ad0ff"
            userName= {localStorage.getItem("username")}
            userSecret= {localStorage.getItem("password")}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;