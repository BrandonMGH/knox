import React, { useState } from 'react';

const Main = () => {
const [user, setUser ] = useState('')
const [password, setPassword ] = useState("")

    const postNewUser = () => {
       let userInfo = {
            user: user,
            password: password
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: userInfo
        };
        fetch('/addUser', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    }
    
    return (
        <>
        <h1>Main</h1>
        <input
          type="text"
          value={user}
          onChange={e => setUser(e.target.value)}
          placeholder="User"
        >
        </input>
        <input
          type="text"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="User"
        >
        </input>
        <button onClick={postNewUser}>MongoDB post</button>
        </>
    )
}

export default Main