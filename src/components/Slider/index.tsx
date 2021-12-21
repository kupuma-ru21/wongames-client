import { forwardRef } from 'react';
import type { ForwardRefRenderFunction } from 'react';
import SlickSlider from 'react-slick';
import type { Settings } from 'react-slick';
import * as S from './styles';

export type SliderSettings = Settings;
export type SliderProps = {
  children: React.ReactNode;
  settings: SliderSettings;
};

const Slider: ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children, settings },
  ref
) => {
  return (
    <S.Wrapper>
      <SlickSlider ref={ref} {...settings}>
        {children}
      </SlickSlider>
    </S.Wrapper>
  );
};

export default forwardRef(Slider);
