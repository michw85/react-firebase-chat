import React, {useContext} from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes';
import Chat from './Chat';
import Login from './Login';
import {useAuthState} from "react-firebase-hooks/auth"
import { Context } from '..';

const AppRouter = ()  => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

  return user ?
    (
        <Routes >
            {privateRoutes.map(({path, Element}) =>
                <Route key={path} path={path} element={Element}/>
            )}
            <Route path="*" element={<Chat/>} />
        </Routes >
    )
    :
    (
        <Routes >
            {publicRoutes.map(({path, Element}) =>
                <Route key={path} path={path} element={Element}/>
            )}
            <Route path="*" element={<Login/>} />
        </Routes >
    )
}

export default AppRouter;