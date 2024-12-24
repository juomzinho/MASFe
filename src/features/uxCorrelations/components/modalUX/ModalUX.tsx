import Modal from '../../../../components/modals/modal'
import { Content, useModalUX } from '../../hooks/useModalUX'
import { UXProps } from '../../hooks/useFormUX'
import UXGenerating from './UXGenerating'
import RegisterUX from './RegisterUX'
import ResultUX from './Result'

interface Props {
  close: (value: boolean) => void
  edit?: UXProps
}

const ModalUX = ({ close, edit }: Props) => {
  const { handleRequest, handleDelete, isLoading, isGen, result, content, toggleContent } = useModalUX({ edit, close })

  if (isGen) return <UXGenerating />

  return (
    <Modal loading={isLoading}>
      {content === Content.Result ? (
        <ResultUX result={result} toggleContent={toggleContent} close={close} handleDelete={handleDelete} />
      ) : (
        <RegisterUX close={close} handleDelete={handleDelete} handleRequest={handleRequest} edit={result} />
      )}
    </Modal>
  )
}

export default ModalUX
