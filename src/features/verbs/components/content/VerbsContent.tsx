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

interface Props {
  data: VerbSchema[]
}

const VerbsContent = ({ data }: Props) => {
  const [verb, setVerb] = useState<VerbSchema | null>(null)

  return (
    <ContentWrapper>
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
      {verb && <ModalVerb edit={verb} close={() => setVerb(null)} />}
    </ContentWrapper>
  )
}

export default VerbsContent
