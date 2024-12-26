import { ContentEnum, useContentStore } from '../../store/content'
import * as Styles from './Styles'
import { Icons } from '../../utils/defines/icons'
import { useThemeStore } from '../../store/theme'

interface Props {
  title: 'Inicio' | 'UX Correlations' | 'Verbos' | 'Critérios de Aceitação' | 'Personas'
  icon?: string
}

const SidebarItem = ({ title }: Props) => {
  const { content, setContent } = useContentStore()
  const { theme } = useThemeStore()
  const getIconName = () => {
    switch (title) {
      case 'Inicio':
        return 'home'
      case 'UX Correlations':
        return 'ux'
      case 'Verbos':
        return 'verb'
      case 'Personas':
        return 'user'
      default:
        return 'home'
    }
  }

  return (
    <Styles.Item active={ContentEnum[content] === title} onClick={() => setContent(ContentEnum[title])}>
      <Styles.Icon active={ContentEnum[content] === title} src={Icons[theme][getIconName()]} />
      <Styles.ItemTitle active={ContentEnum[content] === title}>{title}</Styles.ItemTitle>
    </Styles.Item>
  )
}

export default SidebarItem
