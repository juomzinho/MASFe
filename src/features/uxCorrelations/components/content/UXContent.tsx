import { useState } from 'react'
import { ContentWrapper } from '../../../../layouts/content/Index'
import { usePersonas } from '../../../personas/hooks/usePersonas'
import { PersonaSchema } from '../../../personas/hooks/useFormPersona'
import ModalPersona from '../../../personas/components/modalPersona/ModalPersona'
import ButtonCard from '../../../../components/buttonCard/ButtonCard'
import ButtonCardTitle from '../../../../components/buttonCard/ButtonCardTitle'
import { ButtonCardText, ButtonColumnWrapper } from '../../../../components/buttonCard/Index'

const UXContent = () => {
  const { data } = usePersonas()
  const [persona, setPersona] = useState<PersonaSchema | null>(null)
  return (
    <ContentWrapper>
      {data.map((item: any, index: number) => {
        return (
          <ButtonCard key={index.toString()} action={() => setPersona(item)}>
            <ButtonColumnWrapper>
              <ButtonCardTitle title={item.name} />
              <ButtonCardText text={item.occupation} />
            </ButtonColumnWrapper>
          </ButtonCard>
        )
      })}
      {persona && <ModalPersona edit={persona} close={() => setPersona(null)} />}
    </ContentWrapper>
  )
}

export default UXContent
