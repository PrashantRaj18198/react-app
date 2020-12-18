import { useState } from 'react';

import Card from './Card';
import './People.css'

const People = ({changePerson, selectedPerson }) => {
    const [people, setPeople] = useState(['Philip', 'Kiera']);

    return (
    <div className="left-container">
        {people.map((person, index) =>
            <Card key={index} changePerson={changePerson} person={person} selectedPerson={selectedPerson}/>
        )}
    </div>)
}

export default People;