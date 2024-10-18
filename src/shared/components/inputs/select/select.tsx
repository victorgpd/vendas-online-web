import { Select as SelectAntd, SelectProps as SelectPropsAntd } from "antd"
import { BoxSelect, TitleSelect } from "./select.styles"

interface SelectProps extends SelectPropsAntd {
    title?: string,
    margin?: string,
    width?: string,
    widthBox?: string,
}

const Select = (props: SelectProps) => {
    return (
        <BoxSelect style={{margin: props.margin, width: "100%"}}>
            {props.title && <TitleSelect>{props.title}</TitleSelect>}
            <SelectAntd style={{width: props.width}} {...props}/>
        </BoxSelect>
    )
}

export default Select