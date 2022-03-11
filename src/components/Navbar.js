import React, {useContext} from 'react';
import { AppBar, Toolbar, Grid, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';
import {useAuthState} from "react-firebase-hooks/auth"
import { Context } from '..';

const Navbar = ()  => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

  return (
    <AppBar position="static">
        <Toolbar variant={"dense"}>
            <Grid container justifyContent={"flex-end"}>
                {
                    user ?
                    <Button onClick={() => auth.signOut()} color="inherit" variant={"outlined"}>Exit</Button>
                    :
                    <NavLink to={LOGIN_ROUTE}>
                        <Button color="inherit" variant={"outlined"}>Login</Button>
                    </NavLink>
                    
                }
            </Grid>
        </Toolbar>
  </AppBar>
  );
}

export default Navbar;
