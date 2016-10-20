import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  gotAllPets(data) {
    AppDispatcher.dispatch({
      type: 'GOT_ALL_PETS',
      payload: { data }
    })
  },

  gotAllOwners(data) {
    AppDispatcher.dispatch({
      type: 'GOT_ALL_OWNERS',
      payload: { data }
    })
  }
}

export default ServerActions
