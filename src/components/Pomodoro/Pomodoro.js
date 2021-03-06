import React from 'react'
import classes from './Pomodoro.scss'
import ActionButton from './ActionButton'
import AlertBox from './AlertBox'
import Timer from './Timer'

const Audio = window.Audio || (() => false)
const START_LABEL = 'Start'
const STOP_LABEL = 'Stop'
const RESET_LABEL = 'Reset'
const POMODORO_TIME = 25 * (60 * 1000)

// http://stackoverflow.com/questions/21294302/converting-soundclouds-
// milliseconds-to-minutes-and-seconds-with-javascript
function millisToMinutesAndSeconds (millis) {
  const minutes = Math.floor(millis / 60000)
  const seconds = ((millis % 60000) / 1000).toFixed(0)
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
}

function playAudio (audio) {
  if (audio) {
    audio.currentTime = 0
    audio.play()
  }
}

export class Pomodoro extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isRunning: false,
      actionLabel: START_LABEL,
      time: POMODORO_TIME
    }

    this.state.audioList = {}
    this._loadAudioFiles()
    this.props.setTime(this.state.time)

    this.handleTimeActions = this.handleTimeActions.bind(this)
    this.handleResetAction = this.handleResetAction.bind(this)
    this.handleCloseAlertBox = this.handleCloseAlertBox.bind(this)
  }

  _loadAudioFiles () {
    ['stop', 'start', 'alarm'].map((file) => {
      this.state.audioList[file] = new Audio(`${file}.wav`)
    })
  }

  _startTime () {
    playAudio(this.state.audioList.start)
    this._closeAlertBox()
    const interval = setInterval(() => {
      if (this.state.time > 0) {
        this.setState({time: this.state.time - 1000})
        this.props.setTime(this.state.time)
      } else {
        this._resetTime()
        this._openAlertBox()
      }
    }, 1000)

    this.setState({ interval, isRunning: true })
  }

  _openAlertBox () {
    playAudio(this.state.audioList.alarm)
    this.setState({isAlertBoxActivated: true})
  }

  _closeAlertBox () {
    this.setState({isAlertBoxActivated: false})
  }

  _stopTime () {
    playAudio(this.state.audioList.stop)
    clearInterval(this.state.interval)
    this.setState({ isRunning: false })
  }

  _resetTime () {
    clearInterval(this.state.interval)
    this.props.setTime(POMODORO_TIME)
    this.setState({ isRunning: false, time: POMODORO_TIME })
  }

  handleTimeActions () {
    this[this.state.isRunning ? '_stopTime' : '_startTime']()
  }

  handleResetAction () {
    playAudio(this.state.audioList.stop)
    this._resetTime()
  }

  handleCloseAlertBox () {
    this._closeAlertBox()
  }

  render () {
    const currentTime = millisToMinutesAndSeconds(this.props.currentTime)
    const actionLabel = this.state.isRunning ? STOP_LABEL : START_LABEL
    const { handleTimeActions, handleResetAction, handleCloseAlertBox } = this
    return (
      <div className={classes.wrapper}>
        <Timer currentTime={currentTime} />
        <ActionButton text={actionLabel} onClick={handleTimeActions} />
        <ActionButton text={RESET_LABEL} onClick={handleResetAction} />
        {(this.state.isAlertBoxActivated &&
          <AlertBox onClick={handleCloseAlertBox} />
        )}
      </div>
    )
  }
}

Pomodoro.propTypes = {
  currentTime: React.PropTypes.number.isRequired,
  setTime: React.PropTypes.func.isRequired
}

Pomodoro.defaultProps = {
  setTime: () => false,
  currentTime: 0
}

export default Pomodoro
