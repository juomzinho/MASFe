import { pieArcClasses, PieChart } from '@mui/x-charts'
import * as Styles from './Styles'
import { usePieChart } from './hooks/usePieChart'
import { BrowserView } from 'react-device-detect'

interface Props {
  data: {
    name: string
    value: number
  }[]
  width: number
  hiddenLegend?: boolean
}

const Chart = ({ data, hiddenLegend, width }: Props) => {
  const { getPercentage, colors } = usePieChart({ data })
  return (
    <Styles.Content>
      <PieChart
        series={[
          {
            data: data.sort((a, b) => b.value - a.value).map((item, id) => ({ id, label: item.name, value: item.value })),
            innerRadius: 95,
            outerRadius: 75,
            highlightScope: { fade: 'global', highlight: 'item' },
          },
        ]}
        colors={colors}
        slotProps={{
          pieArc: {
            stroke: '#000',
            width,
          },
          legend: {
            hidden: hiddenLegend,
          },
        }}
        sx={() => ({
          [`.${pieArcClasses.root}`]: {
            stroke: 'none',
          },
        })}
        width={width}
      />
      <BrowserView>
      <Styles.CaptionContent>
        {data
          .sort((a, b) => b.value - a.value)
          .map((item, index) => (
            <Styles.Caption key={index}>
              <Styles.PercentageText>{getPercentage()[index]}%</Styles.PercentageText>
              <Styles.CaptionTitle >{item.name}</Styles.CaptionTitle>
              <Styles.Color color={colors[index]} />
            </Styles.Caption>
          ))}
      </Styles.CaptionContent>
      </BrowserView>
    </Styles.Content>
  )
}

export default Chart
