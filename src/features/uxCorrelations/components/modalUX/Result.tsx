import { ModalContentWrapper, ModalHeader, ModalScroll } from '../../../../components/modals/modal'
import Text from '../../../../components/texts/text/Text'
import Title from '../../../../components/texts/title/Title'
import { Content } from '../../hooks/useModalUX'
import { ResultUXProps } from '../../hooks/useUX'

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
      <ModalScroll>
        <Title
          title={`Eu ${result.persona.name}, quero que o sistema ${result.verb.verb}, ${result.description}`}
          size="default"
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {result.relationUXAC.map((item, index) => {
            return (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 5 }}>
                <Title title={item.relation} key={index} size="default" />
                {item.acceptanceCriteria.map((ac, idx) => {
                  return (
                    <>
                      <Text text={' - ' + ac.criteria} key={idx} />
                    </>
                  )
                })}
              </div>
            )
          })}
        </div>
      </ModalScroll>
    </ModalContentWrapper>
  )
}

export default ResultUX
