import { useRef } from 'react'
import Modal, { ModalContentWrapper, ModalHeader } from '../../../../components/modals/modal'
import ModalText from '../../../../components/modals/modal/ModalText'
import { useModalVerb } from '../../hooks/useModalVerb'
import FormVerb from './FormVerb'
import { VerbSchema } from '../../hooks/useFormVerb'

interface Props {
  close: (value: boolean) => void
  edit?: VerbSchema
}

const ModalVerb = ({ close, edit }: Props) => {
  const { handleRequest, handleDelete } = useModalVerb({ edit, close })
  const ref = useRef<HTMLButtonElement>(null)

  return (
    <Modal>
      <ModalHeader
        title={`${edit ? 'Editar' : 'Cadastrar'} verbo`}
        close={close}
        handleDelete={handleDelete}
        handleAction={() => ref.current?.click()}
      />
      <ModalContentWrapper>
        <ModalText
          text="Escolha se o verbo será incluido como eficiência ou eficácia e em qual dimensão
                de Garret"
        />
        <FormVerb submit={handleRequest} ref={ref} edit={edit} />
      </ModalContentWrapper>
    </Modal>
  )
}

export default ModalVerb
