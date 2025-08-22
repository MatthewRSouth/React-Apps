import { useState } from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard.jsx';

function App() {
    const [name, setName] = useState('Your Name');
    const [bio, setBio] = useState('Please write about yourself...');
    const [color, setColor] = useState('#0000');
    const [font, setFont] = useState('Arial');

    // function getColor()

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
                    <label htmlFor="favorite-color">
                        What is your favorite color?
                    </label>
                    <br />
                    <input
                        type="color"
                        id="favorite-color"
                        className="card-item color-picker"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />{' '}
                    <br />
                    <label htmlFor="fonts">
                        What font would you like the card to use?
                    </label>
                    <br />
                    <select
                        name="fonts"
                        id="fonts"
                        onChange={(e) => setFont(e.target.value)}
                    >
                        <option value="Arial">Arial</option>
                        <option value="Georgia">Georigia</option>
                        <option value="Verdana">Verdana</option>
                    </select>
                </div>

                <ProfileCard
                    name={name}
                    bio={bio}
                    favoriteColor={color}
                    font={font}
                ></ProfileCard>
            </div>
        </>
    );
}

export default App;
