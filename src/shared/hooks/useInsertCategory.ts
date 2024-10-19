import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { URL_CATEGORY } from "../constants/urls"
import { useGlobalContext } from "./useGlobalContext"
import { InsertCategory } from "../dtos/InsertCategory"
import { CategoryRoutesEnum } from "../../modules/category/routes"
import { connectionAPIPost } from "../functions/connection/connectionAPI"

export const useInsertCategory = () => {
    const navigate = useNavigate()
    const { setNotification } = useGlobalContext()
    const [ loading, setLoading ] = useState(false)
    const [ disableButton, setDisableButton ] = useState(true)
    const [ category, setCategoryName ] = useState<InsertCategory>({
        name: ""
    })

    useEffect(() => {
        if (category.name) {
            setDisableButton(false)
        } else {
            setDisableButton(true)
        }
    }, [category])

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategoryName({
            name: event.target.value})
    }

    const clickInsertCategory = async () => {
        setLoading(true)
        await connectionAPIPost(URL_CATEGORY, category).then(() => {
            setNotification("categoria cadastrada com sucesso!", "success")
            navigate(CategoryRoutesEnum.CATEGORY)
        }).catch(() => {
            setNotification("Erro ao cadastrar a categoria!", "error")
        })
        setLoading(false)
    }

    return {
        category,
        loading,
        disableButton,
        onChange,
        clickInsertCategory
    }
}