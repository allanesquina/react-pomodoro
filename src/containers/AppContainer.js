import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import PomodoroContainer from './PomodoroContainer'

class AppContainer extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render () {
    const { store } = this.props

    return (
      <Provider store={store}>
        <PomodoroContainer />
      </Provider>
    )
  }
}

export default AppContainer
