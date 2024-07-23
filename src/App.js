// src/App.js

import React, { useEffect, useState } from 'react';
import './App.css';
import { getAndroidVersion } from './detectAndroidVersion';

function App() {
    const [androidVersion, setAndroidVersion] = useState("unknown");

    useEffect(() => {
        const version = getAndroidVersion();
        setAndroidVersion(version);
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Android Version Detector</h1>
                <p>Your Android version is: {androidVersion}</p>
            </header>
        </div>
    );
}

export default App;
