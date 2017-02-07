import React from 'react'
import './Switch.css'

const Switch = (props)=> {

  const class_name = `switch ${props.className}`

  return (
    <label className={class_name}>
      <input
        type='checkbox'
        name={props.name}
        className='switch__input'
        checked={props.checked}
        disabled={props.disabled}
        onClick={props.onClick}
      />
      <div className='switch__toggle' />
    </label>
  );
}

Switch.propTypes = {
  checked: React.PropTypes.bool,
  className: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  name: React.PropTypes.string,
  onClick: React.PropTypes.func
}

Switch.defaultProps = {
  checked: false,
  className: '',
  disabled: false,
  name: '',
  onClick: ()=>{}
}

export default Switch;
