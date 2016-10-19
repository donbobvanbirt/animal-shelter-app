import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  gotAllPets(data) {
    AppDispatcher.dispatch({
      type: 'GOT_ALL_PETS',
      payload: { data }
    })
  }
}

export default ServerActions
