import { useRef } from 'react'
import Modal, { ModalContentWrapper, ModalHeader } from '../../../../components/modals/modal'
import { PersonaSchema } from '../../hooks/useFormPersona'
import FormPersona from './FormPersona'
import { useModalPersona } from '../../hooks/useModalPersona'

interface Props {
  close: (value: boolean) => void
  edit?: PersonaSchema
}

const ModalPersona = ({ close, edit }: Props) => {
  const { handleRequest, handleDelete, isLoading, data } = useModalPersona({ edit, close })
  const ref = useRef<HTMLButtonElement>(null)

  return (
    <Modal loading={isLoading}>
      <ModalHeader
        title={`${edit ? 'Editar' : 'Cadastrar'} persona`}
        close={close}
        handleDelete={handleDelete}
        handleAction={() => ref.current?.click()}
      />
      <ModalContentWrapper>
        <FormPersona submit={handleRequest} ref={ref} edit={data} />
      </ModalContentWrapper>
    </Modal>
  )
}

export default ModalPersona
