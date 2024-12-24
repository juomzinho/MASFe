import { useState } from 'react'
import { ContentWrapper } from '../../../../layouts/content/Index'
import ButtonCard from '../../../../components/buttons/buttonCard/ButtonCard'
import ButtonCardTitle from '../../../../components/buttons/buttonCard/ButtonCardTitle'
import { ButtonCardIcon, ButtonCardText, ButtonColumnWrapper } from '../../../../components/buttons/buttonCard/Index'
import { UXProps } from '../../hooks/useFormUX'
import ModalUX from '../modalUX/ModalUX'
import { Dimension } from '../../../../utils/defines/dimension'
import eficiencyIcon from '../../../../assets/icons/efficiency.svg'
import eficacyIcon from '../../../../assets/icons/eficacy.svg'

interface Props {
  data: UXProps[]
}

const UXContent = ({ data }: Props) => {
  const [ux, setUX] = useState<UXProps | null>(null)
  return (
    <ContentWrapper>
      {data.map((item: any, index: number) => {
        return (
          <ButtonCard key={index.toString()} action={() => setUX(item)}>
            <ButtonColumnWrapper>
              <ButtonCardTitle title={item.name} />
              <ButtonCardText text={item.verb} />
              <ButtonCardText text={item.user.name} />
            </ButtonColumnWrapper>
            <ButtonCardIcon icon={item.dimension === Dimension['Eficiência'] ? eficiencyIcon : eficacyIcon} />
          </ButtonCard>
        )
      })}
      {ux && <ModalUX edit={ux} close={() => setUX(null)} />}
    </ContentWrapper>
  )
}

export default UXContent
