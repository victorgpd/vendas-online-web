import { createContext, useContext, useState } from "react";

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationProps {
    message: string
    description?: string
    type: NotificationType
}

interface GlobalData {
    accessToken?: string
    notification?: NotificationProps
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
    
    const setAccessToken = (accessToken: string) => {
        setGlobalData({
            ...globalData,
            accessToken,
        })
    }

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

    return {
        notification: globalData?.notification,
        setNotification,
        accessToken: globalData?.accessToken,
        setAccessToken,
    }
}