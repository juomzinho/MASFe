import { useState } from 'react'
import Login from '../../features/login/components/Login'
import Container from '../../layouts/container/Container'
import Register from '../../features/register/components/Register'
import { useAuth } from './hooks/useAuth'
// import { useAuth } from './hooks/useAuth'

export enum AuthContent {
  Login = 1,
  Register,
}

const Authentication = () => {
  const [content, toggleContent] = useState(AuthContent.Login)
  const {} = useAuth()

  const getContent = () => {
    switch (content) {
      case AuthContent.Login:
        return <Login toggleComponent={() => toggleContent(AuthContent.Register)} />
      case AuthContent.Register:
        return <Register toggleComponent={() => toggleContent(AuthContent.Login)} />
    }
  }

  return <Container>{getContent()}</Container>
}

export default Authentication
