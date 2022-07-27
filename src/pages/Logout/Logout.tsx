import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createToggleAuth } from "../../store/auth";

const Logout = () => {

    const dispatch = useDispatch()

    const __handleLogout = () => {
        dispatch(createToggleAuth(false));
    }

    useEffect(() => {
        __handleLogout()
    })

    return (
        <></>
    )
}

export default Logout;