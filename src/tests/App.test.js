import { render, screen, fireEvent } from '@testing-library/react';
import Game from '../pages/Game';
import StartingPage from '../pages/StartingPage.js';
import * as Pet from '../data/Pet';



// ADOPTION TESTS
test('Adoption generates Pet object', () => {
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


// POOP TESTS
test('No initial poop on game screen', () => {
    const adoptedPet = Pet.adoptPet('dog', 'Tester');
    const location = {state: {pet: adoptedPet}};
    render(<Game location={location}/>);
    const poop = screen.getByTestId('poop-container');
    expect(poop).toHaveClass('hide');
});

test('When poop is true it is displayed', async () => {
    const adoptedPet = Pet.adoptPet('dog', 'Tester');
    adoptedPet.poop = true;
    const location = {state: {pet: adoptedPet}};
    render(<Game location={location}/>);
    const poop = screen.getByTestId('poop-container');
    expect(poop).not.toHaveClass('hide');
});

test('Clicking the poop cleans it up', async () => {
    const adoptedPet = Pet.adoptPet('dog', 'Tester');
    adoptedPet.poop = true;
    const location = {state: {pet: adoptedPet}};
    render(<Game location={location}/>);
    fireEvent.click(screen.getByTestId('poop'), {button: 1});
    const poop = screen.getByTestId('poop-container');
    expect(poop).toHaveClass('hide');
});


//THOUGHT TEST
test('No initial thought on game screen', () => {
    const adoptedPet = Pet.adoptPet('dog', 'Tester');
    const location = {state: {pet: adoptedPet}};
    render(<Game location={location}/>);
    const thought = screen.getByTestId('thought-hidden');
    expect(thought).toBeInTheDocument();
});

test('When pet is sad the thought appears', () => {
    const adoptedPet = Pet.adoptPet('dog', 'Tester');
    adoptedPet.thought = "sad";
    const location = {state: {pet: adoptedPet}};
    render(<Game location={location}/>);
    const thought = screen.getByTestId('thought-sad');
    expect(thought).toBeInTheDocument();;
});

test('When pet is happy the thought appears', () => {
    const adoptedPet = Pet.adoptPet('dog', 'Tester');
    adoptedPet.thought = "happy";
    const location = {state: {pet: adoptedPet}};
    render(<Game location={location}/>);
    const thought = screen.getByTestId('thought-happy');
    expect(thought).toBeInTheDocument();
});

test('When pet thought is eat the thought appears', () => {
    const adoptedPet = Pet.adoptPet('dog', 'Tester');
    adoptedPet.thought = "eat";
    const location = {state: {pet: adoptedPet}};
    render(<Game location={location}/>);
    const thought = screen.getByTestId('thought-eat');
    expect(thought).toBeInTheDocument();
});

test('When pet thought is drink the thought appears', () => {
    const adoptedPet = Pet.adoptPet('dog', 'Tester');
    adoptedPet.thought = "drink";
    const location = {state: {pet: adoptedPet}};
    render(<Game location={location}/>);
    const thought = screen.getByTestId('thought-drink');
    expect(thought).toBeInTheDocument();
});

test('When pet thought is walk the thought appears', () => {
    const adoptedPet = Pet.adoptPet('dog', 'Tester');
    adoptedPet.thought = "walk";
    const location = {state: {pet: adoptedPet}};
    render(<Game location={location}/>);
    const thought = screen.getByTestId('thought-walk');
    expect(thought).toBeInTheDocument();
});

test('When pet thought is train the thought appears', () => {
    const adoptedPet = Pet.adoptPet('dog', 'Tester');
    adoptedPet.thought = "train";
    const location = {state: {pet: adoptedPet}};
    render(<Game location={location}/>);
    const thought = screen.getByTestId('thought-train');
    expect(thought).toBeInTheDocument();
});

test('When pet thought is play the thought appears', () => {
    const adoptedPet = Pet.adoptPet('dog', 'Tester');
    adoptedPet.thought = "play";
    const location = {state: {pet: adoptedPet}};
    render(<Game location={location}/>);
    const thought = screen.getByTestId('thought-play');
    expect(thought).toBeInTheDocument();
});

test('When pet thought is bath the thought appears', () => {
    const adoptedPet = Pet.adoptPet('dog', 'Tester');
    adoptedPet.thought = "bath";
    const location = {state: {pet: adoptedPet}};
    render(<Game location={location}/>);
    const thought = screen.getByTestId('thought-bath');
    expect(thought).toBeInTheDocument();
});


// STATUS METER TESTS
test('Pet health decreases properly', () => {
    const adoptedPet = Pet.adoptPet('dog', 'Tester');
    adoptedPet.healthCountdown = 1;
    expect(adoptedPet.health).toBe(100);
    adoptedPet.healthCooldown();
    expect(adoptedPet.health).toBeLessThan(100);
});

test('Pet hunger decreases properly', () => {
    const adoptedPet = Pet.adoptPet('dog', 'Tester');
    adoptedPet.hungerCountdown = 1;
    expect(adoptedPet.hunger).toBe(100);
    adoptedPet.hungerCooldown();
    expect(adoptedPet.hunger).toBeLessThan(100);
});
