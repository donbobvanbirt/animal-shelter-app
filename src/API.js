import axios, { get, post } from 'axios'
import ServerActions from './actions/ServerActions'

const API = {
  getAllPets() {
    get('/api/pets')
    .then(res => {
      let { data } = res;
      // console.log('data', data);
      ServerActions.gotAllPets(data);
    })
    .catch(console.error)
  },

  addNewPet(obj) {
    post('/api/pets', obj)
    .then(res => {
      let { data } = res;
      console.log('data', data);

    })
    .catch(console.error)
  },

  addNewClient(obj) {
    post('/api/owners', obj)
    .then(res => {
      let { data } = res;
      console.log('data', data);

    })
    .catch(console.error)
  },

  getAllOwners() {
    get('/api/owners')
    .then(res => {
      let { data } = res;
      // console.log('data', data);
      ServerActions.gotAllOwners(data);
    })
    .catch(console.error)
  },

  adoptPet(obj) {
    axios.put('/api/pets/adopt', obj)
    .then(res => {
      let { data } = res;
      // console.log('data', data);
      this.getAllPets();
    })
    .catch(console.error)
  },

  unadoptPet(id) {
    axios.put(`/api/pets/unadopt/${id}`)
    .then(res => {
      let { data } = res;
      // console.log('data', data);
      this.getAllPets();
    })
    .catch(console.error)
  },

  petSearch(name) {
    get(`/api/owners/pets/${name}`)
    .then(res => {
      let { data } = res;
      console.log('data in clientSearch', data[0]);
      if (data[0]) {
        ServerActions.ownerSearchResults(data);
      } else {
        this.findClient(name)
      }
    })
    .catch(console.error)
  },

  findClient(name) {
    get(`/api/owners/find/${name}`)
    .then(res => {
      let { data } = res;
      console.log('data in findClient', data);
      ServerActions.ownerSearchResults(data);
    })
    .catch(console.error)
  },

  petSearch(name) {
    get(`/api/pets/owner/${name}`)
    .then(res => {
      let { data } = res;
      console.log('data in petSearch', data[0]);
      if (data[0]) {
        ServerActions.petSearchResults(data);
      } else {
        this.findPet(name)
      }
    })
    .catch(console.error)
  },

  findPet(name) {
    get(`/api/pets/find/${name}`)
    .then(res => {
      let { data } = res;
      console.log('data in findPet', data);
      ServerActions.petSearchResults(data);
    })
    .catch(console.error)
  }

}

export default API;
