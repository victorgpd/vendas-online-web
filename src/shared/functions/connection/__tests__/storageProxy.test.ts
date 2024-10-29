import { getItemStorage, setItemStorage, removeItemStorage } from '../storageProxy';

const MOCK_KEY = 'MOCK_KEY';
const MOCK_VALUE = 'MOCK_VALUE';

describe('storageProxy', () => {
  it('should save item in localStorage', () => {
    setItemStorage(MOCK_KEY, MOCK_VALUE);

    expect(localStorage.getItem(MOCK_KEY)).toEqual(MOCK_VALUE);
  });

  it('should get item in localStorage', () => {
    localStorage.setItem(MOCK_KEY, MOCK_VALUE);
    const value = getItemStorage(MOCK_KEY);

    expect(value).toEqual(MOCK_VALUE);
  });

  it('should remove item of localStorage', () => {
    localStorage.setItem(MOCK_KEY, MOCK_VALUE);
    removeItemStorage(MOCK_KEY);
    expect(localStorage.getItem(MOCK_KEY)).toEqual(null);
  });
});
