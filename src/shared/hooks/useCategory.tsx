import { useEffect } from "react"
import { useDataContext } from "./useDataContext"
import { useRequests } from "./useRequests"
import { URL_CATEGORY } from "../constants/urls"
import { MethodsEnum } from "../enums/methods.enum"

export const useCategory = () => {
    const { categories, setCategories } = useDataContext()
    const { request } = useRequests()
    
    useEffect(() => {
        if (!categories || categories.length == 0) {
            request(URL_CATEGORY, MethodsEnum.GET, setCategories)
        }
    }, [])

    return {
        categories
    }
}