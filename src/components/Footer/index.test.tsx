import { render, screen } from '@testing-library/react';

import Footer from '.';

describe('<Footer />', () => {
  it.skip('should render 4 colums topics', () => {
    const { container } = render(<Footer />);

    expect(
      screen.getByRole('heading', { name: /Footer/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
