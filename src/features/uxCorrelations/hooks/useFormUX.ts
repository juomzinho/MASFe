import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useVerbs } from "../../verbs/hooks/useVerbs";
import { Dimension, DimensionArr } from "../../../utils/defines/dimension";
import { usePersonas } from "../../personas/hooks/usePersonas";

interface Props {
    edit?: any | null
    submit: (e: UXProps) => void
}

const uxSchema = z.object({
    id: z.string().nullable(),
    name: z.string().nullable().optional(),
    description: z.string().nullable().optional(),
    persona_id: z.union([z.number(), z.string()]).nullable().optional(),
    verb_id: z.union([z.number(), z.string()]).nullable().optional(),
    dimension: z.union([z.number(), z.string()])
})

export type UXProps = z.infer<typeof uxSchema>

export const useFormUX = ({edit, submit}: Props) => {
    const {data: verbs} = useVerbs()
    const {data: personas} = usePersonas()
    const {register, handleSubmit, formState: {errors, dirtyFields}, control, reset} = useForm<UXProps>({
        defaultValues: edit?edit:{}
    })

    useEffect(()=>{
        console.log(edit)
        if(edit){
            reset({...edit, 
                dimension: Dimension[Number(edit.dimension)], 
                verb_id: edit.verb.verb,
                persona_id: edit.persona.name})
        }
    }, [edit])

    const handleSend = (e: UXProps) => {
        const modifiedData: any = {}
        for(const field in dirtyFields){
            const key = field as keyof UXProps
            if(key === "dimension"){
                Object.assign(modifiedData, {[key]: DimensionArr.findIndex(item => item === e!["dimension"])+1 })
            }
            else if(key === "verb_id"){
                Object.assign(modifiedData, {[key]: verbs.find((item: any) => item.verb === e!["verb_id"])?.id})
            }
            else if(key === "persona_id"){
                Object.assign(modifiedData, {[key]: personas.find((item: any) => item.name === e!["persona_id"])?.id})
            }
            else{
                Object.assign(modifiedData, {[key]: e![key]})
            }
        }   
        console.log(modifiedData)
        submit(modifiedData)
    }
    
    
    return {handleSubmit, register, errors, control, handleSend}
}