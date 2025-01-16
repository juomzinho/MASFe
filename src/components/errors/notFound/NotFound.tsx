import Button from '../../buttons/button/Button'
import Text from '../../texts/text/Text'
import * as Styles from './Styles'
import emptyIcon from '../../../assets/icons/empty.svg'

interface Props {
  action?: () => void
  title: string
  masc?: boolean
}

const NotFound = ({ title, action, masc }: Props) => {
  return (
    <Styles.Content>
      <Styles.Icon src={emptyIcon} />
      <Text text={masc?'Nenhum ' + title + ' foi encontrado':'Nenhuma ' + title + ' foi encontrada'} />
      {action && <Button title="Adicionar" color="blue" action={action} />}
    </Styles.Content>
  )
}

export default NotFound
