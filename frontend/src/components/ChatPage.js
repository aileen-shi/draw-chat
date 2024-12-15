import React, { useEffect, useState, useRef } from 'react';
import ChatList from './ChatList';
import ChatLog from './ChatLog';
import ChatCanvas from './ChatCanvas';

const ChatPage = ({ socket }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on("messageResponse", data => setMessages([...messages, data]))
    }, [socket, messages])

    return (
        <div className="chat">
            <ChatList socket={socket} />
            <div className="chat__main">
                <ChatLog messages={messages}/>
                <ChatCanvas socket={socket} />
            </div>
        </div>
    );
};

export default ChatPage;