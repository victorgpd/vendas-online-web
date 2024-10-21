import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import { setCategoriesAction } from '.';
import { CategoryType } from '../../../shared/types/CategoryType';
import { useRequests } from '../../../shared/hooks/useRequests';
import { URL_CATEGORY } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';

export const useCategoryReducer = () => {
  const dispatch = useDispatch();
  const { request } = useRequests();
  const { categories } = useAppSelector((state) => state.categoriesReducer);

  const setCategories = (currentCategories: CategoryType[]) => {
    dispatch(setCategoriesAction(currentCategories));
  };

  const searchCategories = () => {
    request(URL_CATEGORY, MethodsEnum.GET, setCategories);
  };

  return {
    categories,
    setCategories,
    searchCategories,
  };
};
