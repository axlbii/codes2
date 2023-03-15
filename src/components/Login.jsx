import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useFormInputValidation } from 'react-form-input-validation'

 const Login = () => {
    // var[input,setinput]=useState()
    // const cap_input=(e)=>{
        // setinput(input=(e.target.value))
        // console.log(input)
    // }
    const[fields,errors,form]=useFormInputValidation({
email_address:"",
password:""
    },{
        email_address:"required|email",
        password:"required"
    })
  return (
    <div>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <br/>
        <br/>
        <br/>
        <br/><h1>let's roll.</h1>
        <TextField
        value={fields.email_address}
        onBlur={form.handleBlurEvent}
    onChange={form.handleChangeEvent}
        name='email_address'
          id="outlined-error"
          label='email_address'
          helperText={errors.email_address?errors.email_address:""}
        />
       <br/> <TextField
       value={fields.password}
       onBlur={form.handleBlurEvent}
       onChange={form.handleChangeEvent}
          name='password'
          id="outlined-error-helper-text"
          label='password'
          helperText={errors.password?errors.password:""}
          type="password"
        />
    
      </div>
    </Box>
    </div>
  )
}

export default Login
