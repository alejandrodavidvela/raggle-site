import React from 'react'
import app from '../firebase';

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <button onClick={() => app.auth().signOut()}>Sign Out</button>
        </>
    )
}

export default Home
