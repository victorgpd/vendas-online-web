import { createContext, useContext, useState } from "react";
import { UserType } from "../../modules/login/types/UserType";

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationProps {
    message: string
    description?: string
    type: NotificationType
}

interface GlobalData {
    notification?: NotificationProps,
    user?: UserType
}

interface GlobalContextProps {
    globalData: GlobalData
    setGlobalData: (globalData: GlobalData) => void
}

const GlobalContext = createContext({} as GlobalContextProps)

interface GlobalProviderProps {
    children: React.ReactNode
}

export const GlobalProvider = ({children}: GlobalProviderProps) => {
    const [globalData, setGlobalData] = useState<GlobalData>({})

    return (
        <GlobalContext.Provider value={{globalData, setGlobalData}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    const { globalData, setGlobalData } = useContext(GlobalContext)

    const setNotification = (message: string, type: NotificationType, description?: string) => {
        setGlobalData({
            ...globalData,
            notification: {
                message,
                description,
                type
            }
        })
    }

    const setUser = (user: UserType) => {
        setGlobalData({
            ...globalData,
            user,
        })
    }

    return {
        user: globalData?.user,
        setUser,
        notification: globalData?.notification,
        setNotification,
    }
}