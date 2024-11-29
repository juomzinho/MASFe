import { useState } from 'react'
import Login from '../../features/login/components/Login'
import Container from '../../layouts/container/Container'
import Register from '../../features/register/components/Register'

export enum AuthContent {
  Login = 1,
  Register,
}

const Authentication = () => {
  const [content, toggleContent] = useState(AuthContent.Register)

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
