import { Select as SelectAntd, SelectProps as SelectPropsAntd } from "antd"
import { BoxSelect, SelectContainer, TitleSelect } from "./select.styles"

interface SelectProps extends SelectPropsAntd {
    children: React.ReactNode,
    title?: string,
    margin?: string,
    width?: string,
    widthBox?: string,
}

const Select = (props: SelectProps) => {
    return (
        <BoxSelect style={{margin: props.margin, width: props.widthBox}}>
            {props.title && <TitleSelect>{props.title}</TitleSelect>}
            <SelectContainer>
                <SelectAntd style={{width: props.width}} {...props}/>
                {props.children}
            </SelectContainer>
        </BoxSelect>
    )
}

export default Select