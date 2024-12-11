import React, { useEffect, useState, useRef } from 'react';
import ChatList from './ChatList';
import ChatCanvas from './ChatCanvas';

const ChatPage = ({ socket }) => {
    return (
        <div className="chat">
            <ChatList socket={socket} />
            <div className="chat__main">
            </div>
            <ChatCanvas />
        </div>
    );
};

export default ChatPage;