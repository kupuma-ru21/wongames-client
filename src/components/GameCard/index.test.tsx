import { screen } from '@testing-library/react';

// import GameCard from '.';

describe('<GameCard />', () => {
  it.skip('should render correctly', () => {
    // const { container } = render(<GameCard />);

    expect(
      screen.getByRole('heading', { name: /GameCard/i })
    ).toBeInTheDocument();

    // expect(container.firstChild).toMatchSnapshot();
  });
});
