import { axisClasses, BarChart } from '@mui/x-charts'
import { useThemeStore } from '../../../store/theme'
import { darkTheme, lightTheme } from '../../../utils/theme/theme'

interface Props {
  data: {
    name: string
    value: number
  }[]
  width: number
  hiddenLegend?: boolean
}

const Chart = ({ data, width }: Props) => {
  const { theme } = useThemeStore()
  return (
    <BarChart
      height={300}
      width={width}
      series={[
        {
          data: data.sort((a, b) => b.value - a.value).map((item) => item.value),
          type: 'bar',
          color: '#5121FF',
          highlightScope: { highlight: 'item', fade: 'global' },
          stackOrder: 'reverse',
        },
      ]}
      leftAxis={{
        disableLine: true,
        disableTicks: true,
      }}
      bottomAxis={{
        disableLine: true,
        disableTicks: true,
      }}
      sx={() => ({
        [`.${axisClasses.root}`]: {
          [`.${axisClasses.tickLabel}`]: {
            fill: theme === 'light' ? lightTheme.color.primary.text : darkTheme.color.primary.text,
          },
        },
      })}
      borderRadius={10}
      xAxis={[{ scaleType: 'band', data: data.map((item) => item.name) }]}
    />
  )
}

export default Chart
