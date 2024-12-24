import { useState } from 'react'
import { ContentWrapper } from '../../../../layouts/content/Index'
import { useAC } from '../../hooks/useAC'
import ButtonCard from '../../../../components/buttons/buttonCard/ButtonCard'
import {
  ButtonCardIcon,
  ButtonCardTitle,
  ButtonCardUser,
  ButtonColumnWrapper,
} from '../../../../components/buttons/buttonCard/Index'
import eficacyIcon from '../../../../assets/icons/eficacy.svg'
import eficiencyIcon from '../../../../assets/icons/efficiency.svg'
import { ACSchema } from '../../hooks/useFormAC'
import ModalAC from '../modalAC/ModaAC'
import { Dimension } from '../../../../utils/defines/dimension'

const ACContent = () => {
  const { data } = useAC()
  const [AC, setAC] = useState<ACSchema | null>(null)
  return (
    <ContentWrapper>
      {data.map((item: any, index: number) => {
        return (
          <ButtonCard key={index.toString()} action={() => setAC(item)}>
            <ButtonColumnWrapper>
              <ButtonCardTitle title={item.criteria} />
              <ButtonCardUser name={item.user.name} />
            </ButtonColumnWrapper>
            <ButtonColumnWrapper>
              <ButtonCardIcon icon={item.dimension === Dimension['Eficiência'] ? eficiencyIcon : eficacyIcon} />
            </ButtonColumnWrapper>
          </ButtonCard>
        )
      })}
      {AC && <ModalAC edit={AC} close={() => setAC(null)} />}
    </ContentWrapper>
  )
}

export default ACContent
