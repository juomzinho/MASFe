import { api } from "../../../services/api"

export default async () => {
    return await api.get("/verbs?user=1")
}