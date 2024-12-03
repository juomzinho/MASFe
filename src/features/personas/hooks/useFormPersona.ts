import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Garret } from "../../../utils/defines/garret";
import { Dimension } from "../../../utils/defines/dimension";

interface Props {
    edit?: PersonaSchema | null
    submit: (e: PersonaSchema) => void
}

const personaSchema = z.object({
    id: z.string().nullable(),
    name: z.string(),
    needs: z.string(),
    possible_solutions: z.string(),
    occupation: z.string().nullable().optional(),
    gender: z.string().nullable().optional(),
    age: z.number().nullable().optional(),
    garret: z.union([z.number(), z.string()]),
    dimension: z.union([z.number(), z.string()]),
})

export type PersonaSchema = z.infer<typeof personaSchema>

export const useFormPersona = ({edit, submit}: Props) => {
    const {register, handleSubmit, formState: {errors, dirtyFields}, control, reset} = useForm<PersonaSchema>({
        defaultValues: edit?edit:{}
    })

    useEffect(()=>{
        if(edit){
            reset({...edit})
        }
    }, [edit])

    const handleSend = (e: PersonaSchema) => {
        const modifiedData: any = {}
        for(const field in dirtyFields){
            const key = field as keyof PersonaSchema
            if(key === "garret"){
                modifiedData[key] = Garret[Number(e![key])]
            }else if(key === "dimension"){
                modifiedData[key] = Dimension[Number(e![key])]
            }else{
                modifiedData[key] = e![key]
            }
        }   
        submit(modifiedData)
    }
    
    
    return {handleSubmit, register, errors, control, handleSend}
}