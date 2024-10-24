import { Input as InputAntd, InputProps as InputPropsAntd } from 'antd';
import { BoxInput, TitleInput } from './input.styles';
import { InputTestIdEnum } from './__tests__/input.spec';

export interface InputProps extends InputPropsAntd {
  campo?: string;
  margin?: string;
}

const Input = (props: InputProps) => {
  return (
    <BoxInput data-testid={InputTestIdEnum.BOX_INPUT} style={{ margin: props.margin }}>
      {props.campo && (
        <TitleInput data-testid={InputTestIdEnum.INPUT_TITLE}>{props.campo}</TitleInput>
      )}
      <InputAntd {...props} />
    </BoxInput>
  );
};

export default Input;
