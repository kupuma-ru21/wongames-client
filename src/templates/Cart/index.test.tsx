import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';
import itemsMock from 'components/CartList/mock';
import cardsMock from 'components/PaymentOptions/mock';
import Cart from '.';

const props = {
  items: itemsMock,
  total: '$ 430,00',
  cards: cardsMock,
  recommendedHighlight: highlightMock,
  recommendedGames: gamesMock,
};

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock Base">{children}</div>;
    },
  };
});

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase" />;
    },
  };
});

jest.mock('components/CartList', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Cart" />;
    },
  };
});

jest.mock('components/PaymentOptions', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock PaymentOptions" />;
    },
  };
});

jest.mock('components/Empty', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Empty" />;
    },
  };
});

describe('<Cart />', () => {
  it('should render sections', () => {
    renderWithTheme(<Cart {...props} />);

    screen.getByRole('heading', { name: /my cart/i });
    screen.getByTestId('Mock Cart');
    screen.getByTestId('Mock PaymentOptions');
    screen.getByTestId('Mock Showcase');
    expect(screen.queryByTestId('Mock Empty')).toBe(null);
  });

  it('should render empty section if there are no items', () => {
    renderWithTheme(<Cart {...props} items={[]} />);

    screen.getByTestId('Mock Empty');
  });
});
