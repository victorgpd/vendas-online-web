import { createContext, useContext, useState } from "react";
import { ProductType } from "../../modules/product/types/ProductType";

interface DataContext {
    products?: ProductType[],
}

interface DataContextProps {
    dataContext: DataContext
    setDataContext: (dataContext: DataContext) => void
}

const DataContext = createContext({} as DataContextProps)

interface DataProviderProps {
    children: React.ReactNode
}

export const DataProvider = ({children}: DataProviderProps) => {
    const [dataContext, setDataContext] = useState<DataContext>({})

    return (
        <DataContext.Provider value={{dataContext, setDataContext}}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = () => {
    const { dataContext, setDataContext } = useContext(DataContext)

    const setProducts = (products: ProductType[]) => {
        setDataContext({
            ...dataContext,
            products
        })
    }

    return {
        products: dataContext?.products || [],
        setProducts,
    }
}