import React from 'react'
import classes from './ActionButton.scss'

export const ActionButton = (props) => (
  <button className={classes.button} onClick={props.onClick}>
    {props.text}
  </button>
)

ActionButton.propTypes = {
  text: React.PropTypes.string,
  onClick: React.PropTypes.func
}

export default ActionButton
