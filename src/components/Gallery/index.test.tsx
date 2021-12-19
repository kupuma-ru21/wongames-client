import 'match-media-mock';
import { render, screen } from '@testing-library/react';

import Gallery from '.';

describe('<Gallery />', () => {
  it.skip('should render the heading', () => {
    const { container } = render(<Gallery items={[]} />);

    expect(
      screen.getByRole('heading', { name: /Gallery/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
