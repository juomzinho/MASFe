import { pieArcClasses, PieChart } from '@mui/x-charts'
import { useThemeStore } from '../../../store/theme'
import { darkTheme, lightTheme } from '../../../utils/theme/theme'
import * as Styles from './Styles'
import { usePieChart } from './hooks/usePieChart'

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
  const { theme } = useThemeStore()
  return (
    <Styles.Content>
      <PieChart
        series={[
          {
            data: data.map((item, id) => ({ id, label: item.name, value: item.value })),
            innerRadius: 115,
            outerRadius: 130,
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
            markGap: 2,
            padding: 0,
            itemMarkHeight: 4,
            itemMarkWidth: 10,
            labelStyle: {
              fill: theme === 'light' ? lightTheme.color.primary.text : darkTheme.color.primary.text,
              fontSize: 10.55,
            },
          },
        }}
        sx={() => ({
          [`.${pieArcClasses.root}`]: {
            stroke: 'none',
          },
        })}
        width={width}
      />
      <Styles.CaptionContent>
        {data.map((item, index) => (
          <Styles.Caption key={index}>
            <Styles.PercentageText>{getPercentage()[index]}%</Styles.PercentageText>
            <Styles.CaptionTitle color={colors[index]}>{item.name}</Styles.CaptionTitle>
          </Styles.Caption>
        ))}
      </Styles.CaptionContent>
    </Styles.Content>
  )
}

export default Chart
