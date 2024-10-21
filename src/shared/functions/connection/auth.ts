import { UserType } from '../../types/UserType';
import { AUTHORIZATION_KEY } from '../../constants/authorizationConstans';
import { getItemStorage, removeItemStorage, setItemStorage } from './storageProxy';
import { connectionAPIGet } from './connectionAPI';
import { URL_USER } from '../../constants/urls';
import { NavigateFunction, redirect } from 'react-router-dom';

export const unsetAuthorizationToken = () => removeItemStorage(AUTHORIZATION_KEY);

export const setAuthorizationToken = (token: string) => {
  if (token) {
    setItemStorage(AUTHORIZATION_KEY, token);
  }
};

export const getAuthorizationToken = () => getItemStorage(AUTHORIZATION_KEY);

export const verifyLoggedIn = async () => {
  const token = getAuthorizationToken();
  if (!token) {
    return redirect('/login');
  }

  await connectionAPIGet<UserType>(URL_USER).catch(() => {
    unsetAuthorizationToken();
    return redirect('/login');
  });

  return null;
};

export const logout = (navigate: NavigateFunction) => {
  unsetAuthorizationToken();
  navigate('/login');
};
