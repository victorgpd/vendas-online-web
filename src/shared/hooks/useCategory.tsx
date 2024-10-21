import { useEffect } from 'react';
import { useRequests } from './useRequests';
import { URL_CATEGORY } from '../constants/urls';
import { MethodsEnum } from '../enums/methods.enum';
import { useCategoryReducer } from '../../store/reducers/categoryReducer/useCategoryReducer';

export const useCategory = () => {
  const { categories, setCategories } = useCategoryReducer();
  const { request } = useRequests();

  useEffect(() => {
    if (!categories || categories.length == 0) {
      request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    }
  }, []);

  return {
    categories,
  };
};
