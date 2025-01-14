import Button from '../../buttons/button/Button'
import Text from '../../texts/text/Text'
import * as Styles from './Styles'
import emptyIcon from '../../../assets/icons/empty.svg'

interface Props {
  action?: () => void
  title: string
}

const NotFound = ({ title, action }: Props) => {
  return (
    <Styles.Content>
      <Styles.Icon src={emptyIcon} />
      <Text text={'Nenhum ' + title + ' foi encontrado'} />
      {action && <Button title="Adicionar" color="blue" action={action} />}
    </Styles.Content>
  )
}

export default NotFound
