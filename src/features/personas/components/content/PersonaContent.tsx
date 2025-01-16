import { useState } from 'react'
import { ContentWrapper } from '../../../../layouts/content/Index'
import { PersonaSchema } from '../../hooks/useFormPersona'
import ButtonCard from '../../../../components/buttons/buttonCard/ButtonCard'
import { ButtonCardText, ButtonCardTitle, ButtonColumnWrapper } from '../../../../components/buttons/buttonCard/Index'
import ModalPersona from '../modalPersona/ModalPersona'
import NotFound from '../../../../components/errors/notFound/NotFound'

interface Props {
  data: PersonaSchema[]
}

const PersonaContent = ({ data }: Props) => {
  const [persona, setPersona] = useState<PersonaSchema | null>(null)
  const [modalPersona, togglePersona] = useState(false)
  return (
    <ContentWrapper>
      {data?.length === 0 && <NotFound title="persona" action={() => togglePersona(true)} />}
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
      {modalPersona && <ModalPersona close={togglePersona} />}
      {persona && <ModalPersona edit={persona} close={() => setPersona(null)} />}
    </ContentWrapper>
  )
}

export default PersonaContent
