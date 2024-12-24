import { useState } from 'react'
import { ContentHeader } from '../../../layouts/content/Index'
import ButtonWrapper from '../../buttons/buttonCard/ButtonWrapper'
import SquareButton from '../../buttons/squareButton/SquareButton'
import * as Styles from './Styles'
import ActionModal from '../actionModal/ActionModal'
import TrashIcon from '../../../assets/icons/trash.svg'
import SaveIcon from '../../../assets/icons/save.svg'
import { Icons } from '../../../utils/defines/icons'
import { useThemeStore } from '../../../store/theme'

interface Props {
  title: string
  close?: (value: boolean) => void
  handleAction?: () => void
  handleDelete?: () => void
  edit?: () => void
}

const ModalHeader = ({ title, close, handleAction, handleDelete, edit }: Props) => {
  const [modalDelete, toggleDelete] = useState(false)
  const { theme } = useThemeStore()
  return (
    <ContentHeader>
      <Styles.Title>{title}</Styles.Title>
      <ButtonWrapper>
        {close && <SquareButton icon={Icons[theme].close} color="default" action={() => close(false)} />}
        {handleDelete && <SquareButton icon={TrashIcon} color="red" action={() => toggleDelete(true)} />}
        {edit && <SquareButton icon={Icons[theme].edit} color="default" action={() => edit()} />}
        {handleAction && <SquareButton icon={SaveIcon} color="green" action={() => handleAction()} />}
      </ButtonWrapper>
      {modalDelete && handleDelete && (
        <ActionModal action="excluir" cancel={() => toggleDelete(false)} handleAction={handleDelete} />
      )}
    </ContentHeader>
  )
}

export default ModalHeader
