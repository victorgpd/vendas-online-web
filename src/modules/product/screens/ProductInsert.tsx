import { useEffect } from "react"
import { ProductRoutesEnum } from "../routes"
import { URL_CATEGORY } from "../../../shared/constants/urls"
import { useRequests } from "../../../shared/hooks/useRequests"
import { MethodsEnum } from "../../../shared/enums/methods.enum"
import { useDataContext } from "../../../shared/hooks/useDataContext"
import { LimitedContainer, DisplayFlex } from "../../../shared/components/styles/styles"
import Screen from "../../../shared/components/screen/Screen"
import Select from "../../../shared/components/inputs/select/select"
import Button from "../../../shared/components/buttons/button/button"
import Input from "../../../shared/components/inputs/inputLogin/input"
import { useNavigate } from "react-router-dom"
import InputMoney from "../../../shared/components/inputs/inputMoney/InputMoney"
import { useInsertProduct } from "../../../shared/hooks/useInsertProduct"

const ProductInsert = () => {
  const navigate = useNavigate()
  const { loading, disableButton, product, clickInsertProduct, onChange, selectCategory } = useInsertProduct()
  const { categories, setCategories } = useDataContext()
  const { request } = useRequests()
  const listCrumb = [
    { name: "Home" },
    { name: "Produtos", navigateTo: ProductRoutesEnum.PRODUCT },
    { name: "Inserir Produto" },
  ]
  
  useEffect(() => {
    if (categories.length == 0) {
      request(URL_CATEGORY, MethodsEnum.GET, setCategories)
    }
  }, [])

  const clickCancelInsert = () => {
    navigate(ProductRoutesEnum.PRODUCT)
  }

  return (
      <Screen listCrumb={listCrumb}>
          <DisplayFlex directionWrap="row nowrap" background="#" justify="center">
            <LimitedContainer width="400px" directionWrap="column nowrap" gap="15px" align="flex-end">
              <Input onChange={(event) => onChange(event, 'name')} value={product.name} campo="Nome do Produto" />
              <Input onChange={(event) => onChange(event, 'image')} value={product.image} campo="URL da Imagem" />
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
              <InputMoney onChange={(event) => onChange(event, 'price', true)} value={product.price} campo="Preço" />
              <DisplayFlex width="100%" background="#" gap="10px" justify="flex-end">
                <Button onClick={clickInsertProduct} loading={loading} disabled={disableButton} width="135px" type="primary">Inserir Produto</Button>
                <Button onClick={clickCancelInsert} width="125px" danger>Cancelar</Button>
              </DisplayFlex>
            </LimitedContainer>
          </DisplayFlex>
      </Screen>
  )
}

export default ProductInsert