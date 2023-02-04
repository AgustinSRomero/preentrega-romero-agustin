import React from 'react';
import { LeapFrog } from '@uiball/loaders';

function Loader() {
    return (
        <main className="loader-container">
            <LeapFrog size={40} speed={2.5} color="#596f91" />
        </main>
    )
}

export default Loader;