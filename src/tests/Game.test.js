import { render, screen, fireEvent } from '@testing-library/react';
import Game from '../pages/Game.js';
import * as Pet from '../data/Pet';

test('no poop initially', () => {
	const adoptedPet = Pet.adoptPet('dog', 'Tester');
	const location = {state: {pet: adoptedPet}}
 	render(<Game location={location}/>);
  	const poop = screen.getByTestId('poop-container');
  	expect(poop).toHaveClass('hide')
});

test('poop displayed when true', async () => {
	const adoptedPet = Pet.adoptPet('dog', 'Tester');
	adoptedPet.poop = true;
	const location = {state: {pet: adoptedPet}}
 	render(<Game location={location}/>);
  	const poop = screen.getByTestId('poop-container');
  	expect(poop).not.toHaveClass('hide')
});

test('clicking removes poop', async () => {
	const adoptedPet = Pet.adoptPet('dog', 'Tester');
	adoptedPet.poop = true;
	const location = {state: {pet: adoptedPet}}
 	render(<Game location={location}/>);
  	fireEvent.click(screen.getByTestId('poop'), {button: 1})
  	const poop = screen.getByTestId('poop-container');
  	expect(poop).toHaveClass('hide')
});