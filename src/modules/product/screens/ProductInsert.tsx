import InputMoney from '../../../shared/components/inputs/inputMoney/InputMoney';
import Input from '../../../shared/components/inputs/input/input';
import Button from '../../../shared/components/buttons/button/button';
import Select from '../../../shared/components/inputs/select/select';
import Screen from '../../../shared/components/screen/Screen';
import { ProductRoutesEnum } from '../routes';
import { useNavigate } from 'react-router-dom';
import { useCategory } from '../../../shared/hooks/useCategory';
import { useInsertProduct } from '../../../shared/hooks/useInsertProduct';
import { LimitedContainer, DisplayFlex } from '../../../shared/components/styles/styles';

const ProductInsert = () => {
  const navigate = useNavigate();
  const { loading, disableButton, product, clickInsertProduct, onChange, selectCategory } =
    useInsertProduct();
  const { categories } = useCategory();
  const clickCancelInsert = () => {
    navigate(ProductRoutesEnum.PRODUCT);
  };

  const listCrumb = [
    { name: 'Home' },
    { name: 'Produtos', navigateTo: ProductRoutesEnum.PRODUCT },
    { name: 'Inserir Produto' },
  ];

  return (
    <Screen listCrumb={listCrumb}>
      <DisplayFlex directionwrap="row nowrap" background="#" justify="center">
        <LimitedContainer width="400px" directionwrap="column nowrap" gap="15px" align="flex-end">
          <Input
            onChange={(event) => onChange(event, 'name')}
            value={product.name}
            campo="Nome do Produto"
          />
          <Input
            onChange={(event) => onChange(event, 'image')}
            value={product.image}
            campo="URL da Imagem"
          />
          <Select
            title="Categoria"
            width="100%"
            onChange={selectCategory}
            options={categories.map((category) => ({
              label: `${category.name.toUpperCase()}`,
              value: `${category.id}`,
            }))}
          />
          <InputMoney
            onChange={(event) => onChange(event, 'price', true)}
            value={product.price}
            campo="Preço"
          />
          <DisplayFlex width="100%" background="#" gap="10px" justify="flex-end">
            <Button
              onClick={clickInsertProduct}
              loading={loading}
              disabled={disableButton}
              width="135px"
              type="primary"
            >
              Inserir Produto
            </Button>
            <Button onClick={clickCancelInsert} width="125px" danger>
              Cancelar
            </Button>
          </DisplayFlex>
        </LimitedContainer>
      </DisplayFlex>
    </Screen>
  );
};

export default ProductInsert;
