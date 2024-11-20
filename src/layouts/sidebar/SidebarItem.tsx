import { ContentEnum, useContentStore } from '../../store/content'
import * as Styles from './Styles'

interface Props {
  title: 'Inicio' | 'UX Correlations' | 'Verbos' | 'Critérios de Aceitação' | 'Personas'
  icon?: string
}

const SidebarItem = ({ title }: Props) => {
  const { content, setContent } = useContentStore()
  return (
    <Styles.Item active={ContentEnum[content] === title} onClick={() => setContent(ContentEnum[title])}>
      <Styles.Icon active={ContentEnum[content] === title} />
      <Styles.ItemTitle active={ContentEnum[content] === title}>{title}</Styles.ItemTitle>
    </Styles.Item>
  )
}

export default SidebarItem
