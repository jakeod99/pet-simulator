import { render, screen } from '@testing-library/react';
import App from '../pages/App.js';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Starter Page!/i);
  expect(linkElement).toBeInTheDocument();
});
