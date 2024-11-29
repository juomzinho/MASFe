import * as Styles from './Styles'
import ShortcutItem from '../shortcut/ShortcutItem'
import Card from '../card/Card'
import { Title } from '../../../../components/modal/Styles'
import { useVerbs } from '../../../verbs/hooks/useVerbs'
import ButtonCard from '../../../../components/buttonCard/ButtonCard'
import {
  //   ButtonCardIcon,
  ButtonCardText,
  ButtonCardTitle,
  ButtonCardUser,
  ButtonColumnWrapper,
} from '../../../../components/buttonCard/Index'
import { Garret } from '../../../../utils/defines/garret'
import Button from '../../../../components/button/Button'
import Chart from '../../../../components/charts/pie/PieChart'
import BarChart from '../../../../components/charts/bar/BarChart'

const Home = () => {
  const { data } = useVerbs()
  return (
    <Styles.Content>
      <ShortcutItem gridArea="1 / 1 / 2 / 2" />
      <ShortcutItem gridArea="1 / 2 / 2 / 3" />
      {/* <ShortcutItem gridArea="1 / 3 / 2 / 4" />
      <ShortcutItem gridArea="1 / 4 / 2 / 5" /> */}
      <Card gridArea="1 / 1 / 7 / 3">
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Title>UX Correlations</Title>
          <Button action={() => {}} title="Ver mais" color="gradient" />
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10,
            padding: 10,
            justifyContent: 'start',
            height: 'calc(100% - 70px)',
            overflow: 'scroll',
          }}
        >
          {data.map((item: any, index: number) => {
            return (
              <ButtonCard key={index.toString()} full action={() => {}}>
                <ButtonColumnWrapper>
                  <ButtonCardTitle title={item.verb} />
                  <ButtonCardText text={Garret[item.garret]} />
                  <ButtonCardUser name={item.user.name} />
                </ButtonColumnWrapper>
                {/* <ButtonCardIcon icon={eficiencyIcon} /> */}
              </ButtonCard>
            )
          })}
          {data.map((item: any, index: number) => {
            return (
              <ButtonCard key={index.toString()} full action={() => {}}>
                <ButtonColumnWrapper>
                  <ButtonCardTitle title={item.verb} />
                  <ButtonCardText text={Garret[item.garret]} />
                  <ButtonCardUser name={item.user.name} />
                </ButtonColumnWrapper>
                {/* <ButtonCardIcon icon={eficiencyIcon} /> */}
              </ButtonCard>
            )
          })}
          {data.map((item: any, index: number) => {
            return (
              <ButtonCard key={index.toString()} full action={() => {}}>
                <ButtonColumnWrapper>
                  <ButtonCardTitle title={item.verb} />
                  <ButtonCardText text={Garret[item.garret]} />
                  <ButtonCardUser name={item.user.name} />
                </ButtonColumnWrapper>
                {/* <ButtonCardIcon icon={eficiencyIcon} /> */}
              </ButtonCard>
            )
          })}
        </div>
      </Card>
      <Card gridArea="4 / 3 / 7 / 5">
        <Title>Dimensão</Title>
        <BarChart
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
      <Card gridArea="1 / 4 / 4 / 5">
        <Title>Verbos</Title>
        <Chart
          data={[
            { name: 'Eficiência', value: 40 },
            { name: 'Eficácia', value: 10 },
          ]}
        />
      </Card>
      <Card gridArea="1 / 3 / 4 / 4">
        <Title>Garret</Title>
        <Chart
          data={[
            { name: 'Design de Interação', value: 40 },
            { name: 'Design de Interface', value: 10 },
            { name: 'Objetivos do Produto', value: 10 },
            { name: 'Arquitetura da Informação', value: 10 },
          ]}
        />
      </Card>
      {/* <Card gridArea="1 / 3 / 3 / 5" /> */}
    </Styles.Content>
  )
}

export default Home
