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
      setDots((old) => {
        if (old.length === 0) return '.'
        if (old.length === 1) return '..'
        if (old.length === 2) return '...'
        return ''
      })
    }, 650)

    return () => clearInterval(interval)
  }, [true])

  return (
    <Modal>
      <ModalContentWrapper>
        <Styles.Row style={{ justifyContent: 'center' }}>
          <Styles.Icon src={Icons[theme].ai} />
          <div  style={{ width: '245px'}}>
            <Text text={'Gerando critérios de aceitação' + dots} size={'default'} />
          </div>
        </Styles.Row>
      </ModalContentWrapper>
    </Modal>
  )
}

export default UXGenerating
