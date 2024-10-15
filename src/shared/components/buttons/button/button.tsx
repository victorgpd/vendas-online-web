import { ButtonProps } from "antd"
import { ButtonAntd } from "./button.styles"

interface ButtonCurrentProps extends ButtonProps {
    margin?: string
    width?: string
    height?: string
}

const Button = (props: ButtonCurrentProps) => {
    return (
        <ButtonAntd style={{margin: props.margin, width: props.width, height: props.height}} {...props}>
            {props.children}
        </ButtonAntd>
    )
}

export default Button