import ButtonCard, {
  ButtonCardIcon,
  ButtonCardTitle,
  ButtonCardUser,
  ButtonColumnWrapper,
} from '../../../../components/buttons/buttonCard/Index'
import { ContentWrapper } from '../../../../layouts/content/Index'
import eficiencyIcon from '../../../../assets/icons/efficiency.svg'
import eficacyIcon from '../../../../assets/icons/eficacy.svg'
import { VerbSchema } from '../../hooks/useFormVerb'
import { useState } from 'react'
import ModalVerb from '../modalVerb/ModalVerb'
import { Dimension } from '../../../../utils/defines/dimension'
import NotFound from '../../../../components/errors/notFound/NotFound'

interface Props {
  data: VerbSchema[]
}

const VerbsContent = ({ data }: Props) => {
  const [verb, setVerb] = useState<VerbSchema | null>(null)
  const [modalVerb, toggleVerb] = useState(false)

  return (
    <ContentWrapper>
      {data.length === 0 && <NotFound title="verbos" action={() => toggleVerb(true)} />}
      {data.map((item: any, index: number) => {
        return (
          <ButtonCard key={index.toString()} action={() => setVerb(item)}>
            <ButtonColumnWrapper>
              <ButtonCardTitle title={item.verb} />
              <ButtonCardUser name={item.user.name} />
            </ButtonColumnWrapper>
            <ButtonCardIcon icon={item.dimension === Dimension['Eficiência'] ? eficiencyIcon : eficacyIcon} />
          </ButtonCard>
        )
      })}
      {modalVerb && <ModalVerb close={toggleVerb} />}
      {verb && <ModalVerb edit={verb} close={() => setVerb(null)} />}
    </ContentWrapper>
  )
}

export default VerbsContent
