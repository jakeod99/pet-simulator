import { render, screen, fireEvent } from '@testing-library/react';
import App from '../pages/App.js';
import Game from '../pages/Game';
import StartingPage from '../pages/StartingPage.js';
import * as Pet from '../data/Pet';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Starter Page!/i);
  expect(linkElement).toBeInTheDocument();
});

test('adoption generates Pet object', () => {
  // mock the history.push() call to use in StartingPage
  const mockProps = { history: { push: jest.fn() } };
  render(<StartingPage {...mockProps} />);

  // Input "Spot" as pet name
  fireEvent.change(
    screen.getByPlaceholderText(/Pet name/i),
    { target: { value: 'Spot' } }
  );

  // Click submit to create pet
  fireEvent.click(screen.getByRole('button', { name: /Adopt/i }));
  expect(mockProps.history.push).toBeCalled();
});

test('Pet object prop renders proper name', () => {
  // generate a test Pet to be passed into props
  const testPet = Pet.adoptPet('dog', 'Spot');
  const mockProps = {
    location: {
      state: {
        pet: testPet
      }
    }
  };
  render(<Game {...mockProps} />);
  const bannerText = screen.getByText(/Spot the Dog/i);
  expect(bannerText).toBeInTheDocument();
});
