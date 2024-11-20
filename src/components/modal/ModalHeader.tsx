import { useState } from 'react'
import { ContentHeader } from '../../layouts/content/Index'
import ButtonWrapper from '../buttonCard/ButtonWrapper'
import SquareButton from '../squareButton/SquareButton'
import * as Styles from './Styles'
import ActionModal from '../actionModal/ActionModal'

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
        {close && <SquareButton icon="" color="default" action={() => close(false)} />}
        {handleDelete && <SquareButton icon="" color="red" action={() => toggleDelete(true)} />}
        {handleAction && <SquareButton icon="" color="blue" action={() => handleAction()} />}
      </ButtonWrapper>
      {modalDelete && handleDelete && (
        <ActionModal action="excluir" cancel={() => toggleDelete(false)} handleAction={handleDelete} />
      )}
    </ContentHeader>
  )
}

export default ModalHeader
