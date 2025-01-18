export enum Dimension {
    "Eficiência" = 1,
    "Eficácia"
}

export const DimensionArr = [
    "Eficiência",
    "Eficácia"
]

export const getDimension = (value: number | string, getValue?: boolean) => {
    if(value === 1 || value === 'Eficiência' || value === '1') return getValue?1:'Eficiência'
    if(value === 2 || value === 'Eficácia' || value === '2') return getValue?2:'Eficácia'
    return ''
}