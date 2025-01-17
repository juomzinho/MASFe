import { ModalContentWrapper, ModalHeader, ModalScroll } from '../../../../components/modals/modal'
import Text from '../../../../components/texts/text/Text'
import Title from '../../../../components/texts/title/Title'
import { Dimension } from '../../../../utils/defines/dimension'
import { Content } from '../../hooks/useModalUX'
import { ResultUXProps } from '../../hooks/useUX'
import * as Styles from './Styles'

interface Props {
  result: ResultUXProps
  toggleContent: (value: number) => void
  close: (value: boolean) => void
  handleDelete?: () => void
}

const ResultUX = ({ result, toggleContent, close, handleDelete }: Props) => {
  return (
    <ModalContentWrapper>
      <ModalHeader
        title={result.name}
        handleDelete={handleDelete}
        close={close}
        edit={() => toggleContent(Content.Register)}
      />
      <ModalScroll >
        <Styles.Header>
        <Text
            text={`História`}
            size='default'
          />
          <Title
            title={`Eu, ${result.persona.name}, quero que o sistema possa ${result.verb.verb}, ${result.description}.`}
            size="large"
          />
          <Title
            title={`Foco em ${Dimension[result.dimension]}`}
            size='large'
          />
          </Styles.Header>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <Styles.Header style={{marginBottom: 0}}>
          <Text
              text={`Critérios de Aceitação`}
              size='default'
          />
          </Styles.Header>
          {result.relationUXAC.map((item, index) => {
            return (
              <Styles.Card>
                <Title title={item.relation} key={index} size="default" />
                {item.acceptanceCriteria.map((ac, idx) => 
                      <Text text={'• ' + ac.criteria} key={idx} />)}
              </Styles.Card>
            )
          })}
        </div>
      </ModalScroll>
    </ModalContentWrapper>
  )
}

export default ResultUX
