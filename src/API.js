import { get, post } from 'axios'
import ServerActions from './actions/ServerActions'

const API = {
  getAllPets() {
    get('/api/pets')
    .then(res => {
      let { data } = res;
      console.log('data', data);
      ServerActions.gotAllPets(data);
    })
    .catch(console.error)
  },

  getAllOwners() {
    get('/api/owners')
    .then(res => {
      let { data } = res;
      console.log('data', data);
      ServerActions.gotAllOwners(data);
    })
    .catch(console.error)
  },

}

export default API;
