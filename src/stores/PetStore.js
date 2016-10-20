import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher'

let allPets = null;
let allOwners = null;
let _owner = null;
let _pet = null;

class PetStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'GOT_ALL_PETS':
          allPets = action.payload.data;
          // console.log('allPets:', allPets)
          this.emit('CHANGE');
          break;
        case 'GOT_ALL_OWNERS':
          allOwners = action.payload.data;
          // console.log('allOwners:', allOwners)
          this.emit('CHANGE');
          break;
        case 'OWNER_SEARCH_RESULTS':
          _owner = action.payload.data;

          this.emit('CHANGE');
          break;
        case 'PET_SEARCH_RESULTS':
          _pet = action.payload.data;

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

  getAllOwners() {
    return allOwners;
  }

  getOwner() {
    return _owner;
  }

  getPet() {
    return _pet;
  }
}

export default new PetStore;
