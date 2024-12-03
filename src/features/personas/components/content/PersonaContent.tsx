import { useState } from 'react'
import { ContentWrapper } from '../../../../layouts/content/Index'
import { PersonaSchema } from '../../hooks/useFormPersona'
import { usePersonas } from '../../hooks/usePersonas'
import ButtonCard from '../../../../components/buttons/buttonCard/ButtonCard'
import { ButtonCardText, ButtonCardTitle, ButtonColumnWrapper } from '../../../../components/buttons/buttonCard/Index'
import ModalPersona from '../modalPersona/ModalPersona'

const PersonaContent = () => {
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

export default PersonaContent
