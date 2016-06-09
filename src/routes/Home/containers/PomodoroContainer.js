import { connect } from 'react-redux'
import { actions } from '../modules/PomodoroReducer'

import Pomodoro from 'components/Pomodoro'

const mapActionCreators = {
  setTime: (time) => actions.setTime(time)
}

const mapStateToProps = (state) => ({
  currentTime: state.PomodoroReducer
})

export default connect(mapStateToProps, mapActionCreators)(Pomodoro)
