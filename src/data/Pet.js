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

export class Pet {
    constructor(animal, name) {
        this.name = name;
        this.animal = animal;
        this.health = 100;
        this.hunger = 100;
        this.state = STATES.IDLE;
        this.thought = THOUGHTS.HAPPY;
        this.poop = true;
    }

    // ADD FUNCTIONS HERE TO AFFECT PET STATS
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
