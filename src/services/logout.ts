import { api } from "./api"

export default async () => {
    return await api.get("/auth", {withCredentials: true})
}