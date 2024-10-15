import { ProductType } from "../../types/ProductType"
import Tooltip from "../../../../shared/components/tooltip/Tooltip.tsx"

interface TooltipImageProps {
    product: ProductType
}

const TooltipImage = ({ product }: TooltipImageProps) => {
    
    return (
        <Tooltip tooltip={<img src={product.image} />}>
            <span>{product.id}</span>
        </Tooltip>
    )
}

export default TooltipImage