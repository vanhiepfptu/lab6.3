import { Button, TextField ,Typography} from '@mui/material'
import React from 'react'
import {useFormik } from 'formik';
import * as Yup from 'yup';
import "yup-phone";

const Contact = () => {
  const formik = useFormik({
    initialValues:{
      name: '',
      email:'',
      phone: ''
    },
    onSubmit:(values) => {
      alert(JSON.stringify(formik.values))
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      email: Yup.string().email(null,'Invalid email').required('Required'),
      phone: Yup.number().integer().typeError("Please enter a valid number"),
    })
  })

  // const validate = (values, props /* only available when using withFormik */) => {
  //   const errors = {};

  //   if (!values.email) {
  //     errors.email = 'Required';
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //     errors.email = 'Invalid email address';
  //   }

  //   //...

  //   return errors;
  // };
  return (
    <form className='mx-auto flex flex-col w-96 gap-3' onSubmit={formik.handleSubmit}>
      <TextField
        label='Username'
        name='name'
        fullWidth id="fullWidth"
        value={formik.values.name}
        onChange={formik.handleChange}
      >
      </TextField>
      {formik.errors.name && (<Typography variant="caption" color="red">{formik.errors.name}</Typography>)}
      <TextField
        label='Email'
        name='email'
        value={formik.values.email}
        onChange={formik.handleChange}
      >
      </TextField>
      {formik.errors.email && (<Typography variant="caption" color="red">{formik.errors.email}</Typography>)}
      <TextField
        label='Phone'
        name='phone'
        value={formik.values.phone}
        onChange={formik.handleChange}
      >
      </TextField>
      {formik.errors.phone && (<Typography variant="caption" color="red">{formik.errors.phone}</Typography>)}
      <Button fullWidth variant="contained" className='h-12' type='submit'>add contact</Button>
    </form>
  )
}

export default Contact