import Modal from '../../../../components/modals/modal'
import { useModalUX } from '../../hooks/useModalUX'
import { UXProps } from '../../hooks/useFormUX'
import Loader from '../../../../components/loader/Loader'
import UXGenerating from './UXGenerating'
import RegisterUX from './RegisterUX'
import ResultUX from './Result'

interface Props {
  close: (value: boolean) => void
  edit?: UXProps
}

const ModalUX = ({ close, edit }: Props) => {
  const { handleRequest, handleDelete, isLoading, isGen } = useModalUX({ edit, close })
 
  if(isGen) return <UXGenerating />

  return (
    <Modal>
      {/* <RegisterUX 
        close={close}
        handleDelete={handleDelete}
        handleRequest={handleRequest}
        edit={edit}
      /> */}
      <ResultUX />
      {isLoading && <Loader />}
    </Modal>
  )
}

export default ModalUX
