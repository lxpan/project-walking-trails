import React, { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import {
    useAppState, useActions, useEffects, useReaction,
} from './overmind';
import Header from './components/Header';
import Home from './components/Home';
import Explore from './components/Explore';
import Saved from './components/Saved';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
    const state = useAppState();
    const action = useActions();
    const effects = useEffects();

    useEffect(() => {
        action.onInitializeOvermind();
    }, []);

    // useEffect(() => {
    //     console.log(state.trails);
    // }, [state.trails]);

    return (
        <div className="App">
            <HashRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/explore" element={<Explore />} exact />
                    <Route path="/saved" element={<Saved />} exact />
                </Routes>
            </HashRouter>
            <Footer />
        </div>
    );
}

export default App;
