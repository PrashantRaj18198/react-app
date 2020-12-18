import { useEffect, useState } from 'react';

import Message from './Message';

const ChatWindow = ({ name }) => {

    const [messages, setMessages] = useState([])

    useEffect(() => {
        setMessages([
            {person: "Philip", message: "hello", timestamp: 0},
            {person: "Philip", message: "hello", timestamp: 1},
            {person: "your_user", message: "thanks", timestamp: 2}
        ]);
    }, [])

    const send = () => {};
    console.log(messages)
    return (
        <div>
            Person Taling to: {name}
            Messages:
            <div>
                {messages.map((message, index) => {
                    <Message key={index} person={message.person} message={message.message} timestamp={message.timestamp} />
                })}
            </div>
            <input name="message"></input>
            <button onClick={send}>Send</button>
        </div>
    )
}

export default ChatWindow;