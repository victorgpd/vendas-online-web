import { ButtonProps } from "antd"
import { ButtonAntd } from "./button.styles"

interface ButtonCurrentProps extends ButtonProps {
    margin: string
}

const Button = (props: ButtonCurrentProps) => {
    return (
        <ButtonAntd style={{margin: props.margin}} {...props}>
            {props.children}
        </ButtonAntd>
    )
}

export default Button