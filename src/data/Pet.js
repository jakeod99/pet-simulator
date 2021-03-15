export const ANIMALS = {
    DOG: 'dog',
    CAT: 'cat',
};

export const STATES = {
    IDLE: 'idle',
};

export const THOUGHTS = {
    HAPPY: 'happy',
    SAD: 'sad',
    TRAIN: 'train',
    PLAY: 'play',
    WALK: 'walk',
    BATH: 'bath',
    DRINK: 'drink',
    EAT: 'eat',
};

export const COUNTDOWNS = {
    POOP: 60,   // The pet poops every 60 seconds
    THOUGHT_UP: 5, // The thought stays on the screen for 5 seconds
    THOUGHT: 15,    // There are 15 seconds between thoughts
}

export class Pet {
    constructor(animal, name) {
        this.name = name;
        this.animal = animal;
        this.health = 100;
        this.hunger = 100;
        this.state = STATES.IDLE;
        this.thought = "";
        this.thoughtCountdown = COUNTDOWNS.THOUGHT;
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
     * Called every second. Calls helper methods that update the pet after a certain number of seconds
     * Returns true if the pet needs updated.
     */
    updatePet(){
        return (this.poopCooldown() || this.thoughtCooldown());   //Can just add methods to this if statement
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

    /**
     * Counts down the number of seconds between updating the thought of the pet.
     * Returns true if the pet needs updated.
     */
    thoughtCooldown(){
        this.thoughtCountdown = this.thoughtCountdown - 1;
        if (this.thoughtCountdown === 0){
            if (this.thought === ""){
                this.thought = this.determineThoughts();
                this.thoughtCountdown = COUNTDOWNS.THOUGHT_UP;
            } else {
                this.thought = "";
                this.thoughtCountdown = COUNTDOWNS.THOUGHT;
            }
            return true;
        }
        return false;
    }

    /**
     * Uses the health and hunger bars to determine what the thought bubble will display
     */
    determineThoughts(){
        if (this.health + this.hunger > 175){   // Very happy will display smiley face
            return THOUGHTS.HAPPY;
        }

        if (this.health + this.hunger < 50){    // Very sad will display sad face
            return THOUGHTS.SAD;
        }

        if (this.hunger < this.health){     // If hungrier display either eat or drink thoughts
            const hungerThoughts = [THOUGHTS.EAT, THOUGHTS.DRINK];
            return hungerThoughts[Math.floor(Math.random()*hungerThoughts.length)];
        }

        if (this.health < this.hunger){     // If less healthy display either trian, play, walk or bath thoughts
            const healthThoughts = [THOUGHTS.TRAIN, THOUGHTS.PLAY, THOUGHTS.WALK, THOUGHTS.BATH];
            return healthThoughts[Math.floor(Math.random()*healthThoughts.length)];
        }
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

