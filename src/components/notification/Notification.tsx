import Text from '../texts/text/Text'
import Title from '../texts/title/Title'
import * as Styles from './Styles'
import CheckIcon from '../../assets/icons/check.svg'
import ErrorIcon from '../../assets/icons/error.svg'
import WarningIcon from '../../assets/icons/warning.svg'
import { NotificationStatus, useNotificationStore } from '../../store/notifications'

const Notification = () => {
  const { notifications, removeNotification } = useNotificationStore()

  const getIcon = (status: number) => {
    switch (status) {
      case NotificationStatus.Check:
        return CheckIcon
      case NotificationStatus.Warning:
        return WarningIcon
      case NotificationStatus.Error:
        return ErrorIcon
    }
  }

  return (
    <Styles.Container>
      {notifications.map((item, index) => {
        return (
          <Styles.Content key={index} onClick={() => removeNotification(item.id ?? '')}>
            <Styles.Icon src={getIcon(item.status)} />
            <Styles.TextContent>
              {item.title && <Title title={item.title} size="default" />}
              {item.text && <Text text={item.text} size="small" />}
            </Styles.TextContent>
          </Styles.Content>
        )
      })}
    </Styles.Container>
  )
}

export default Notification
