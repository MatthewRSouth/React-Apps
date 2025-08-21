import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
    const [name, setName] = useState('Your Name');
    const [bio, setBio] = useState('Please write about yourself...');

    return (
        <>
            <div className="cardContainer">
                <div className="card">
                    <input type="text" value={name} />
                    <textarea
                        name="Bio"
                        id="bio"
                        value={bio}
                        cols="50"
                        rows="20"
                    ></textarea>
                </div>
            </div>
        </>
    );
}

export default App;
