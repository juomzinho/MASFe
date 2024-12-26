import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const useAuth = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        const isLogged = localStorage.getItem("isLogged")
        if(!!isLogged){
            navigate('/dashboard', {
                replace: true
            })
        }
    },[])
}