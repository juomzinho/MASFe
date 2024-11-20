import { useRef } from 'react'
import Modal, { ModalContentWrapper, ModalHeader } from '../../../../components/modal'
import FormPersona from './FormAC'
import { useModalAC } from '../../hooks/useModalAC'
import { ACSchema } from '../../hooks/useFormAC'

interface Props {
  close: (value: boolean) => void
  edit?: ACSchema
}

const ModalAC = ({ close, edit }: Props) => {
  const { handleRequest, handleDelete } = useModalAC({ edit, close })
  const ref = useRef<HTMLButtonElement>(null)

  return (
    <Modal>
      <ModalHeader
        title={`${edit ? 'Editar' : 'Cadastrar'} critério de aceitação`}
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

export default ModalAC
