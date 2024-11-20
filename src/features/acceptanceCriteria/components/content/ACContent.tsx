import { useState } from 'react'
import { ContentWrapper } from '../../../../layouts/content/Index'
import { useAC } from '../../hooks/useAC'
import ButtonCard from '../../../../components/buttonCard/ButtonCard'
import {
  ButtonCardIcon,
  ButtonCardTitle,
  ButtonCardUser,
  ButtonColumnWrapper,
} from '../../../../components/buttonCard/Index'
import eficiencyIcon from '../../../../assets/icons/eficiencia.svg'
import { ACSchema } from '../../hooks/useFormAC'
import ModalAC from '../modalAC/ModaAC'

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
              <ButtonCardIcon icon={eficiencyIcon} />
            </ButtonColumnWrapper>
          </ButtonCard>
        )
      })}
      {AC && <ModalAC edit={AC} close={() => setAC(null)} />}
    </ContentWrapper>
  )
}

export default ACContent
