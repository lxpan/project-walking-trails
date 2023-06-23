/* MapCore is a higher-order component (HOC) that contains the core Map functionality */
import { React, useState } from 'react';

const MapCore = (OriginalComponent) => {
    function NewComponent() {
        // render OriginalComponent and pass on its props.
        return <OriginalComponent />;
    }
    return NewComponent;
};

export default MapCore;
