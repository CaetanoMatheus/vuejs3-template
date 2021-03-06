import { createStore } from 'vuex'

import example from './modules/example'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export default createStore({
  actions,
  getters,
  mutations,
  modules: {
    example,
  },
  state: {},
})
