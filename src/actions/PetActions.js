import API from '../API'

const PetActions = {
  getAllPets() {
    API.getAllPets();
  },

  getAllOwners() {
    API.getAllOwners();
  },

  adoptPet(obj) {
    API.adoptPet(obj);
  },

  unadoptPet(id) {
    API.unadoptPet(id);
  },

  addNewPet(obj) {
    API.addNewPet(obj);
  },

  addNewClient(obj) {
    API.addNewClient(obj);
  },

  clientSearch(name) {
    API.clientSearch(name)
  },

  petSearch(name) {
    API.petSearch(name)
  }
}

export default PetActions;
