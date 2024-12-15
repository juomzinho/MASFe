import { pieArcClasses, PieChart } from '@mui/x-charts'
import { useThemeStore } from '../../../store/theme'
import { darkTheme, lightTheme } from '../../../utils/theme/theme'

interface Props {
  data: {
    name: string
    value: number
  }[]
  width: number,
  hiddenLegend?: boolean
}

const colors = ['#5121FF', '#C6009B', '#c1121f', '#606c38', '#003049', '#dda15e', '#cdb4db', '#386641', '#d4a373']

const Chart = ({ data, hiddenLegend, width }: Props) => {
  const { theme } = useThemeStore()
  return (
    <PieChart
      series={[
        {
          data: data.map((item, id) => ({ id, label: item.name, value: item.value })),
          innerRadius: 60,
          outerRadius: 80,
          highlightScope: { fade: 'global', highlight: 'item' },
        },
      ]}
      margin={{ top: 40, left: 100 }}
      colors={colors}
      slotProps={{
        pieArc: {
          stroke: '#000',
        },
        legend: {
          hidden: hiddenLegend,
          direction: 'row',
          markGap: 2,
          position: { vertical: 'middle', horizontal: 'right' },
          padding: 0,
          itemMarkHeight: 4,
          itemMarkWidth: 10,
          labelStyle: {
            fill: theme === 'light' ? lightTheme.color.primary.text : darkTheme.color.primary.text,
            fontSize: 10.55,
          },
        },
      }}
      skipAnimation
      sx={() => ({
        [`.${pieArcClasses.root}`]: {
          stroke: 'none',
        },
      })}
      width={width}
    />
  )
}

export default Chart
