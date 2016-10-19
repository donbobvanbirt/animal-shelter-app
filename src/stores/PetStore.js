import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher'

let allPets = null;

class PetStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'GOT_ALL_PETS':
          allPets = action.payload.data;
          console.log('allPets:', allPets)
          this.emit('CHANGE');
          break;
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE',cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE',cb)
  }

  getAllPets() {
    return allPets;
  }
}
