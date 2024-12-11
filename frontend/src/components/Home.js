import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ socket }) => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');

    // Save username and redirect on form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userName', userName);
        socket.emit('newUser', { userName, socketID: socket.id});
        navigate('/chat');
    };

    return (
        <div>
            <form className="home__container" onSubmit={handleSubmit}>
                <h1 className="home__header">Draw Chat</h1>
                <label htmlFor="username">Enter a Name </label>
                <input 
                    type="text"
                    name="username"
                    id="username"
                    className="username__input"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <button className="home__btn">Go</button>
            </form>
        </div>
    );
};

export default Home;