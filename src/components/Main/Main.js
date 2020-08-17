import React, { useState } from 'react';
import axios from 'axios';

const Main = () => {
const [user, setUser ] = useState('')
const [password, setPassword ] = useState('')

    const postNewUser = async () => {
        console.log(user, password);
       await axios.post('/addUser', {
                user: user,
                password: password
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
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