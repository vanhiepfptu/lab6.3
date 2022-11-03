import React, { useState } from 'react'
import { TextField, Button, Typography } from '@mui/material'
import { useDispatch } from 'react-redux';
import { addUser } from '../features/usersSlice';
import { v4 as uuidv4 } from "uuid";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Users from './Users';

const AddUsers = () => {
    const [newUser, setNewUser] = useState("");
    const [newUsername, setNewUsername] = useState("");
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            user: "",
            username: ""
        },
        onSubmit: (values) => {
            alert(JSON.stringify(formik.values))
        },
        validationSchema: Yup.object({
            user: Yup.string().min(2, "Too Short!")
                .required("You didn't enter user"),
            username: Yup.string()
                .min(2, 'Too short!')
                .required("You didn't enter username")

        }),
    })
    return (
        <div className='flex flex-row p-8 gap-8'>
            {/* <form onSubmit={sumbitForm} */}
            <form onSubmit={formik.handleSubmit}
                className='h-96 flex flex-col justify-center items-center p-12 gap-8 w-96 mx-auto border-2 border-blue-500 rounded-3xl mb-20'>
                <TextField
                    fullWidth
                    variant="standard"
                    label='Name'
                    value={formik.values.user}
                    onChangeCapture={(e) => { setNewUser(e.target.value) }}
                    onChange={formik.handleChange}
                />

                {/* <TextField fullWidth id="fullWidth" variant="standard" label='Name' value={(newUser, formik.values.user)} onChange={(setName, formik.handleChange)} /> */}
                {formik.errors.user && (<Typography variant="caption" color="red">{formik.errors.user}</Typography>)}
                <TextField
                    fullWidth
                    variant="standard"
                    label='Username'
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onChangeCapture={(e) => { setNewUsername(e.target.value) }}
                />
                {formik.errors.username && (<Typography variant="caption" color="red">{formik.errors.username}</Typography>)}
                <Button
                    variant="contained"
                    type='submit'
                    fullWidth
                    onClick={() => {
                        const obj = { id: uuidv4(), name: newUser, username: newUsername };
                        dispatch(addUser(obj))
                    }}
                >ADD USERS
                </Button>
            </form>
            <Users></Users>
        </div>

    )
}

export default AddUsers