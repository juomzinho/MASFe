import { useRef } from "react"
import { ModalContentWrapper, ModalHeader } from "../../../../components/modals/modal"
import FormUX from "./FormUX"
import { UXProps } from "../../hooks/useFormUX"

interface Props {
    close: (value: boolean) => void
    handleDelete?: () => void
    handleRequest: (data: UXProps) => void
    edit?: UXProps
}

const RegisterUX = ({
    close,
    handleDelete,
    handleRequest,
    edit
}: Props) => {
    const ref = useRef<HTMLButtonElement>(null)
    return <>
    <ModalHeader
        title={`${edit ? 'Editar' : 'Cadastrar'} UX Correlation`}
        close={close}
        handleDelete={handleDelete}
        handleAction={() => ref.current?.click()}
      />
      <ModalContentWrapper>
        <FormUX submit={handleRequest} ref={ref} edit={edit} />
      </ModalContentWrapper>
    </>
}

export default RegisterUX