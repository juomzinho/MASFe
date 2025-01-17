interface Props {
    data: {
        name: string
        value: number
    }[]
}

export const usePieChart = ({data}: Props) => {
    const colors = ['#5121FF', '#C6009B', '#c1121f', '#008000', '#003049', '#dda15e', '#cdb4db', '#386641', '#0000ff    ', '#FFFF00']

    const getPercentage = () => {
        let count = 0
        data.forEach(item => count += item.value)
        return data.map(item => ((item.value*100)/count).toFixed(0))
    }

    return {getPercentage, colors}    
}