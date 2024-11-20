import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { Dimension } from "../../../utils/defines/dimension";

interface Props {
    edit?: ACSchema | null
    submit: (e: ACSchema) => void
}

const acSchema = z.object({
    id: z.string().nullable(),
    criteria: z.string(),
    dimension: z.string(),
    verbs: z.array(z.object({
        id: z.string(),
        verb: z.string()
    }))
})

export type ACSchema = z.infer<typeof acSchema>

export const useFormAC = ({edit, submit}: Props) => {
    const {register, handleSubmit, formState: {errors, dirtyFields}, control, reset} = useForm<ACSchema>({
        defaultValues: edit?edit:{}
    })

    const { fields, append, remove } = useFieldArray({
        control,
        name: "verbs"
      });

    useEffect(()=>{
        if(edit){
            reset({...edit})
        }
    }, [edit])

    const handleSend = (e: ACSchema) => {
        const modifiedData: any = {}
        for(const field in dirtyFields){
            const key = field as keyof ACSchema
            if(key === "dimension"){
                modifiedData[key] = Dimension[e![key].toString()]
            }else{
                modifiedData[key] = e![key]
            }
        }   
        console.log("Aqui", e, modifiedData)
        submit(modifiedData)
    }
    
    
    return {handleSubmit, register, errors, control, handleSend, array: {
        fields, append, remove
    }}
}