import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import Profile from '.';

jest.mock('next/router', () => {
  return {
    useRouter: jest.fn(() => {
      return { asPath: '/profile/me' };
    }),
  };
});

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock Base">{children}</div>;
    },
  };
});

jest.mock('components/Heading', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock Heading">{children}</div>;
    },
  };
});

jest.mock('components/ProfileMenu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ProfileMenu" />;
    },
  };
});

describe('<Profile />', () => {
  it('should render sections', () => {
    renderWithTheme(<Profile>Lorem Ipsum</Profile>);

    expect(screen.getByText('Lorem Ipsum'));
    expect(screen.getByText('My profile'));
    expect(screen.getByTestId('Mock ProfileMenu'));
  });
});
