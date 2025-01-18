import * as Styles from './Styles'
import WarningIcon from '../../../assets/icons/warning.svg'
import Text from '../../texts/text/Text'

interface Props {
    message: string
}

const Message = ({message}: Props) => {
    return <Styles.Content>
        <Styles.Icon src={WarningIcon} />
        <Text text={message} size='default' />
    </Styles.Content>
}

export default Message