import { useRef } from 'react'
import Modal, { ModalContentWrapper, ModalHeader } from '../../../../components/modal'
import { PersonaSchema } from '../../hooks/useFormPersona'
import FormPersona from './FormPersona'
import { useModalPersona } from '../../hooks/useModalPersona'

interface Props {
  close: (value: boolean) => void
  edit?: PersonaSchema
}

const ModalPersona = ({ close, edit }: Props) => {
  const { handleRequest, handleDelete } = useModalPersona({ edit, close })
  const ref = useRef<HTMLButtonElement>(null)

  return (
    <Modal>
      <ModalHeader
        title={`${edit ? 'Editar' : 'Cadastrar'} persona`}
        close={close}
        handleDelete={handleDelete}
        handleAction={() => ref.current?.click()}
      />
      <ModalContentWrapper>
        <FormPersona submit={handleRequest} ref={ref} edit={edit} />
      </ModalContentWrapper>
    </Modal>
  )
}

export default ModalPersona
