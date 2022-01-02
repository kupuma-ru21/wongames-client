import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import BannerSlider from '.';
import items from './mock';

describe('<BannerSlider />', () => {
  it('should render vertical slider', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />);

    container.querySelector('.slick-vertical');
  });

  it('should render with 1 active item', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />);

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2);
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1);

    screen.getByRole('heading', { name: /defy death 1/i, hidden: false });

    screen.getByRole('heading', { name: /defy death 2/i, hidden: true });
  });

  it('should render with the dots', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />);

    container.querySelector('.slick-dots');
  });
});
