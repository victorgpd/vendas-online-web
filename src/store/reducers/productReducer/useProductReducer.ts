import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import { ProductType } from '../../../shared/types/ProductType';
import { setProductsAction } from '.';
import { URL_PRODUCT } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';

export const useProductReducer = () => {
  const dispatch = useDispatch();
  const { request } = useRequests();
  const { products } = useAppSelector((state) => state.productReducer);

  const setProducts = (currentProducts: ProductType[]) => {
    dispatch(setProductsAction(currentProducts));
  };

  const searchProducts = () => {
    request(URL_PRODUCT, MethodsEnum.GET, setProducts);
  };

  return {
    products,
    setProducts,
    searchProducts,
  };
};
