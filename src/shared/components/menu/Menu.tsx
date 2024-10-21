import { ContainerCompany, ContainerMenu, LogoMenu, NameCompany } from './Menu.style';
import { useState } from 'react';
import {
  AppstoreOutlined,
  HomeOutlined,
  LaptopOutlined,
  ProfileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps as MenuPropsAntd, MenuTheme } from 'antd';
import { Menu as MenuAntd, Switch } from 'antd';
import { ProductRoutesEnum } from '../../../modules/product/routes';
import { useNavigate } from 'react-router-dom';
import { DisplayFlex } from '../styles/styles';
import { CategoryRoutesEnum } from '../../../modules/category/routes';

interface MenuProps {
  display: 'flex' | 'none';
}

type MenuItem = Required<MenuPropsAntd>['items'][number];

const Menu = (props: MenuProps) => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState<MenuTheme>('dark');
  const [current, setCurrent] = useState('home');

  const items: MenuItem[] = [
    {
      key: 'home',
      label: 'Principal',
      icon: <HomeOutlined />,
      onClick: () => navigate('/'),
    },
    {
      key: 'products',
      label: 'Produtos',
      icon: <LaptopOutlined />,
      children: [
        {
          key: 'product_view',
          label: 'Lista de Produtos',
          onClick: () => navigate(ProductRoutesEnum.PRODUCT),
        },
        {
          key: 'product_insert',
          label: 'Cadastrar Produto',
          onClick: () => navigate(ProductRoutesEnum.PRODUCT_INSERT),
        },
      ],
    },
    {
      key: 'categories',
      label: 'Categorias',
      icon: <AppstoreOutlined />,
      children: [
        {
          key: 'category_view',
          label: 'Lista de Categoria',
          onClick: () => navigate(CategoryRoutesEnum.CATEGORY),
        },
        {
          key: 'category_insert',
          label: 'Cadastrar Categoria',
          onClick: () => navigate(CategoryRoutesEnum.CATEGORY_INSERT),
        },
      ],
    },
    {
      key: 'orders',
      label: 'Pedidos',
      icon: <ProfileOutlined />,
      children: [
        { key: 'orders_view', label: 'Lista de Pedidos' },
        { key: 'orders_insert', label: 'Cadastrar Pedido' },
      ],
    },
    {
      key: 'clients',
      label: 'Clientes',
      icon: <UserOutlined />,
      children: [
        { key: 'client_view', label: 'Lista de Clientes' },
        { key: 'client_insert', label: 'Cadastrar Cliente' },
      ],
    },
  ];

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  const onClick: MenuPropsAntd['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (
    <ContainerMenu
      background={theme === 'dark' ? '#001529' : 'white'}
      style={{ display: props.display }}
    >
      <ContainerCompany>
        <LogoMenu />
        <NameCompany>Vendas Online</NameCompany>
      </ContainerCompany>
      <MenuAntd
        theme={theme}
        onClick={onClick}
        style={{ width: '100%' }}
        defaultOpenKeys={['home']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
      <DisplayFlex background="#" padding="0 10px" height="25px" align="center">
        <Switch
          style={{ width: '70px', height: '25px' }}
          checked={theme === 'dark'}
          onChange={changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
      </DisplayFlex>
    </ContainerMenu>
  );
};

export default Menu;
