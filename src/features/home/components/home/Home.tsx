import * as Styles from './Styles'
// import ShortcutItem from '../shortcut/ShortcutItem'
import Card from '../card/Card'
import { Title } from '../../../../components/modals/modal/Styles'
import ButtonCard from '../../../../components/buttons/buttonCard/ButtonCard'
import {
  ButtonCardIcon,
  ButtonCardText,
  ButtonCardTitle,
  ButtonCardUser,
  ButtonColumnWrapper,
} from '../../../../components/buttons/buttonCard/Index'
import { Garret } from '../../../../utils/defines/garret'
import Button from '../../../../components/buttons/button/Button'
import Chart from '../../../../components/charts/pie/PieChart'
import BarChart from '../../../../components/charts/bar/BarChart'
import { useContentStore } from '../../../../store/content'
import { useEffect, useRef, useState } from 'react'
import { useUX } from '../../../uxCorrelations/hooks/useUX'
import { UXProps } from '../../../uxCorrelations/hooks/useFormUX'
import ModalUX from '../../../uxCorrelations/components/modalUX/ModalUX'
import { Dimension } from '../../../../utils/defines/dimension'
import eficacyIcon from '../../../../assets/icons/eficacy.svg'
import eficiencyIcon from '../../../../assets/icons/efficiency.svg'

const Home = () => {
  const { setContent } = useContentStore()
  const { data: UXdata } = useUX()
  const verbsRef = useRef<any>(null)
  const garretRef = useRef<any>(null)
  const [ux, toggleUX] = useState<UXProps | null>(null)
  const [width, setWidth] = useState({ garret: 0, verb: 0 })

  useEffect(() => {
    const updateWidth = () => {
      if (verbsRef.current) {
        setWidth((old) => ({ ...old, verb: verbsRef.current.offsetWidth }))
      }
      if (garretRef.current) {
        setWidth((old) => ({ ...old, garret: garretRef.current.offsetWidth }))
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)

    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [])

  return (
    <Styles.Content>
      {/* <ShortcutItem gridArea="1 / 1 / 2 / 2" />
      <ShortcutItem gridArea="1 / 2 / 2 / 3" /> */}
      {/* <ShortcutItem gridArea="1 / 3 / 2 / 4" />
      <ShortcutItem gridArea="1 / 4 / 2 / 5" /> */}
      <Card gridArea="1 / 1 / 7 / 3">
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Title>UX Correlations</Title>
          <Button action={() => setContent(2)} title="Ver mais" color="gradient" />
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10,
            padding: 10,
            justifyContent: 'flex-start',
            height: 'calc(100% - 70px)',
            overflow: 'scroll',
            alignContent: 'flex-start',
          }}
        >
          {UXdata?.map((item: any, index: number) => {
            return (
              <ButtonCard key={index.toString()} full action={() => toggleUX(item)}>
                <ButtonColumnWrapper>
                  <ButtonCardTitle title={item.name} />
                  <ButtonCardText text={Garret[item.garret]} />
                  <ButtonCardUser name={item.user.name} />
                </ButtonColumnWrapper>
                <ButtonCardIcon icon={item.dimension === Dimension['Eficiência'] ? eficiencyIcon : eficacyIcon} />
              </ButtonCard>
            )
          })}
        </div>
        {ux && <ModalUX close={() => toggleUX(null)} edit={ux} />}
      </Card>
      <Card gridArea="4 / 3 / 7 / 5" ref={verbsRef}>
        <Title>Verbos</Title>
        <BarChart
          width={width.verb}
          data={[
            { name: 'Verbo 1', value: 40 },
            { name: 'Verbo 2', value: 10 },
            { name: 'Verbo 4', value: 40 },
            { name: 'Verbo 5', value: 10 },
            { name: 'Verbo 6', value: 40 },
            { name: 'Verbo 7', value: 10 },
            { name: 'Verbo 8', value: 40 },
            { name: 'Verbo 9', value: 10 },
            { name: 'Verbo 10', value: 10 },
          ]}
        />
      </Card>
      {/* <Card gridArea="1 / 4 / 3 / 5">
        <Title>Dimensões</Title>
        <Chart
          data={[
            { name: 'Eficiência', value: 40 },
            { name: 'Eficácia', value: 10 },
          ]}
        />
      </Card> */}
      <Card gridArea="1 / 3 / 4 / 5" ref={garretRef}>
        <Title>Garret</Title>
        <Chart
          hiddenLegend
          width={width.garret - width.garret / 2}
          data={[
            { name: 'Design de Interação', value: 40 },
            { name: 'Design de Interface', value: 10 },
            { name: 'Objetivos do Produto', value: 10 },
            { name: 'Arquitetura da Informação', value: 10 },
          ]}
        />
      </Card>
    </Styles.Content>
  )
}

export default Home
