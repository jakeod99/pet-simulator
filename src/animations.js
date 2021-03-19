// It seems as though react bucks at relative asset paths in favor of importing
// This aggregates the animation .gifs into a hash with their runtimes (except idle)
// If any new animation gifs are uploaded, import them here and add them to the exported hash

import CatBath from './assets/animations/cat/bath.gif';
import CatDrink from './assets/animations/cat/drink.gif';
import CatEat from './assets/animations/cat/eat.gif';
import CatIdle from './assets/animations/cat/idle.gif';
import CatPet from './assets/animations/cat/pet.gif';
import CatPlay from './assets/animations/cat/play.gif';
import CatTrain from './assets/animations/cat/train.gif';
import CatWalk from './assets/animations/cat/walk.gif';

import OtterBath from './assets/animations/otter/bath.gif';
import OtterDrink from './assets/animations/otter/drink.gif';
import OtterEat from './assets/animations/otter/eat.gif';
import OtterIdle from './assets/animations/otter/idle.gif';
import OtterPet from './assets/animations/otter/pet.gif';
import OtterPlay from './assets/animations/otter/play.gif';
import OtterTrain from './assets/animations/otter/train.gif';
import OtterWalk from './assets/animations/otter/walk.gif';

import ParrotBath from './assets/animations/parrot/bath.gif';
import ParrotDrink from './assets/animations/parrot/drink.gif';
import ParrotEat from './assets/animations/parrot/eat.gif';
import ParrotIdle from './assets/animations/parrot/idle.gif';
import ParrotPet from './assets/animations/parrot/pet.gif';
import ParrotPlay from './assets/animations/parrot/play.gif';
import ParrotTrain from './assets/animations/parrot/train.gif';
import ParrotWalk from './assets/animations/parrot/walk.gif';

import PenguinBath from './assets/animations/penguin/bath.gif';
import PenguinDrink from './assets/animations/penguin/drink.gif';
import PenguinEat from './assets/animations/penguin/eat.gif';
import PenguinIdle from './assets/animations/penguin/idle.gif';
import PenguinPet from './assets/animations/penguin/pet.gif';
import PenguinPlay from './assets/animations/penguin/play.gif';
import PenguinTrain from './assets/animations/penguin/train.gif';
import PenguinWalk from './assets/animations/penguin/walk.gif';


let animations = {
    cat: {
        bath: {
            gif: CatBath,
            runtime: 7140
        },
        drink: {
            gif: CatDrink,
            runtime: 8580
        },
        eat: {
            gif: CatEat,
            runtime: 5610
        },
        idle: {
            gif: CatIdle
        },
        pet: {
            gif: CatPet,
            runtime: 5460
        },
        play: {
            gif: CatPlay,
            runtime: 5000
        },
        train: {
            gif: CatTrain,
            runtime: 5880
        },
        walk: {
            gif: CatWalk,
            runtime: 5040
        }
    },
    otter: {
        bath: {
            gif: OtterBath,
            runtime: 7440
        },
        drink: {
            gif: OtterDrink,
            runtime: 9150
        },
        eat: {
            gif: OtterEat,
            runtime: 6270
        },
        idle: {
            gif: OtterIdle
        },
        pet: {
            gif: OtterPet,
            runtime: 6120
        },
        play: {
            gif: OtterPlay,
            runtime: 9180
        },
        train: {
            gif: OtterTrain,
            runtime: 6250
        },
        walk: {
            gif: OtterWalk,
            runtime: 9140
        }
    },
    parrot: {
        bath: {
            gif: ParrotBath,
            runtime: 11170
        },
        drink: {
            gif: ParrotDrink,
            runtime: 5610
        },
        eat: {
            gif: ParrotEat,
            runtime: 7480
        },
        idle: {
            gif: ParrotIdle
        },
        pet: {
            gif: ParrotPet,
            runtime: 5610
        },
        play: {
            gif: ParrotPlay,
            runtime: 7140
        },
        train: {
            gif: ParrotTrain,
            runtime: 7290
        },
        walk: {
            gif: ParrotWalk,
            runtime: 15750
        }
    },
    penguin: {
        bath: {
            gif: PenguinBath,
            runtime: 7610
        },
        drink: {
            gif: PenguinDrink,
            runtime: 5500
        },
        eat: {
            gif: PenguinEat,
            runtime: 5800
        },
        idle: {
            gif: PenguinIdle
        },
        pet: {
            gif: PenguinPet,
            runtime: 6800
        },
        play: {
            gif: PenguinPlay,
            runtime: 14300
        },
        train: {
            gif: PenguinTrain,
            runtime: 16200
        },
        walk: {
            gif: PenguinWalk,
            runtime: 6000
        }
    }
}

export default animations;