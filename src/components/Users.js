import React, { useState } from 'react'
import { Avatar, Card, TextField, Button } from '@mui/material';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { deleteUser, updateUser } from '../features/usersSlice';


const Users = () => {
    const [newUsername, setNewUsername] = useState('');
    const userList = useSelector((state) => state.users.value);
    const dispatch = useDispatch();
    return (
        <div className='flex flex-col gap-5'>
            {userList.map((user) => (
                <Card className='h-32 w-full grid grid-cols-12' key={user.id}>
                    <div className=' col-span-4 flex flex-row justify-start items-center gap-8 pl-12'>
                        <Avatar alt="" src="/static/images/avatar/1.jpg" sx={{ width: 65, height: 65 }} />
                        <div>
                            <h1 className='text-xl font-semibold'>{user.name}</h1>
                            <p className='text-lg'>{user.username}</p>
                        </div>
                    </div>
                    <div className=' col-span-7 flex flex-row justify-center items-center px-12 gap-12 pr-1'>
                        <TextField fullWidth
                            label="type new username"
                            id="fullWidth" variant="standard"
                            onChange={(e) => setNewUsername(e.target.value)} />
                        <Button variant="contained"
                            onClick={() => {
                                dispatch(updateUser({ id: user.id, username: newUsername }));
                            }} >
                            Update
                        </Button>
                    </div>
                    <div className=' col-span-1 flex flex-row justify-center items-center pr-2'>
                        <Button variant="contained" color="error"
                            onClick={() => {
                                dispatch(deleteUser({ id: user.id }));
                            }}>
                            Delete
                        </Button>
                    </div>
                </Card>
            ))}
        </div>
    )
}

export default Users