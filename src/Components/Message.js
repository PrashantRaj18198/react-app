const Message = ({ person, message, timestamp }) => {
    return (
        <div>
            <div>
                {person}
            </div>
            <div>
                {message}
            </div>
            <div>
                {timestamp}
            </div>
        </div>
    )
}

export default Message;