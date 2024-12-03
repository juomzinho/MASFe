import {create} from 'zustand'

export enum ContentEnum {
    "Inicio" = 1,
    "UX Correlations",
    "Verbos",
    "Critérios de Aceitação",
    "Personas"
}

interface ContentProps {
    content: number,
    setContent: (value: number) => void
}

export const useContentStore = create<ContentProps>((set) => ({
    content: ContentEnum["Inicio"],
    setContent: (value: number) => set(() => ({content: value}))
}))