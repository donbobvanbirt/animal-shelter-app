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
  }

}

export default API;
