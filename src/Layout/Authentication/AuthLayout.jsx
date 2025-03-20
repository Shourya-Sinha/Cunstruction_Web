import { Container } from '@mui/material'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AuthLayout = () => {
  const isLoggedin = true;

  if (isLoggedin) {
    return <Navigate to="/" replace />;
  }
  return (
    <Container maxWidth='lg'>
      AuthLayout content goes here...
      <Outlet />
    </Container>
  )
}

export default AuthLayout