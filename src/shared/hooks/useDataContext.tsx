import { createContext, useContext, useState } from "react";
import { ProductType } from "../../modules/product/types/ProductType";
import { CategoryType } from "../../modules/product/types/CategoryType";

interface DataContext {
    products?: ProductType[],
    categories?: CategoryType[],
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

    const setCategories = (categories: CategoryType[]) => {
        setDataContext({
            ...dataContext,
            categories
        })
    }

    return {
        categories: dataContext?.categories || [],
        setCategories,
        products: dataContext?.products || [],
        setProducts,
    }
}