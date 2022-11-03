import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from "uuid";
import "yup-phone";
// import { addContact } from '../features/contactSlice';
import { addUser } from '../features/usersSlice';
import { useDispatch } from 'react-redux';
import AddUsers from './AddUsers';
import Users from './Users';


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: ''
    },
    onSubmit: (values) => {
      alert(JSON.stringify(formik.values))
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email')
        .required('Required'),
      phone: Yup.number()
        .integer('please enter number')
        .typeError("Please enter a valid number"),
    })
  })
  return (
    <div className='flex flex-row'>
      <form className='h-80 flex flex-col justify-center items-center p-12 gap-8 w-96 mx-auto m-auto' onSubmit={formik.handleSubmit}>
        <TextField
          label='Username'
          name='name'
          variant="standard"
          fullWidth
          value={formik.values.name}
          onChange={formik.handleChange}
          onChangeCapture={(event) => { setName(event.target.value); }}
        >
        </TextField>
        {formik.errors.name && (<Typography variant="caption" color="red">{formik.errors.name}</Typography>)}
        <TextField
          label='Email'
          name='email'
          variant="standard"
          fullWidth
          value={formik.values.email}
          onChange={formik.handleChange}
          onChangeCapture={(event) => { setEmail(event.target.value); }}
        >
        </TextField>
        {formik.errors.email && (<Typography variant="caption" color="red">{formik.errors.email}</Typography>)}
        <TextField
          label='Phone'
          name='phone'
          variant="standard"
          fullWidth
          value={formik.values.phone}
          onChange={formik.handleChange}
          onChangeCapture={(event) => { setPhone(event.target.value); }}
        >
        </TextField>
        {formik.errors.phone && (<Typography variant="caption" color="red">{formik.errors.phone}</Typography>)}
        <Button
          fullWidth
          variant="contained"
          className='h-14'
          type='submit'
          onClick={() => {
            const obj = { id: uuidv4(), name: name, email: email, phone: phone }
            dispatch(addUser(obj));
          }}
        >add contact
        </Button>
      </form>
      <Users></Users>
    </div>
  )
}

export default Contact