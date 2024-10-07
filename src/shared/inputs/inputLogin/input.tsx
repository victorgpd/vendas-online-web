import { Input as InputAntd, InputProps as InputPropsAntd } from "antd"
import { BoxInput, TitleInput } from "./input.styles"

interface InputProps extends InputPropsAntd {
    campo: string
}

const Input = (props: InputProps) => {
    return (
        <BoxInput>
            <TitleInput>{props.campo}</TitleInput>
            <InputAntd {...props} />
        </BoxInput>
    )
}

export default Input