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
import { ProductInsertTestIdEnum } from './__tests__/ProductInsert.spec';
import { CategoryType } from '../../../shared/types/CategoryType';

export const ProductInsert = () => {
  const navigate = useNavigate();
  const { loading, disabledButton, product, clickInsertProduct, onChange, selectCategory } =
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
      <DisplayFlex
        data-testid={ProductInsertTestIdEnum.PRODUCT_INSERT_CONTAINER}
        directionwrap="row nowrap"
        background="#"
        justify="center"
      >
        <LimitedContainer width="400px" directionwrap="column nowrap" gap="15px" align="flex-end">
          <Input
            data-testid={ProductInsertTestIdEnum.PRODUCT_INPUT_NAME}
            onChange={(event) => onChange(event, 'name')}
            value={product.name}
            campo="Nome do Produto"
          />
          <Input
            data-testid={ProductInsertTestIdEnum.PRODUCT_INPUT_IMAGE}
            onChange={(event) => onChange(event, 'image')}
            value={product.image}
            campo="URL da Imagem"
          />
          <Select
            data-testid={ProductInsertTestIdEnum.PRODUCT_INPUT_SELECT}
            title="Categoria"
            width="100%"
            onChange={selectCategory}
            options={categories.map((category: CategoryType) => ({
              label: `${category.name.toUpperCase()}`,
              value: `${category.id}`,
            }))}
          />
          <InputMoney
            data-testid={ProductInsertTestIdEnum.PRODUCT_INPUT_PRICE}
            onChange={(event) => onChange(event, 'price', true)}
            value={product.price}
            campo="Preço"
          />
          <DisplayFlex width="100%" background="#" gap="10px" justify="flex-end">
            <Button
              data-testid={ProductInsertTestIdEnum.PRODUCT_BUTTON_INSERT}
              onClick={clickInsertProduct}
              loading={loading}
              disabled={disabledButton}
              width="135px"
              type="primary"
            >
              Inserir Produto
            </Button>
            <Button
              data-testid={ProductInsertTestIdEnum.PRODUCT_BUTTON_CANCEL}
              onClick={clickCancelInsert}
              width="125px"
              danger
            >
              Cancelar
            </Button>
          </DisplayFlex>
        </LimitedContainer>
      </DisplayFlex>
    </Screen>
  );
};
