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
  },

  ownerSearchResults(data) {
    AppDispatcher.dispatch({
      type: 'OWNER_SEARCH_RESULTS',
      payload: { data }
    })
  },

  petSearchResults(data) {
    AppDispatcher.dispatch({
      type: 'PET_SEARCH_RESULTS',
      payload: { data }
    })
  }
}

export default ServerActions
