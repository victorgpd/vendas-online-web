import { ProductInsert } from '../ProductInsert';
import { fireEvent, render } from '@testing-library/react';
import { mockProductInsert } from '../../__mocks__/ProductInsert.mock';

let value = '';
let type = '';
const mockNavigate = jest.fn();
const mockButtonInsert = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

jest.mock('../../../../shared/hooks/useCategory', () => ({
  useCategory: () => ({
    categories: [],
  }),
}));

jest.mock('../../../../shared/hooks/useInsertProduct', () => ({
  useInsertProduct: () => ({
    product: mockProductInsert,
    loading: false,
    disabledButton: false,
    clickInsertProduct: mockButtonInsert,
    onChange: (e: React.ChangeEvent<HTMLInputElement>, x: string) => {
      value = e.target.value;
      type = x;
    },
    selectCategory: jest.fn(),
  }),
}));

export enum ProductInsertTestIdEnum {
  PRODUCT_INPUT_NAME = 'PRODUCT_INPUT_NAME',
  PRODUCT_INPUT_PRICE = 'PRODUCT_INPUT_PRICE',
  PRODUCT_INPUT_IMAGE = 'PRODUCT_INPUT_IMAGE',
  PRODUCT_INPUT_SELECT = 'PRODUCT_INPUT_SELECT',
  PRODUCT_BUTTON_CANCEL = 'PRODUCT_BUTTON_CANCEL',
  PRODUCT_BUTTON_INSERT = 'PRODUCT_BUTTON_INSERT',
  PRODUCT_INSERT_CONTAINER = 'PRODUCT_INSERT_CONTAINER',
}

describe('Test Screen Product Insert', () => {
  it('should render', () => {
    const { getByTestId } = render(<ProductInsert />);

    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_INPUT_NAME)).toBeDefined();
    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_INPUT_PRICE)).toBeDefined();
    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_INPUT_IMAGE)).toBeDefined();
    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_INPUT_SELECT)).toBeDefined();
    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_BUTTON_CANCEL)).toBeDefined();
    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_BUTTON_INSERT)).toBeDefined();
    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_CONTAINER)).toBeDefined();
  });

  it('should call onChangeInput in change name', () => {
    const { getByTestId } = render(<ProductInsert />);
    const input = getByTestId(ProductInsertTestIdEnum.PRODUCT_INPUT_NAME);

    fireEvent.change(input, { target: { value: 'MOCK_VALUE' } });

    expect(value).toEqual('MOCK_VALUE');
    expect(type).toEqual('name');
  });

  it('should call onChangeInput in change price', () => {
    const { getByTestId } = render(<ProductInsert />);
    const input = getByTestId(ProductInsertTestIdEnum.PRODUCT_INPUT_PRICE);

    fireEvent.change(input, { target: { value: mockProductInsert.price } });

    expect(value).toEqual(`5.43`);
    expect(type).toEqual('price');
  });

  it('should call onChangeInput in change url image', () => {
    const { getByTestId } = render(<ProductInsert />);
    const input = getByTestId(ProductInsertTestIdEnum.PRODUCT_INPUT_IMAGE);

    fireEvent.change(input, { target: { value: 'http-teste' } });

    expect(value).toEqual('http-teste');
    expect(type).toEqual('image');
  });

  it('should call clickInsertProduct in click insert button', () => {
    const { getByTestId } = render(<ProductInsert />);
    const button = getByTestId(ProductInsertTestIdEnum.PRODUCT_BUTTON_INSERT);

    fireEvent.click(button);

    expect(mockButtonInsert).toHaveBeenCalled();
  });

  it('should call navigate in click cancel button', () => {
    const { getByTestId } = render(<ProductInsert />);
    const button = getByTestId(ProductInsertTestIdEnum.PRODUCT_BUTTON_CANCEL);

    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalled();
  });
});
