import './App.css';
import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./webpages/Home";
import AddContent from "./webpages/AddContent";

function App() {
    return (
        <Router basename="/">
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/addContent" element={<AddContent/>}/>
            </Routes>
        </Router>

    );

}

export default App;
