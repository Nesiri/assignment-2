import { render, screen } from '@testing-library/react';
import App from './App';

test('render my name on the page', () => {
  render(<App />);
  const nameElement = screen.getByText(/Nesru Abbamilki/i);
  expect(nameElement).toBeInTheDocument();
});
