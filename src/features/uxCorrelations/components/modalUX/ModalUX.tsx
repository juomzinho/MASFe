import { useEffect, useRef, useState } from 'react'
import Modal, { ModalContentWrapper, ModalHeader } from '../../../../components/modals/modal'
import { useModalUX } from '../../hooks/useModalUX'
import { UXProps } from '../../hooks/useFormUX'
import FormUX from './FormUX'
import Loader from '../../../../components/loader/Loader'
import * as Styles from './Styles'
import { useThemeStore } from '../../../../store/theme'
import { Icons } from '../../../../utils/defines/icons'
import Text from '../../../../components/texts/text/Text'

interface Props {
  close: (value: boolean) => void
  edit?: UXProps
}

const ModalUX = ({ close, edit }: Props) => {
  const { handleRequest, handleDelete, isLoading, data, isGen } = useModalUX({ edit, close })
  const ref = useRef<HTMLButtonElement>(null)
  const { theme } = useThemeStore()
  const [dots, setDots] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      if (dots.length > 3) {
        setDots('')
      } else {
        setDots((old) => old + '.')
      }
    }, 500)

    return () => clearInterval(interval)
  }, [true])

  if (isGen) {
    return (
      <Modal>
        <ModalContentWrapper>
          <Styles.Row>
            <Styles.Icon src={Icons[theme].ai} />
            <Text text={'Gerando sua história de usuário isso pode demorar um pouco ' + dots} size={'default'} />
          </Styles.Row>
        </ModalContentWrapper>
      </Modal>
    )
  }

  return (
    <Modal>
      <ModalHeader
        title={`${edit ? 'Editar' : 'Cadastrar'} UX Correlation`}
        close={close}
        handleDelete={handleDelete}
        handleAction={() => ref.current?.click()}
      />
      <ModalContentWrapper>
        <FormUX submit={handleRequest} ref={ref} edit={edit} />
      </ModalContentWrapper>
      <p>{data?.data}</p>
      {isLoading && <Loader />}
    </Modal>
  )
}

export default ModalUX
