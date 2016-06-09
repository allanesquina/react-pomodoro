import React from 'react'
import classes from './AlertBox.scss'
import ActionButton from './ActionButton'

export const AlertBox = (props) => (
  <div className={classes.box}>
    <p>It's time to relax ;-)</p>
    <ActionButton onClick={props.onClick} text='Close' />
  </div>
)

AlertBox.propTypes = {
  onClick: React.PropTypes.func
}

export default AlertBox
