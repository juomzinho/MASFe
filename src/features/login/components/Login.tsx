import Button from '../../../components/buttons/button/Button'
import ButtonWithoutBg from '../../../components/buttons/buttonWithoutBg/Button'
import Form from '../../../components/form/Form'
import FormInput from '../../../components/form/FormInput'
import Text from '../../../components/texts/text/Text'
import Title from '../../../components/texts/title/Title'
import AuthContentWrapper from '../../../layouts/content/authContentWrapper/AuthContentWrapper'
import SidebarHeader from '../../../layouts/sidebar/SidebarHeader'

interface Props {
  toggleComponent: () => void
}

const Login = ({ toggleComponent }: Props) => {
  return (
    <AuthContentWrapper>
      <SidebarHeader />
      <Title title="Bem vindo de volta" />
      <Text text="Realize seu login e continue a criação de suas histórias de usuário" />
      <Form>
        <FormInput widthInput={'400px'} title="Email" />
        <FormInput widthInput={'400px'} title="Senha" passoword />
        <div style={{ display: 'flex', width: '100%', justifyContent: 'right' }}>
          <ButtonWithoutBg title="Esqueceu sua senha?" action={() => {}} />
        </div>
        <Button title="Entrar" action={() => {}} color="gradient" width={'400px'} />
        <div style={{ display: 'flex', gap: 5, width: '100%', justifyContent: 'center' }}>
          <ButtonWithoutBg title="Não possui conta?" action={toggleComponent} />
          <ButtonWithoutBg title="Cadastre-se" color="gradient" action={toggleComponent} />
        </div>
      </Form>
    </AuthContentWrapper>
  )
}

export default Login
