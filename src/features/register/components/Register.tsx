import { isMobile } from 'react-device-detect'
import Button from '../../../components/buttons/button/Button'
import ButtonWithoutBg from '../../../components/buttons/buttonWithoutBg/Button'
import Form from '../../../components/form/Form'
import FormDate from '../../../components/form/FormDate'
import FormInput from '../../../components/form/FormInput'
import FormSelect from '../../../components/form/FormSelect'
import Loader from '../../../components/loader/Loader'
import Text from '../../../components/texts/text/Text'
import Title from '../../../components/texts/title/Title'
import AuthContentWrapper from '../../../layouts/content/authContentWrapper/AuthContentWrapper'
import SidebarHeader from '../../../layouts/sidebar/SidebarHeader'
import { useRegister } from '../hooks/useRegister'

interface Props {
  toggleComponent: () => void
}

const Register = ({ toggleComponent }: Props) => {
  const { control, errors, register, handleSubmit, setValue, handleSend, isLoading } = useRegister({ toggleComponent })
  return (
    <AuthContentWrapper>
      <SidebarHeader />
      <Title title="Seja bem vindo" />
      <Text text="Realize seu cadastro e comece a criação de suas histórias de usuário" />
      <Form onSubmit={handleSubmit((e) => handleSend(e))}>
        <FormInput widthInput={isMobile?'calc(100vw - 70px)':'400px'} title="Nome" {...register('name', { required: true })} error={errors.name} />
        <FormInput widthInput={isMobile?'calc(100vw - 70px)':'400px'} title="Email" {...register('email', { required: true })} error={errors.email} />
        <FormInput
          widthInput={isMobile?'calc(100vw - 70px)':'400px'}
          passoword
          title="Senha"
          {...register('password', { required: true })}
          error={errors.password}
        />
        <FormSelect
          title="Gênero"
          options={['Masculino', 'Feminino', 'Outros']}
          control={control}
          {...register('gender')}
          error={errors.gender}
        />
        <FormDate
          control={control}
          setValue={setValue}
          title="Data de nascimento"
          {...register('birthday')}
          error={errors.birthday}
        />
        <FormInput widthInput={isMobile?'calc(100vw - 70px)':'400px'} title="Profissão" {...register('occupation')} error={errors.occupation} />
        <Button title="Cadastrar" action={() => {}} type="submit" color="gradient" width={'400px'} />
      </Form>
      <div style={{ display: 'flex', gap: 5, width: '100%', justifyContent: 'center', marginTop: '-15px' }}>
        <ButtonWithoutBg title="Já possui conta? Entre" action={toggleComponent} />
      </div>
      {isLoading && <Loader />}
    </AuthContentWrapper>
  )
}

export default Register
