import Table from "../../../shared/components/table/Table"
import Screen from "../../../shared/components/screen/Screen"
import Button from "../../../shared/components/buttons/button/button"
import { useEffect, useState } from "react"
import { ProductRoutesEnum } from "../routes"
import { useNavigate } from "react-router-dom"
import { ProductType } from "../types/ProductType"
import { URL_PRODUCT } from "../../../shared/constants/urls"
import { useRequests } from "../../../shared/hooks/useRequests"
import { MethodsEnum } from "../../../shared/enums/methods.enum"
import { useDataContext } from "../../../shared/hooks/useDataContext"
import { columnsProduct } from "../../../shared/components/table/columnsTable"
import { Input } from "antd"
import { DisplayFlex } from "../../../shared/components/styles/styles"

const { Search } = Input

const Product = () => {
  const { products, setProducts } = useDataContext()
  const { request } = useRequests()
  const [ productsFiltered, setProductsFiltered ] = useState<ProductType[]>([])
  const navigate = useNavigate()

  useEffect(() => { setProductsFiltered([...products]) }, [products])
  
  useEffect(() => { request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts) }, [])

  const onClickInsert = () => {
    navigate(ProductRoutesEnum.PRODUCT_INSERT)
  }
  
  const onSearch = (value: string) => {
    if (!value) {
      setProductsFiltered([...products]);
    } else {
      setProductsFiltered([...productsFiltered.filter((product) => product.name.toLowerCase().includes(value.toLowerCase()))]);
    }
  };

  const listCrumb = [{ name: "Home" }, { name: "Produtos" }]

  return (
      <Screen listCrumb={listCrumb}
              afterCrumb={<Button type="primary" width="100px" onClick={onClickInsert}>Inserir</Button>}>
          
          <DisplayFlex background="#" directionwrap="column nowrap" align="center" gap="15px">
            <Search style={{minWidth: "300px", maxWidth: "600px"}} placeholder="Buscar Produto" onSearch={onSearch} onChange={(event) => onSearch(event.target.value)} enterButton />
            <Table<ProductType> style={{width: "100%"}} columns={columnsProduct} dataSource={productsFiltered} />
          </DisplayFlex>
      </Screen>
  )
}

export default Product