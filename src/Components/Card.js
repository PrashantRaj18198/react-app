
import './card.css';

const Card = ({ person, selectedPerson, changePerson }) => {
    return (
        <div className={`card${person === selectedPerson ? " selected" : ""}`} onClick={() => changePerson(person)}>
            {person}
        </div>
    )
}

export default Card;