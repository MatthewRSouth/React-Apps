import '../App.css';
import '../App';

// .card {
//     flex-direction: column;
//     flex-wrap: wrap;
//     height: 40rem;
//     width: 28rem;
//     border: 2px solid black;
//     border-radius: 10px;
//     text-align: center;
// }

export default function ProfileCard({ name, bio, favoriteColor, font }) {
    const cardStyle = {
        borderColor: favoriteColor,
        borderWidth: '2px',
        borderStyle: 'solid',
        borderRadius: '10px',
        height: '40rem',
        width: '28rem',
        textAlign: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginTop: '1.1rem',
        fontFamily: font,
    };

    return (
        <div style={cardStyle}>
            <h1>{name}</h1>
            <h4>{bio}</h4>
        </div>
    );
}
