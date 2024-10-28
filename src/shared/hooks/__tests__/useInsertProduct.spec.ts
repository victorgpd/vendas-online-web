import { act, renderHook } from '@testing-library/react';
import { useInsertProduct } from '../useInsertProduct';

const mockNavigate = jest.fn();
const mockSetNotification = jest.fn();
const mockSearchProducts = jest.fn();
const mockSearchCategories = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

jest.mock('../../../store/reducers/globalReducer/useGlobalReducer', () => ({
  useGlobalReducer: () => ({
    setNotification: mockSetNotification,
  }),
}));

jest.mock('../../../store/reducers/productReducer/useProductReducer', () => ({
  useProductReducer: () => ({
    searchProducts: mockSearchProducts,
  }),
}));

jest.mock('../../../store/reducers/categoryReducer/useCategoryReducer', () => ({
  useCategoryReducer: () => ({
    searchCategories: mockSearchCategories,
  }),
}));

describe.only('Test useInsertProduct', () => {
  it('should return initial values', () => {
    const { result } = renderHook(() => useInsertProduct());

    expect(result.current.loading).toEqual(false);
    expect(result.current.disabledButton).toEqual(true);
    expect(result.current.product).toEqual({
      name: '',
      price: 0,
      image: '',
    });
  });

  it('should change select in selectCategory', () => {
    const { result } = renderHook(() => useInsertProduct());

    act(() => {
      result.current.selectCategory('4321');
    });

    expect(result.current.product.categoryId).toEqual(4321);
  });

  it('should change product in onChangeInput send name', () => {
    const TEST_MOCK = 'TEST_MOCK';
    const { result } = renderHook(() => useInsertProduct());

    act(() => {
      result.current.onChange({ target: { value: TEST_MOCK } } as any, 'name');
    });

    expect(result.current.product.name).toEqual(TEST_MOCK);
  });

  it('should change product in onChangeInput send price', () => {
    const TEST_MOCK = 4321;
    const { result } = renderHook(() => useInsertProduct());

    act(() => {
      result.current.onChange({ target: { value: TEST_MOCK } } as any, 'price', true);
    });

    expect(result.current.product.price).toEqual(TEST_MOCK);
  });

  it('should change product in onChangeInput send image', () => {
    const TEST_MOCK = 'http-test';
    const { result } = renderHook(() => useInsertProduct());

    act(() => {
      result.current.onChange({ target: { value: TEST_MOCK } } as any, 'image');
    });

    expect(result.current.product.image).toEqual(TEST_MOCK);
  });

  it('should change disabledButton in insert data', () => {
    const { result } = renderHook(() => useInsertProduct());

    expect(result.current.disabledButton).toEqual(true);

    act(() => {
      result.current.onChange({ target: { value: 'teste' } } as any, 'name');
    });
    expect(result.current.disabledButton).toEqual(true);

    act(() => {
      result.current.onChange({ target: { value: 4321 } } as any, 'price', true);
    });
    expect(result.current.disabledButton).toEqual(true);

    act(() => {
      result.current.onChange({ target: { value: 'http-test' } } as any, 'image');
    });
    expect(result.current.disabledButton).toEqual(true);

    act(() => {
      result.current.selectCategory('4321');
    });
    expect(result.current.disabledButton).toEqual(false);
  });
});
