import React, { useState } from 'react'
import { Avatar, Card, TextField, Button } from '@mui/material';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { addUser } from '../features/usersSlice';


const Users = () => {
    const users = useSelector((state) => state.users.value);
    const dispatch = useDispatch();

    return (
        <div>
            {users.map((user) => (
                <Card className='h-32 w-full grid grid-cols-12' key={user.id}>
                    <div className=' col-span-3 flex flex-row justify-start items-center gap-8 pl-12'>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 68, height: 68 }} />
                        <div>
                            <h1 className='text-2xl font-semibold'>{user.name}</h1>
                            <p className='text-lg'>{user.username}</p>
                        </div>
                    </div>
                    <div className=' col-span-7 flex flex-row justify-center items-center px-12 gap-12'>
                        <TextField fullWidth label="type new username" id="fullWidth" variant="standard" />
                        <Button variant="contained">
                            Update
                        </Button>
                    </div>
                    <div className=' col-span-2 flex flex-row justify-center items-center'>
                        <Button variant="contained" color="error">
                            Delete
                        </Button>
                    </div>
                </Card>
            ))}
        </div>
    )
}

export default Users