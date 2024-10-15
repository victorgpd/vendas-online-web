import { useEffect } from "react"
import { useDataContext } from "../../../shared/hooks/useDataContext"
import { useRequests } from "../../../shared/hooks/useRequests"
import { MethodsEnum } from "../../../shared/enums/methods.enum"
import { ProductType } from "../types/ProductType"
import { URL_PRODUCT } from "../../../shared/constants/urls"
import Table from "../../../shared/components/table/Table"
import { Tag } from 'antd';
import type { TableProps } from 'antd';
import TooltipImage from "../components/TooltipImage/TooltipImage"

const columns: TableProps<ProductType>['columns'] = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (_, product) => <TooltipImage product={product}/>,
    },
    {
      title: 'Produto',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Preço',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Categoria',
      dataIndex: 'category',
      key: 'category',
      render: (_, { category }) => {
        const color = category.name.length > 5 ? 'geekblue' : 'green'
        return (
            <Tag color={color} key={category.id}>
                {category.name.toUpperCase()}
            </Tag>
        );
      },
    },
]

const Product = () => {
    const { products, setProducts } = useDataContext()
    const { request } = useRequests()

    useEffect(() => {
        request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts)
    }, [])

    return (
        <div>
            <Table<ProductType> columns={columns} dataSource={products} />
        </div>
    )
}

export default Product