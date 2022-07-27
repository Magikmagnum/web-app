import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleAuth } from "../../store/auth";

const Logout = () => {

    const dispatch = useDispatch()

    const __handleLogout = () => {
        dispatch(toggleAuth(false));
    }

    useEffect(() => {
        __handleLogout()
    })

    return (
        <></>
    )
}

export default Logout;