import React, { useState } from 'react'
import Axios from 'axios'
import './App.css'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

function App() {
    const [age, setAge] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState('')

    const handleKeyPress = (event) => {
        if (event.charCode === 13) {
            getAge()
        }
    }

    const getAge = () => {
        Axios.get(`https://api.agify.io?name=${name}`)
            .then((response) => {
                setAge(response.data.age)
                setError('')
            })
            .catch((error) => {
                setError(error.message)
                setAge('')
            })
    }
    return (
        <div className="container">
            <link
                href="https://fonts.googleapis.com/css?family=Poppins&display=swap"
                rel="stylesheet"
            />

            <div className="content-container">
                <header className="header">
                    <h1>Let me guess your age!</h1>
                </header>
                <div className="row">
                    <TextField
                        sx={{ border: "solid  3px", "& .MuiOulinedInput-input":{color: "white"} }}
                        className="field"
                        id="outlined-basic"
                        label="Enter your name"
                        variant="outlined"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onKeyPress={(e) => handleKeyPress(e)}
                    />
                </div>
                <div>
                    <Button
                        sx={{ marginLeft: 21 }}
                        className="btn"
                        variant="outlined"
                        onClick={getAge}
                    >
                        Get your age
                    </Button>
                </div>

                <div className="age">
                    {age && <p> I guess your age is {age} years</p>}
                </div>
                <div className="error">
                    {error && <p>That is not a name, try again!</p>}
                </div>
            </div>
        </div>
    )
}

export default App
