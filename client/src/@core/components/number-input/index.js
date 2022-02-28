// ** React Imports
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Plus, Minus } from 'react-feather'
import { useState, useEffect } from 'react'
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap'

// ** Styles
import './number-input.scss'

// ** Keycode Vars
const KEYCODE_UP = 38
const KEYCODE_DOWN = 40

const NumberInput = props => {
  // ** Props
  const {
    min,
    max,
    step,
    size,
    wrap,
    value,
    style,
    upIcon,
    disabled,
    readonly,
    onChange,
    downIcon,
    vertical,
    className,
    onDecrement,
    onIncrement,
    inputClassName,
    ...rest
  } = props

  // ** State
  const [count, setCount] = useState(value || min)

  // ** Handle btn down click
  const handleDecrement = () => {
    if (!disabled && !readonly) {
      // ** If count is equals or smaller than min then return and do nothing
      if (!wrap && count <= min) {
        return
      }

      // ** Returns the decreased count based on wrap & and min prop
      const countCondition = () => {
        if (count - step < min) {
          if (wrap) {
            return max
          } else {
            return min
          }
        } else {
          return count - step
        }
      }

      setCount(countCondition())

      if (onDecrement) {
        onIncrement(count)
      }
    }
  }

  // ** Handle btn up click
  const handleIncrement = () => {
    if (!disabled && !readonly) {
      // ** If count is equals or larger than min then return and do nothing
      if (!wrap && count >= max) {
        return
      }

      // ** Returns the Increased count based on wrap & and max prop
      const countCondition = () => {
        if (count + step > max) {
          if (wrap) {
            return min
          } else {
            return max
          }
        } else {
          return count + step
        }
      }

      setCount(countCondition())

      if (onIncrement) {
        onIncrement(count)
      }
    }
  }

  // ** Handle input change
  const handleInputChange = e => {
    setCount(Number(e.target.value))
  }

  // ** Handle Arrow Up & Down
  const handleKeyDown = e => {
    e.preventDefault()
    if (!readonly) {
      if (e.keyCode === KEYCODE_UP) {
        handleIncrement()
      }
      if (e.keyCode === KEYCODE_DOWN) {
        handleDecrement()
      }
    }
  }

  // ** UseEffect based on user passed onChange
  useEffect(() => {
    if (onChange) {
      onChange(count)
    }
  }, [count])

  return (
    <InputGroup
      className={classnames('number-input', {
        disabled,
        readonly,
        [className]: className,
        'vertical-number-input': vertical,
        [`vertical-number-input-${size}`]: vertical && size
      })}
      {...(style ? { style } : {})}
    >
      <InputGroupAddon addonType='prepend' onClick={handleDecrement}>
        <Button
          className='btn-icon'
          color='transparent'
          {...(size ? { size } : {})}
          disabled={(!wrap && count <= min) || disabled || readonly}
        >
          {downIcon}
        </Button>
      </InputGroupAddon>
      <Input
        {...rest}
        type='number'
        value={count}
        disabled={disabled}
        readOnly={readonly}
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
        className={classnames({
          [inputClassName]: inputClassName
        })}
        {...(size ? { bsSize: size } : {})}
      />
      <InputGroupAddon addonType='append' onClick={handleIncrement}>
        <Button
          className='btn-icon'
          color='transparent'
          {...(size ? { size } : {})}
          disabled={(!wrap && count >= max) || disabled || readonly}
        >
          {upIcon}
        </Button>
      </InputGroupAddon>
    </InputGroup>
  )
}

export default NumberInput

// ** Default Props
NumberInput.defaultProps = {
  min: 1,
  step: 1,
  wrap: false,
  max: Infinity,
  disabled: false,
  readonly: false,
  downIcon: <Minus size={14} />,
  upIcon: <Plus size={14} />
}

// ** PropTypes
NumberInput.propTypes = {
  wrap: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  style: PropTypes.object,
  vertical: PropTypes.bool,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  onChange: PropTypes.func,
  upIcon: PropTypes.element,
  downIcon: PropTypes.element,
  className: PropTypes.string,
  onDecrement: PropTypes.func,
  onIncrement: PropTypes.func,
  inputClassName: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'lg'])
}
