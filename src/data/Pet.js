export const ANIMALS = {
    DOG: 'dog',
    CAT: 'cat',
};

export const STATES = {
    IDLE: 'idle',
};

export const THOUGHTS = {
    HAPPY: 'happy',
};

export const COUNTDOWNS = {
    POOP: 60,   //The pet poops every 60 seconds
}

export class Pet {
    constructor(animal, name) {
        this.name = name;
        this.animal = animal;
        this.health = 100;
        this.hunger = 100;
        this.state = STATES.IDLE;
        this.thought = THOUGHTS.HAPPY;
        this.poop = false;
        this.poopCountdown = COUNTDOWNS.POOP;
    }

    /**
     * Called when the pet has had its poop cleaned. Sets poop to false to hide the icon.
     */
    cleanedPoop(){
        this.poop = false;
    }

    /**
     * Called every second. Counts down the number of seconds until its time to display the poop icon again.
     */
    needToPoop(){
        this.poopCountdown = this.poopCountdown - 1;
        
        if (this.poopCountdown === 0) {
            this.poop = true;
            this.poopCountdown = COUNTDOWNS.POOP;
            return true;
        }
        return false;
    }
}

/**
 * Create instance of Pet with validated animal type and name
 * @param {string} animal - pet's animal type (in ANIMALS)
 * @param {string} name - pet's given name
 */
export function adoptPet(animal = '', name = '') {
    // No animal type or name passed in
    if (!animal.length || !name.length)
        return null;

    // Animal type doesn't exist in ANIMALS
    const exists = Object.values(ANIMALS).includes(animal.toLowerCase());
    if (!exists)
        return null;
    
    return new Pet(animal, name);
}

