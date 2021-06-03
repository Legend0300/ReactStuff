import React from "react"
import Counter from "./components/counter";
import Person from "./components/data2";
import UseStateObject from "./components/data2"
import "./components/App.css"
import UseEffectBasics from "./components/useEffectBasics";
import Api from "./components/api";
import CondtionalFunction from "./components/conditionalRendering"
import Show from "./components/show";
import Forms from "./forms";
import MultiInput from "./components/MultiInput";
import UseRef0w0 from "./components/MultiInput";
import Reduce from "./components/Reduce";
import PropDrilling from "./components/propDrilling";
import Ammi from "./components/ammi";
import ReactRouter from "./components/ReactRouter";
import {BrowserRouter as Router , Route , Switch} from "react-router-dom"
import Birthday from "./Birthday"

function App() {
    return(
        <div className="container">
            <Birthday />
        </div>
    )   
}
export default App;