import * as Styles from './Styles'
// import ShortcutItem from '../shortcut/ShortcutItem'
import Card from '../card/Card'
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
import { UXProps } from '../../../uxCorrelations/hooks/useFormUX'
import ModalUX from '../../../uxCorrelations/components/modalUX/ModalUX'
import { Dimension } from '../../../../utils/defines/dimension'
import eficacyIcon from '../../../../assets/icons/eficacy.svg'
import eficiencyIcon from '../../../../assets/icons/efficiency.svg'
import { useHome } from '../../hooks/useHome'
import Loader from '../../../../components/loader/Loader'
import Title from '../../../../components/texts/title/Title'

const Home = () => {
  const { setContent } = useContentStore()
  const verbsRef = useRef<any>(null)
  const garretRef = useRef<any>(null)
  const [ux, toggleUX] = useState<UXProps | null>(null)
  const [width, setWidth] = useState({ garret: 0, verb: 0 })
  const { data, isLoading } = useHome()

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
          <Title title="UX Correlations" />
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
          {data?.uxCorrelations?.map((item: any, index: number) => {
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
        <Title title="Verbos mais utilizados em UX Corrletions" size="default" />
        <BarChart width={width.verb} data={data.verbs ?? []} />
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
        <Title title="Elementos de Garret mais relacionados a verbos" size="default" />
        <Chart hiddenLegend width={width.garret - width.garret / 2} data={data.garret ?? []} />
      </Card>
      {isLoading && <Loader />}
    </Styles.Content>
  )
}

export default Home
