// It seems as though react bucks at relative asset paths in favor of importing
// This aggregates the animation .gifs into a hash and exports them
// If any new animation gifs are uploaded, import them here and add them to the hash

import BlobIdle from './assets/animations/blob-idle.gif';
import DogIdle from './assets/animations/blob-idle.gif';
import CatIdle from './assets/animations/blob-idle.gif';

let animations = {
    blob: {
        idle: BlobIdle,
    },
    dog: {
        idle: DogIdle,
    },
    cat: {
        idle: CatIdle,
    },
}

export default animations;