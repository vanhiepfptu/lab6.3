import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import { useDispatch } from 'react-redux';
import { addUser } from '../features/usersSlice';
import { v4 as uuidv4 } from "uuid";

const AddUsers = () => {
    const [newUser, setNewUser] = useState("");
    const [newUsername, setNewUsername] = useState("");
    const dispatch = useDispatch();

    const setName = (e) => {
        setNewUser(e.target.value);
    }

    const setUsername = (e) => {
        setNewUsername(e.target.value);
    }

    function sumbitForm(e) {
        e.preventDefault();

        const obj = { id: uuidv4(), name:newUser, username :newUsername};

        dispatch(addUser(obj));

        return false;
    }
    return (
        <form onSubmit={sumbitForm}
            className='flex flex-col justify-center items-center p-12 gap-8 w-96 mx-auto border-2 border-blue-500 rounded-3xl mb-20'>
            <TextField fullWidth id="fullWidth" variant="standard" label='Name' onChange={setName} />
            <TextField fullWidth id="fullWidth" variant="standard" label='Username' onChange={setUsername} />
            <Button variant="contained" type='submit' fullWidth>ADD USERS</Button>
        </form>
        // <div className='flex flex-col justify-center items-center p-12 gap-8 w-96 mx-auto border-2 border-blue-500 rounded-3xl mb-20'>
        //     <TextField fullWidth id="fullWidth" variant="standard" label='Name' value={newUser} onChange={setName} />
        //     <TextField fullWidth id="fullWidth" variant="standard" label='Username' value={newUsername} onChange={setUsername} />
        //     <Button variant="contained" fullWidth
        //         onClick={() => {
        //             dispatch(addUser({ id: 0, name: newUser, username: newUsername }));
        //         }}
        //     >ADD USERS</Button>
        // </div>
    )
}

export default AddUsers