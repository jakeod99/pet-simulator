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

// cooldowns are in seconds
export const COUNTDOWNS = {
    HEALTH: 3,
    HUNGER: 5,
    POOP: 60,
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
        this.healthCountdown = COUNTDOWNS.HEALTH;
        this.hungerCountdown = COUNTDOWNS.HUNGER;
    }

    /**
     * Called when the pet has had its poop cleaned. Sets poop to false to hide the icon.
     */
    cleanedPoop(){
        this.poop = false;
    }

    /**
     * Called every second. Calls helper methods that update the pet after a certain number of seconds
     * Returns true if the pet needs updated.
     */
    updatePet(){
        // add new cooldown method calls to this array
        const statusCooldowns = [
            this.poopCooldown(),
            this.healthCooldown(),
            this.hungerCooldown(),
        ];

        // return false only if ALL status cooldowns returned false
        return statusCooldowns.find(cooldown => cooldown) || false;
    }

    healthCooldown() {
        const healthTick = 5;
        this.healthCountdown -= 1;

        if (this.healthCountdown === 0) {
            if (this.health > 0) {
                this.health -= healthTick;

                if (this.health < 0) // if 100 is not evenly divisible by tick 
                    this.health = 0;
            }
            this.healthCountdown = COUNTDOWNS.HEALTH;
            return true;
        }
        return false;
    }

    hungerCooldown() {
        const hungerTick = 5;
        this.hungerCountdown -= 1;

        if (this.hungerCountdown === 0) {
            if (this.hunger > 0) {
                this.hunger -= hungerTick;

                if (this.hunger < 0)
                    this.hunger = 0;
            } 
            this.hungerCountdown = COUNTDOWNS.HUNGER;
            return true;
        }
        return false;
    }

    /**
     * Counts down the number of seconds until its time to display the poop icon again.
     * Returns true if the pet needs updated.
     */
    poopCooldown(){
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

