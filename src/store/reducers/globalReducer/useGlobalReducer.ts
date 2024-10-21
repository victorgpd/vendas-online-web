import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import { setNotificationAction, setUserAction } from '.';
import { UserType } from '../../../shared/types/UserType';
import { NotificationEnum } from '../../../shared/types/NotificationType';

export const useGlobalReducer = () => {
  const dispatch = useDispatch();
  const { user, notification } = useAppSelector((state) => state.globalReducer);

  const setNotification = (message: string, type: NotificationEnum, description?: string) => {
    dispatch(
      setNotificationAction({
        message,
        description,
        type,
      }),
    );
  };

  const setUser = (user: UserType) => {
    dispatch(setUserAction(user));
  };

  return {
    user,
    notification,
    setUser,
    setNotification,
  };
};
