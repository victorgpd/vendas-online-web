import { useEffect } from 'react';
import { notification as notificationAntd } from 'antd';
import { useGlobalReducer } from '../../store/reducers/globalReducer/useGlobalReducer';

export const useNotification = () => {
  const [api, contextHolder] = notificationAntd.useNotification();
  const { notification } = useGlobalReducer();

  useEffect(() => {
    if (notification?.message && notification.type) {
      api[notification.type]({
        message: `${notification.message}`,
        description: notification.description,
        placement: 'topRight',
      });
    }
  }, [notification]);

  return {
    api,
    contextHolder,
  };
};
