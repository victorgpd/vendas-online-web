import { Tooltip } from "antd"
import { ProductType } from "../types/ProductType"

interface TooltipImageProps {
    product: ProductType
}

const TooltipImage = ({ product }: TooltipImageProps) => {
    
    return (
        <Tooltip placement="bottomRight" title={product.name}>
            <span>{product.id}</span>
        </Tooltip>
    )
}

export default TooltipImage