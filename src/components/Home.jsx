import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppState, useActions } from '../overmind';
import '../styles/Home.css';
import splashImg from '../assets/images/home-splash.jpg';
// import splashImg from '../assets/images/creswick-forest.jpg';
import TrailCard from './TrailCard';

function Home() {
    const { trails, loading } = useAppState();
    const actions = useActions();

    const splashStyle = {
        backgroundImage: `url(${splashImg})`,
        backgroundSize: 'cover',
    };

    useEffect(() => {
        // actions.trails.migrate();
        // actions.routes.migrate();
        // actions.locations.migrate();
        // actions.reviews.migrate();
    }, []);

    if (loading) {
        return <div className="Home">Loading...</div>;
    }

    return (
        <div className="Home">
            <div className="Home-splash" style={splashStyle}>
                <h1 className="Home-splash__h1">Are You Ready, Lou?</h1>
            </div>
            <div className="Home-trails">
                <div className="Home-trail-card-grid">
                    <h1 className="Home-trail-card-grid__heading">
                        Local favourites near{' '}
                        <Link to={'/location/ballarat-vic-australia'}>Ballarat</Link>
                    </h1>
                    {Object.values(trails).map((trail, index) => (
                        // concatenating the index to id stops the "use a key" message
                        // even though the id should be sufficient on its own
                        <TrailCard key={`${trail.id}-${index}`} trail={trail} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
