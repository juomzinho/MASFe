import { useState } from 'react'
import { ContentHeader } from '../../../layouts/content/Index'
import ButtonWrapper from '../../buttons/buttonCard/ButtonWrapper'
import SquareButton from '../../buttons/squareButton/SquareButton'
import * as Styles from './Styles'
import ActionModal from '../actionModal/ActionModal'
import TrashIcon from '../../../assets/icons/trash.svg'
import CancelIcon from '../../../assets/icons/cancel.svg'
import SaveIcon from '../../../assets/icons/save.svg'

interface Props {
  title: string
  close?: (value: boolean) => void
  handleAction?: () => void
  handleDelete?: () => void
}

const ModalHeader = ({ title, close, handleAction, handleDelete }: Props) => {
  const [modalDelete, toggleDelete] = useState(false)
  return (
    <ContentHeader>
      <Styles.Title>{title}</Styles.Title>
      <ButtonWrapper>
        {close && <SquareButton icon={CancelIcon} color="default" action={() => close(false)} />}
        {handleDelete && <SquareButton icon={TrashIcon} color="red" action={() => toggleDelete(true)} />}
        {handleAction && <SquareButton icon={SaveIcon} color="green" action={() => handleAction()} />}
      </ButtonWrapper>
      {modalDelete && handleDelete && (
        <ActionModal action="excluir" cancel={() => toggleDelete(false)} handleAction={handleDelete} />
      )}
    </ContentHeader>
  )
}

export default ModalHeader
