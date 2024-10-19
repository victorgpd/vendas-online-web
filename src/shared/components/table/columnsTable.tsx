import { Tag } from 'antd';
import type { TableProps } from 'antd';
import TooltipImage from "../../../modules/product/components/TooltipImage/TooltipImage"
import { convertNumberToMoney } from "../../functions/money"
import { ProductType } from '../../../modules/product/types/ProductType';
import { CategoryType } from '../../../modules/category/types/CategoryType';

export const columnsProduct: TableProps<ProductType>['columns'] = [
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
      sorter: (a, b) => a.name.localeCompare(b.name)
    },
    {
      title: 'Preço',
      dataIndex: 'price',
      key: 'price',
      render: (_, product) => <span>{convertNumberToMoney(product.price)}</span>,
      sorter: (a, b) => a.price - b.price
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

export const columnsCategories: TableProps<CategoryType>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: 'Categoria',
    dataIndex: 'name',
    key: 'name',
    render: (_, {name}) => <span>{name.toUpperCase()}</span>,
  },
  {
    title: 'Produtos cadastrados',
    dataIndex: 'amountProducts',
    key: 'amountProducts',
  },
]