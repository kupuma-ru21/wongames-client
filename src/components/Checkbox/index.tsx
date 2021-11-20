import { useState } from 'react';
import type { InputHTMLAttributes } from 'react';
import * as S from './styles';

export type CheckboxProps = {
  onCheck?: (status: boolean) => void;
  isChecked?: boolean;
  label?: string;
  labelFor?: string;
  labelColor?: 'white' | 'black';
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({
  onCheck,
  isChecked = false,
  label,
  labelFor = '',
  labelColor = 'white',
  value,
  ...rest
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked);
  const onChange = () => {
    const status = !checked;
    setChecked(status);
    !!onCheck && onCheck(status);
  };

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        value={value}
        {...rest}
      />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  );
};

export default Checkbox;
