import { useNavigate } from 'react-router-dom';
import Button from '../../../shared/components/buttons/button/button';
import Input from '../../../shared/components/inputs/input/input';
import Screen from '../../../shared/components/screen/Screen';
import { DisplayFlex, LimitedContainer } from '../../../shared/components/styles/styles';
import { CategoryRoutesEnum } from '../routes';
import { useInsertCategory } from '../../../shared/hooks/useInsertCategory';

const CategoryInsert = () => {
  const navigate = useNavigate();
  const { clickInsertCategory, onChange, category, loading, disableButton } = useInsertCategory();
  const listCrumb = [
    { name: 'Home', navigateTo: '/' },
    { name: 'Categorias', navigateTo: CategoryRoutesEnum.CATEGORY },
    { name: 'Inserir Categoria' },
  ];

  const clickCancelInsert = () => {
    navigate(CategoryRoutesEnum.CATEGORY);
  };

  return (
    <Screen listCrumb={listCrumb}>
      <DisplayFlex directionwrap="row nowrap" background="#" justify="center">
        <LimitedContainer width="400px" directionwrap="column nowrap" gap="15px" align="flex-end">
          <Input
            onChange={(event) => onChange(event)}
            value={category.name}
            campo="Nome da Categoria"
          />
          <DisplayFlex width="100%" background="#" gap="10px" justify="flex-end">
            <Button
              onClick={clickInsertCategory}
              loading={loading}
              disabled={disableButton}
              width="135px"
              type="primary"
            >
              Inserir Categoria
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

export default CategoryInsert;
