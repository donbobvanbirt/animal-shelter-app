import API from '../API'

const PetActions = {
  getAllPets() {
    API.getAllPets();
  },

  getAllOwners() {
    API.getAllOwners();
  }
}

export default PetActions;
