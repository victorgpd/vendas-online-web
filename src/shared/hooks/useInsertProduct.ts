import { useEffect, useState } from "react"
import { connectionAPIPost } from "../functions/connection/connectionAPI"
import { URL_PRODUCT } from "../constants/urls"
import { useNavigate } from "react-router-dom"
import { ProductRoutesEnum } from "../../modules/product/routes"
import { useGlobalContext } from "./useGlobalContext"
import { InsertProduct } from "../dtos/InsertProduct.dto"

export const useInsertProduct = () => {
    const navigate = useNavigate()
    const { setNotification } = useGlobalContext()
    const [loading, setLoading] = useState(false)
    const [disableButton, setDisableButton] = useState(true)
    const [product, setProduct] = useState<InsertProduct>({
        name: "",
        price: 0,
        image: "",
    })

    useEffect(() => {
        if (product.name && product.categoryId && product.image && product.price > 0) {
            setDisableButton(false)
        } else {
            setDisableButton(true)
        }
    }, [product])

    const onChange = (event: React.ChangeEvent<HTMLInputElement>, nameObject: string, isNumber?: boolean) => {
      setProduct({
        ...product,
        [nameObject]: isNumber ? Number(event.target.value) : event.target.value
      })
    }
  
    const selectCategory = (value: string) => {
      setProduct({
        ...product,
        categoryId: Number(value),
      })
    }

    const clickInsertProduct = async () => {
        setLoading(true)
        await connectionAPIPost(URL_PRODUCT, product).then(() => {
            setNotification("Produto cadastrado com sucesso!", "success")
            navigate(ProductRoutesEnum.PRODUCT)
        }).catch(() => {
        setNotification("Erro ao cadastrar o produto!", "error")
        })
        setLoading(false)
    }

    return {
        product,
        loading,
        disableButton,
        onChange,
        selectCategory,
        clickInsertProduct,
    }
}