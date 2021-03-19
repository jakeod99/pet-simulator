// It seems as though react bucks at relative asset paths in favor of importing
// This aggregates the animation .gifs into a hash and exports them
// If any new animation gifs are uploaded, import them here and add them to the hash

import BlobIdle from './assets/animations/blob-idle.gif';
import DogIdle from './assets/animations/blob-idle.gif';
import CatIdle from './assets/animations/cat-idle.gif';
import ParrotIdle from './assets/animations/parrot-idle.gif';
import PenguinIdle from './assets/animations/penguin-idle.gif';
import SealIdle from './assets/animations/seal-idle.gif';
import CatPet from './assets/animations/cat-pet.gif';
import ParrotPet from './assets/animations/parrot-pet.gif';
import PenguinPet from './assets/animations/penguin-pet.gif';
import SealPet from './assets/animations/seal-pet.gif';


let animations = {
    blob: {
        idle: BlobIdle,

    },
    dog: {
        idle: DogIdle,
    },
    cat: {
        idle: CatIdle,
        pet: CatPet,
    },
    penguin: {
        idle: PenguinIdle,
        pet: PenguinPet,
    },
    parrot: {
        idle: ParrotIdle,
        pet: ParrotPet,
    },
    seal: {
        idle: SealIdle,
        pet: SealPet,
    },
}

export default animations;