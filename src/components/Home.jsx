import React, { useEffect } from 'react';
import { useAppState, useActions } from '../overmind';
import '../styles/Home.css';
import splashImg from '../assets/images/home-splash.jpg';
// import splashImg from '../assets/images/creswick-forest.jpg';

function Home() {
    const { trails, loading } = useAppState();
    const actions = useActions();

    const splashStyle = {
        backgroundImage: `url(${splashImg})`,
        backgroundSize: 'cover',
    };

    useEffect(() => {
        actions.getTrails();
    }, []);

    useEffect(() => {
        // console.log(trails);
    }, [trails]);

    // const trailItems = trails.map((t, index) => <li key={index}>{t.name}</li>);

    if (loading) {
        return <div className="Home">Loading...</div>;
    }

    return (
        <div className="Home">
            <div className="Home-splash" style={splashStyle}>
                <h1 className="Home-splash__h1">Are You Ready, Lou?</h1>
            </div>
            <div className="Home-trails">
                <h1>Local favourites near Ballarat</h1>
                {console.log(trails)}
                {Object.values(trails).map((t) => (
                    <div key={t.id}>{t.name}</div>
                ))}
            </div>
        </div>
    );
}

export default Home;
