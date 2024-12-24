import * as Styles from './Styles'
import { useEffect, useState } from 'react'
import Modal, { ModalContentWrapper } from '../../../../components/modals/modal'
import Text from '../../../../components/texts/text/Text'
import { Icons } from '../../../../utils/defines/icons'
import { useThemeStore } from '../../../../store/theme'

const UXGenerating = () => {
  const [dots, setDots] = useState('')
  const { theme } = useThemeStore()

  useEffect(() => {
    const interval = setInterval(() => {
      if (dots.length === 3) {
        setDots('')
      } else {
        setDots((old) => old + '.')
      }
    }, 500)

    return () => clearInterval(interval)
  }, [true])

  return (
    <Modal>
      <ModalContentWrapper>
        <Styles.Row>
          <Styles.Icon src={Icons[theme].ai} />
          <Text text={'Gerando sua história de usuário isso pode demorar um pouco ' + dots} size={'default'} />
        </Styles.Row>
      </ModalContentWrapper>
    </Modal>
  )
}

export default UXGenerating
