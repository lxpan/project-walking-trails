import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Explore from './components/Explore';
import Saved from './components/Saved';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/explore" element={<Explore />} exact />
                    <Route path="/saved" element={<Saved />} exact />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
