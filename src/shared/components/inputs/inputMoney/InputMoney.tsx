import Input, { InputProps } from "../inputLogin/input"
import { useEffect, useState } from "react";

interface InputMoneyProps extends InputProps {
    value: number
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputMoney = ({value, onChange, ...props}: InputMoneyProps) => {
    const [currentValue, setCurrentValue] = useState<string>(`${value}`)

    useEffect(() => {
        const valueString = `${value}`

        if (!/\D/.test(valueString.replace(".", ""))) {
            setCurrentValue(value.toFixed(2).toString().replace(".", ","))
        }
    }, [value])

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const valueRemoved = event.target.value.replace(",", "")
        const sizeSlice = valueRemoved.length - 2
        const newValue = [valueRemoved.slice(0, sizeSlice), '.', valueRemoved.slice(sizeSlice)].join("")

        onChange({
            ...event,
            target: {
                ...event.target,
                value: newValue,
            }
        })
    }

    return (
        <Input addonBefore="R$" value={currentValue} onChange={handleOnChange} {...props} />
    )
}

export default InputMoney