import { render, screen } from '@testing-library/react';
import Profile from '.';

describe('<Profile />', () => {
  it.skip('should render the heading', () => {
    const { container } = render(
      <Profile>
        <></>
      </Profile>
    );

    expect(
      screen.getByRole('heading', { name: /Profile/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
