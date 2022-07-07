import { createStore } from 'redux';

const initialState = {
  currentChainID: 0,
  userAddress: '',
  userBusdBalance: '',
  provider: {},
  web3: {}
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store