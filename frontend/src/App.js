import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import ChatPage from './components/ChatPage';
import socketIO from 'socket.io-client';
import './App.css';

// Establish connection to server
//const hostname = window.location.hostname;
//const protocol = window.location.protocol === 'https:' ? 'wss://' : 'ws://';
const socket = socketIO.connect('http://localhost:4000');

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home socket={socket} />}></Route>
        <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
