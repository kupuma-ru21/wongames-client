import { screen } from '@testing-library/react';

describe('<Banner />', () => {
  it.skip('should render the heading', () => {
    expect(
      screen.getByRole('heading', { name: /Banner/i })
    ).toBeInTheDocument();
  });
});
