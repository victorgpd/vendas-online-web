import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import { ProductType } from '../../../modules/product/types/ProductType';
import { setProductsAction } from '.';

export const useProductReducer = () => {
  const dispatch = useDispatch();
  const { products } = useAppSelector((state) => state.productReducer);
  const setProducts = (currentProducts: ProductType[]) => {
    dispatch(setProductsAction(currentProducts));
  };

  return {
    products,
    setProducts,
  };
};
