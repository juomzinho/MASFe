import ButtonCard, {
  ButtonCardIcon,
  ButtonCardText,
  ButtonCardTitle,
  ButtonCardUser,
  ButtonColumnWrapper,
} from '../../../../components/buttons/buttonCard/Index'
import { ContentWrapper } from '../../../../layouts/content/Index'
import { Garret } from '../../../../utils/defines/garret'
import { useVerbs } from '../../hooks/useVerbs'
import eficiencyIcon from '../../../../assets/icons/eficiencia.svg'
import { VerbSchema } from '../../hooks/useFormVerb'
import { useState } from 'react'
import ModalVerb from '../modalVerb/ModalVerb'

const VerbsContent = () => {
  const { data } = useVerbs()
  const [verb, setVerb] = useState<VerbSchema | null>(null)

  return (
    <ContentWrapper>
      {data.map((item: any, index: number) => {
        return (
          <ButtonCard key={index.toString()} action={() => setVerb(item)}>
            <ButtonColumnWrapper>
              <ButtonCardTitle title={item.verb} />
              <ButtonCardText text={Garret[item.garret]} />
              <ButtonCardUser name={item.user.name} />
            </ButtonColumnWrapper>
            <ButtonCardIcon icon={eficiencyIcon} />
          </ButtonCard>
        )
      })}
      {verb && <ModalVerb edit={verb} close={() => setVerb(null)} />}
    </ContentWrapper>
  )
}

export default VerbsContent
