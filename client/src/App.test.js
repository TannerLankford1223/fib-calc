import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without Crashing', () => {
  render(<App />);
  const HomeLink = screen.getByText(/Home/i);
  const OtherPageLink = screen.getByText(/Other Page/i);
  expect(HomeLink).toBeInTheDocument();
  expect(OtherPageLink).toBeInTheDocument();
});
