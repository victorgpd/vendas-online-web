import { useEffect, useState } from "react"
import { ProductRoutesEnum } from "../routes"
import { URL_CATEGORY, URL_PRODUCT } from "../../../shared/constants/urls"
import { useRequests } from "../../../shared/hooks/useRequests"
import { MethodsEnum } from "../../../shared/enums/methods.enum"
import { useDataContext } from "../../../shared/hooks/useDataContext"
import { InsertProduct } from "../../../shared/dtos/InsertProduct.dto"
import { LimitedContainer, DisplayFlex } from "../../../shared/components/styles/styles"
import Screen from "../../../shared/components/screen/Screen"
import Select from "../../../shared/components/inputs/select/select"
import Button from "../../../shared/components/buttons/button/button"
import Input from "../../../shared/components/inputs/inputLogin/input"
import { connectionAPIPost } from "../../../shared/functions/connection/connectionAPI"
import { useNavigate } from "react-router-dom"
import { useGlobalContext } from "../../../shared/hooks/useGlobalContext"

const ProductInsert = () => {
  const navigate = useNavigate()
  const { setNotification } = useGlobalContext()
  const listCrumb = [
    { name: "Home" },
    { name: "Produtos", navigateTo: ProductRoutesEnum.PRODUCT },
    { name: "Inserir Produto" },
  ]

  const [product, setProduct] = useState<InsertProduct>({
    name: "",
    price: 0,
    image: "",
  })
  const { categories, setCategories } = useDataContext()
  const { request } = useRequests()
  
  useEffect(() => {
    if (categories.length == 0) {
      request(URL_CATEGORY, MethodsEnum.GET, setCategories)
    }
  }, [])
  
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
    await connectionAPIPost(URL_PRODUCT, product).then(() => {
      setNotification("Produto cadastrado com sucesso!", "success")
      navigate(ProductRoutesEnum.PRODUCT)
    }).catch(() => {
      setNotification("Erro ao cadastrar o produto!", "error")
    })
  }

  const clickCancelInsert = () => {
    navigate(ProductRoutesEnum.PRODUCT)
  }

  return (
      <Screen listCrumb={listCrumb}>
          <DisplayFlex directionWrap="row nowrap" justify="center">
            <LimitedContainer width="400px" directionWrap="column" gap="15px" align="flex-end">
              <Input onChange={(event) => onChange(event, 'name')} value={product.name} campo="Nome do Produto" />
              <Input onChange={(event) => onChange(event, 'image')} value={product.image} campo="URL da Imagem" />
              <Input onChange={(event) => onChange(event, 'price', true)} value={product.price} campo="Preço" />
              <Select
                title="Categoria"
                width="100%"
                onChange={selectCategory}
                options={
                  categories.map((category) => ({
                    label: `${category.name.toUpperCase()}`,
                    value: `${category.id}`
                  }))
                }
              />
              <DisplayFlex width="100%" gap="10px" justify="flex-end">
                <Button onClick={clickInsertProduct} width="125px" type="primary">Inserir Produto</Button>
                <Button onClick={clickCancelInsert} width="125px" danger>Cancelar</Button>
              </DisplayFlex>
            </LimitedContainer>
          </DisplayFlex>
      </Screen>
  )
}

export default ProductInsert