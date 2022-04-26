import React from "react";
import "./styles.css";
import Chatbot from "./Chatbot";
import "./Animal Charity Best Friend.png";
//import PreLoader1 from "./components/PreLoader1";


export default function App() {
  return (
    <div>
        <div className="App">
            <Chatbot />
            <img src={require("./Animal Charity Best Friend.png")} height ={700} width = {1200}/>
        </div>
    </div>
  );
}

//https://www.youtube.com/watch?v=SR8755C0bME
//https://www.npmjs.com/package/react-spinners
          //<Chatbot />
          //<img src={require("./Animal Charity Best Friend.png")} height ={700} width = {1200}/>
