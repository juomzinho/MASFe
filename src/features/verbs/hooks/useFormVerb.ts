import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Dimension, DimensionArr } from "../../../utils/defines/dimension";

interface Props {
    edit?: VerbSchema | null
    submit: (e: VerbSchema) => void
}

const verbSchema = z.object({
    id: z.string().nullable(),
    verb: z.string(),
    dimension: z.union([z.number(), z.string()]),
    userNeeds: z.boolean(),
    functionalSpecifications: z.boolean(),
    interactionDesign: z.boolean(),
    interfaceDesign: z.boolean(),
    informationDesign: z.boolean(),
    productGoals: z.boolean(),
    contentRequirements: z.boolean(),
    informationArchitecture: z.boolean(),
    navigationDesign: z.boolean(),
    visualDesign: z.boolean(),
});


export type VerbSchema = z.infer<typeof verbSchema>

export const useFormVerb = ({edit, submit}: Props) => {
    const {register, handleSubmit, formState: {errors, dirtyFields}, control, reset} = useForm<VerbSchema>({
        defaultValues: edit?edit:{}
    })

    useEffect(()=>{
        if(edit){
            reset({...edit,  dimension: Dimension[Number(edit.dimension)]})
        }
    }, [edit])

    const handleSend = (e: VerbSchema) => {
        const modifiedData: any = {}
        for(const field in dirtyFields){
            const key = field as keyof VerbSchema
            if(key === "dimension"){
                modifiedData[key] = DimensionArr.findIndex(item => item === e![key]) + 1 
            }else{
                modifiedData[key] = e![key]
            }
        }   
        submit(modifiedData)
    }
    
    
    return {handleSubmit, register, errors, control, handleSend}
}