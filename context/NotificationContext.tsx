'use client';
import { createContext, useContext, useState } from 'react';

type NotificationType = 'success' | 'error';

interface Notification {
  message: string;
  type: NotificationType;
}

const NotificationContext = createContext({
  showNotification: (msg: string, type: NotificationType) => {},
});

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [notification, setNotification] = useState<Notification | null>(null);

  const showNotification = (message: string, type: NotificationType) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {notification && (
        <div className={`overlay-notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
    </NotificationContext.Provider>
  );
};
