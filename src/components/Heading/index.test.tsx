import { render, screen } from '@testing-library/react';
import Heading from '.';

describe('<Heading />', () => {
  it.skip('should render the heading', () => {
    const { container } = render(
      <Heading>
        <></>
      </Heading>
    );

    expect(
      screen.getByRole('heading', { name: /Heading/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
