import { useRef } from 'react'
import Modal, { ModalContentWrapper, ModalHeader } from '../../../../components/modals/modal'
import { useModalUX } from '../../hooks/useModalUX'
import { UXProps } from '../../hooks/useFormUX'
import FormUX from './FormUX'

interface Props {
  close: (value: boolean) => void
  edit?: UXProps
}

const ModalUX = ({ close, edit }: Props) => {
  const { handleRequest, handleDelete } = useModalUX({ edit, close })
  const ref = useRef<HTMLButtonElement>(null)

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
    </Modal>
  )
}

export default ModalUX
