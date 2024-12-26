import Button from '../../buttons/button/Button'
import Modal, { ModalContentWrapper, ModalFooter, ModalHeader } from '../modal'
import ModalText from '../modal/ModalText'

interface Props {
  action: string
  cancel: () => void
  handleAction: () => void
}

const ActionModal = ({ action, handleAction, cancel }: Props) => {
  return (
    <Modal>
      <ModalHeader title={'Deseja ' + action} />
      <ModalContentWrapper>
        <ModalText text="As alterações não poderão ser revertidas" />
      </ModalContentWrapper>
      <ModalFooter>
        <Button title={action} action={handleAction} color="red" />
        <Button title="Cancelar" action={cancel} color="default" />
      </ModalFooter>
    </Modal>
  )
}

export default ActionModal
