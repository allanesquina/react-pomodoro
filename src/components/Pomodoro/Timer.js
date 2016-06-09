import React from 'react'
import classes from './Timer.scss'

export const Timer = (props) => (
  <div className={classes.display}>
    {props.currentTime}
  </div>
)

Timer.propTypes = {
  currentTime: React.PropTypes.string
}

export default Timer
