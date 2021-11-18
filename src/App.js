import NotFound from './pages/NotFound';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import "./styles/index.scss";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/a-propos" exact element={<About/>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;