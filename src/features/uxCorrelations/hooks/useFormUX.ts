import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
    edit?: UXProps | null
    submit: (e: UXProps) => void
}

const uxSchema = z.object({
    id: z.string().nullable(),
    name: z.string(),
    description: z.string(),
    persona_id: z.union([z.number(), z.string()]),
    verb_id: z.union([z.number(), z.string()]),
})

export type UXProps = z.infer<typeof uxSchema>

export const useFormUX = ({edit, submit}: Props) => {
    const {register, handleSubmit, formState: {errors}, control, reset} = useForm<UXProps>({
        defaultValues: edit?edit:{}
    })

    useEffect(()=>{
        if(edit){
            reset({...edit})
        }
    }, [edit])

    const handleSend = (e: UXProps) => {
        const modifiedData: any = {...e}
        // for(const field in dirtyFields){
        //     const key = field as keyof VerbSchema
        //     if(key === "garret"){
        //         modifiedData[key] = GarretArr.findIndex(item => item === e![key]) + 1 
        //     }else if(key === "dimension"){
        //         modifiedData[key] = DimensionArr.findIndex(item => item === e![key]) + 1 
        //     }else{
        //         modifiedData[key] = e![key]
        //     }
        // }   
        submit(modifiedData)
    }
    
    
    return {handleSubmit, register, errors, control, handleSend}
}