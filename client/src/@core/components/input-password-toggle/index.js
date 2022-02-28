// ** React Imports
import { Fragment, useState } from 'react'

// ** Third Party Components
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Eye, EyeOff } from 'react-feather'
import { InputGroup, InputGroupAddon, Input, InputGroupText, Label, inputClassName } from 'reactstrap'

const InputPasswordToggle = props => {
  // ** Props
  const {
    label,
    hideIcon,
    showIcon,
    visible,
    className,
    htmlFor,
    placeholder,
    iconSize,
    inputClassName,
    ...rest
  } = props

  // ** State
  const [inputVisibility, setInputVisibility] = useState(visible)

  // ** Renders Icon Based On Visibility
  const renderIcon = () => {
    const size = iconSize ? iconSize : 14

    if (inputVisibility === false) {
      return hideIcon ? hideIcon : <Eye size={size} />
    } else {
      return showIcon ? showIcon : <EyeOff size={size} />
    }
  }

  return (
    <Fragment>
      {label ? <Label for={htmlFor}>{label}</Label> : null}
      <InputGroup
        className={classnames({
          [className]: className
        })}
      >
        <Input
          type={inputVisibility === false ? 'password' : 'text'}
          placeholder={placeholder ? placeholder : '············'}
          className={classnames({
            [inputClassName]: inputClassName
          })}
          /*eslint-disable */
          {...(label && htmlFor
            ? {
                id: htmlFor
              }
            : {})}
          {...rest}
          /*eslint-enable */
        />
        <InputGroupAddon addonType='append' onClick={() => setInputVisibility(!inputVisibility)}>
          <InputGroupText className='cursor-pointer'>{renderIcon()}</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </Fragment>
  )
}

export default InputPasswordToggle

// ** PropTypes
InputPasswordToggle.propTypes = {
  hideIcon: PropTypes.node,
  showIcon: PropTypes.node,
  visible: PropTypes.bool,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  iconSize: PropTypes.number,
  inputClassName: PropTypes.string,
  label(props, propName, componentName) {
    // ** If label is defined and htmlFor is undefined throw error
    if (props[propName] && props['htmlFor'] === 'undefined') {
      throw new Error('htmlFor prop is required when label prop is present')
    }
  },
  htmlFor(props, propName, componentName) {
    // ** If htmlFor is defined and label is undefined throw error
    if (props[propName] && props['label'] === 'undefined') {
      throw new Error('label prop is required when htmlFor prop is present')
    }
  }
}

// ** Default Props
InputPasswordToggle.defaultProps = {
  visible: false
}
