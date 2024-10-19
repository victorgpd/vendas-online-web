import { CategoryType } from "../../category/types/CategoryType";

export interface ProductType {
    id: number,
    name: string,
    image: string,
    price: number,
    category: CategoryType
}