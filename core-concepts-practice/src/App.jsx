import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './components/ProfileCard.jsx';
import ProfileCard from './components/ProfileCard.jsx';

function App() {
    const [name, setName] = useState('Your Name');
    const [bio, setBio] = useState('Please write about yourself...');
    const [color, setColor] = useState('What is your favorite color?');

    return (
        <>
            <div className="cardContainer">
                <div className="card card-item">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <textarea
                        type="text"
                        name="Bio"
                        id="bio"
                        value={bio}
                        cols="50"
                        rows="20"
                        className="card-item"
                        autoCorrect="on"
                        onChange={(e) => setBio(e.target.value)}
                    ></textarea>
                    <input type="color" className="card-item" />
                </div>
                <div className="card card-item">
                    <ProfileCard name={name}>name</ProfileCard>
                </div>
            </div>
        </>
    );
}

export default App;
