import { AppBar, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar positon='static'>
        <toolbar>
            <Typography><h2>axlbii</h2>
                <Button color='inherit' variant='standard'><Link to='/' style={{color:'white',textDecoration:'none',backgroundColor:'none'}}>Login</Link></Button>
                <Button color='inherit' variant='standard'><Link to='/signup'style={{color:'white',textDecoration:'none',backgroundColor:'none'}}>signup</Link></Button>
                <Button color='inherit' variant='standard'><Link to='/contacts'style={{color:'white',textDecoration:'none',backgroundColor:'none'}}>contact</Link></Button>
            </Typography>
        </toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
