import { useEffect, useState } from 'react';
import { connectionAPIPost } from '../functions/connection/connectionAPI';
import { URL_PRODUCT } from '../constants/urls';
import { useNavigate } from 'react-router-dom';
import { ProductRoutesEnum } from '../../modules/product/routes';
import { InsertProduct } from '../dtos/InsertProduct.dto';
import { useProductReducer } from '../../store/reducers/productReducer/useProductReducer';
import { useCategoryReducer } from '../../store/reducers/categoryReducer/useCategoryReducer';
import { useGlobalReducer } from '../../store/reducers/globalReducer/useGlobalReducer';

export const useInsertProduct = () => {
  const navigate = useNavigate();
  const { searchProducts } = useProductReducer();
  const { searchCategories } = useCategoryReducer();
  const { setNotification } = useGlobalReducer();
  const [loading, setLoading] = useState(false);
  const [disabledButton, setDisableButton] = useState(true);
  const [product, setProduct] = useState<InsertProduct>({
    name: '',
    price: 0,
    image: '',
  });

  useEffect(() => {
    if (product.name && product.categoryId && product.image && product.price > 0) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [product]);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    nameObject: string,
    isNumber?: boolean,
  ) => {
    setProduct({
      ...product,
      [nameObject]: isNumber ? Number(event.target.value) : event.target.value,
    });
  };

  const selectCategory = (value: string) => {
    setProduct({
      ...product,
      categoryId: Number(value),
    });
  };

  const clickInsertProduct = async () => {
    setLoading(true);
    await connectionAPIPost(URL_PRODUCT, product)
      .then(() => {
        searchCategories();
        searchProducts();
        setNotification('Produto cadastrado com sucesso!', 'success');
        navigate(ProductRoutesEnum.PRODUCT);
      })
      .catch(() => {
        setNotification('Erro ao cadastrar o produto!', 'error');
      });
    setLoading(false);
  };

  return {
    product,
    loading,
    disabledButton,
    onChange,
    selectCategory,
    clickInsertProduct,
  };
};
