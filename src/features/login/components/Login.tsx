import Button from '../../../components/buttons/button/Button'
import ButtonWithoutBg from '../../../components/buttons/buttonWithoutBg/Button'
import Form from '../../../components/form/Form'
import FormInput from '../../../components/form/FormInput'
import Loader from '../../../components/loader/Loader'
import Text from '../../../components/texts/text/Text'
import Title from '../../../components/texts/title/Title'
import AuthContentWrapper from '../../../layouts/content/authContentWrapper/AuthContentWrapper'
import SidebarHeader from '../../../layouts/sidebar/SidebarHeader'
import { useLogin } from '../hooks/useLogin'

interface Props {
  toggleComponent: () => void
}

const Login = ({ toggleComponent }: Props) => {
  const { errors, handleSend, handleSubmit, isLoading, register } = useLogin()
  return (
    <AuthContentWrapper>
      <SidebarHeader />
      <Title title="Bem vindo de volta" />
      <Text text="Realize seu login e continue a criação de suas histórias de usuário" />
      <Form onSubmit={handleSubmit((e) => handleSend(e))}>
        <FormInput widthInput={'400px'} title="Email" {...register('email', { required: true })} error={errors.email} />
        <FormInput
          widthInput={'400px'}
          title="Senha"
          passoword
          {...register('password', { required: true })}
          error={errors.password}
        />
        <div style={{ display: 'flex', width: '100%', justifyContent: 'right' }}>
          <ButtonWithoutBg title="Esqueceu sua senha?" action={() => {}} />
        </div>
        <Button title="Entrar" type="submit" action={() => {}} color="gradient" width={'400px'} />
        <div style={{ display: 'flex', gap: 5, width: '100%', justifyContent: 'center' }}>
          <ButtonWithoutBg title="Não possui conta?" action={toggleComponent} />
          <ButtonWithoutBg title="Cadastre-se" color="gradient" action={toggleComponent} />
        </div>
      </Form>
      {isLoading && <Loader />}
    </AuthContentWrapper>
  )
}

export default Login
