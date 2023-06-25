import TinderCard from 'react-tinder-card';
import "./TinderCard.css";
const TinderCards = ({ people }) => {

    return (
        <div className="cards__Container">
            {people.map((person, i) => {

                return (<TinderCard preventSwipe={['up', 'down']} className="swipe" key={person.name}>
                    <div style={{ backgroundImage: `url(${person.url})` }} className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>);
            }
            )}
        </div>
    );
};

export default TinderCards

