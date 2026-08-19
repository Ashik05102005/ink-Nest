import React from 'react'
import {Navigate } from "react-router-dom"

function ProtectedRoute({children,allowedRoute}) {

    const userId = JSON.parse(localStorage.getItem("userId"));
    const userRole = JSON.parse(localStorage.getItem("userRole"))

    if(!userId) {
        return <Navigate to="/login" replace />
    }
    if(allowedRoute && userRole !==allowedRoute){
        if(userRole === "admin"){
            return <Navigate to='/admin' replace/>
        }
        return <Navigate to='/' replace />
    }
    return children
}

export default ProtectedRoute