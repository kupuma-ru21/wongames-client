import { render, screen } from '@testing-library/react';
import 'match-media-mock';
import Showcase from '.';

describe.skip('<Showcase />', () => {
  it('should render the heading', () => {
    const { container } = render(<Showcase />);

    expect(
      screen.getByRole('heading', { name: /Showcase/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
