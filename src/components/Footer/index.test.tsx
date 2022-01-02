import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import Footer from '.';

describe('<Footer />', () => {
  it('should render 4 column topics', () => {
    const { container } = renderWithTheme(<Footer />);

    screen.getByRole('heading', { name: /contact us/i });

    screen.getByRole('heading', { name: /follow us/i });

    screen.getByRole('heading', { name: /links/i });

    screen.getByRole('heading', { name: /location/i });

    expect(container.firstChild).toMatchSnapshot();
  });
});
