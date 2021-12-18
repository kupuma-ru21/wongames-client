import Banner from 'components/Banner';
import Slider from 'components/Slider';
import type { SliderSettings } from 'components/Slider';
import * as S from './styles';

type BannerProps = React.ComponentProps<typeof Banner>;
type BannerSliderProps = { items: BannerProps[] };

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    { breakpoint: 1170, settings: { vertical: false, verticalSwiping: false } },
  ],
};

const BannerSlider = ({ items }: BannerSliderProps) => {
  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map((item) => {
          return <Banner key={item.title} {...item} />;
        })}
      </Slider>
    </S.Wrapper>
  );
};

export default BannerSlider;
