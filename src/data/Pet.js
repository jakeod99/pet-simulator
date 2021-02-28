export const ANIMALS = {
    DOG: 'dog',
    CAT: 'cat',
};

export class Pet {
    healthStat = 100;
    hungerStat = 100;

    constructor(name, animal) {
        this.name = name;
        this.animal = animal;
    }

    getName() {
        return this.name;
    }

    getAnimal() {
        return this.animal;
    }

    getHealth() {
        return this.healthStat;
    }

    getHunger() {
        return this.hungerStat;
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
