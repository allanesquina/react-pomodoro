import { injectReducer } from '../../store/reducers'

export default (store) => ({
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const container = require('./containers/PomodoroContainer').default
      const reducer = require('./modules/PomodoroReducer').default

      injectReducer(store, { key: 'PomodoroReducer', reducer })

      cb(null, container)

    }, 'Pomodoro');
  }
})
