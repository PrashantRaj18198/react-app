import { useState } from 'react';

import People from './People';
import ChatWindow from './ChatWindow';

const Chat = () => {
    const [person, changePerson] = useState("ralf");
    return (
    <div>
        <People changePerson={changePerson} selectedPerson={person}/>
        <ChatWindow name={person} />
    </div>)
}

export default Chat;