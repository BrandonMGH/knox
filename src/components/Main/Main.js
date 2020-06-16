import React, { useState } from 'react';

const Main = () => {
   
    const mongoDBPost = () => {
        const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
        console.log(uri)
    }
    
    return (
        <>
        <h1>Main</h1>
        <input></input>
        <button onClick={mongoDBPost}>MongoDB post</button>
        </>
    )
}

export default Main