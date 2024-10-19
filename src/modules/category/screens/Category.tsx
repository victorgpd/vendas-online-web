import Button from "../../../shared/components/buttons/button/button"
import Screen from "../../../shared/components/screen/Screen"
import Table from "../../../shared/components/table/Table"
import { useEffect, useState } from "react"
import { CategoryType } from "../types/CategoryType"
import { ProductRoutesEnum } from "../../product/routes"
import { useCategory } from "../../../shared/hooks/useCategory"
import { DisplayFlex } from "../../../shared/components/styles/styles"
import { columnsCategories } from "../../../shared/components/table/columnsTable"
import { Input } from "antd"
import { useNavigate } from "react-router-dom"
import { CategoryRoutesEnum } from "../routes"

const { Search } = Input

const Category = () => {
    const navigate = useNavigate()
    const { categories } = useCategory()
    const [ categoriesFiltered, setCategoriesFiltered ] = useState<CategoryType[]>([])
    
    useEffect(() => { setCategoriesFiltered([...categories]) }, [categories])
    
    const onClickInsert = () => {
        navigate(CategoryRoutesEnum.CATEGORY_INSERT)
    }

    const onSearch = (value: string) => {
        if (!value) {
            setCategoriesFiltered([...categories]);
        } else {
            setCategoriesFiltered([...categoriesFiltered.filter((category) => category.name.toLowerCase().includes(value.toLowerCase()))]);
        }
    };

    const listCrumb = [{ name: "Home", navigateTo: ProductRoutesEnum.PRODUCT }, { name: "Categorias" }]

    return (
        <Screen listCrumb={listCrumb} afterCrumb={<Button type="primary" onClick={onClickInsert} width="100px">Inserir</Button>}>
            <DisplayFlex background="#" directionwrap="column nowrap" align="center" gap="15px">
                <Search style={{minWidth: "300px", maxWidth: "600px"}} placeholder="Buscar Produto" onSearch={onSearch} onChange={(event) => onSearch(event.target.value)} enterButton />
                <Table<CategoryType> style={{width: "100%"}} columns={columnsCategories} dataSource={categoriesFiltered} />
            </DisplayFlex>
        </Screen>
    )
}

export default Category