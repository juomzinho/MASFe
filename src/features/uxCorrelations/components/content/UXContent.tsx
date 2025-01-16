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
import NotFound from '../../../../components/errors/notFound/NotFound'
import Text from '../../../../components/texts/text/Text'

interface Props {
  data: UXProps[]
}

const UXContent = ({ data }: Props) => {
  const [ux, setUX] = useState<UXProps | null>(null)
  const [modalUX, toggleUX] = useState(false)
  return (
    <ContentWrapper>
      {data?.length === 0 && <NotFound title="ux correlations" action={() => toggleUX(true)} />}
      {data.map((item: any, index: number) => {
        return (
          <ButtonCard key={index.toString()} action={() => setUX(item)}>
            <ButtonColumnWrapper>
              <ButtonCardTitle title={item.name} />
              <ButtonCardText text={item.verb} />
              <ButtonCardText text={item.user.name} />
            </ButtonColumnWrapper>
            <div>
              <ButtonCardIcon icon={item.dimension === Dimension['Eficiência'] ? eficiencyIcon : eficacyIcon} />
              <Text text={Dimension[item.dimension]} />
            </div>
          </ButtonCard>
        )
      })}
      {modalUX && <ModalUX close={toggleUX} />}
      {ux && <ModalUX edit={ux} close={() => setUX(null)} />}
    </ContentWrapper>
  )
}

export default UXContent
