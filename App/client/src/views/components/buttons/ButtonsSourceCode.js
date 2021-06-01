export const filledButtons = (
  <pre>
    <code className='language-jsx'>
      {`

import { Button } from 'reactstrap'

const FilledButtons = () => {
  return (
    <React.Fragment>
      <Button.Ripple color='primary'>Primary</Button.Ripple>
      <Button.Ripple color='secondary'>Secondary</Button.Ripple>
      <Button.Ripple color='success'>Success</Button.Ripple>
      <Button.Ripple color='danger'>Danger</Button.Ripple>
      <Button.Ripple color='warning'>Warning</Button.Ripple>
      <Button.Ripple color='info'>Info</Button.Ripple>
      <Button.Ripple color='dark'>Dark</Button.Ripple>
    </React.Fragment>
  )
}
export default FilledButtons
`}
    </code>
  </pre>
)

export const outlineButtons = (
  <pre>
    <code className='language-jsx'>
      {`

import { Button } from 'reactstrap'

const OutlineButtons = () => {
  return (
    <div className='demo-inline-spacing'>
      <Button.Ripple color='primary' outline>
        Primary
      </Button.Ripple>
      <Button.Ripple color='secondary' outline>
        Secondary
      </Button.Ripple>
      <Button.Ripple color='success' outline>
        Success
      </Button.Ripple>
      <Button.Ripple color='danger' outline>
        Danger
      </Button.Ripple>
      <Button.Ripple color='warning' outline>
        Warning
      </Button.Ripple>
      <Button.Ripple color='info' outline>
        Info
      </Button.Ripple>
      <Button.Ripple color='dark' outline>
        Dark
      </Button.Ripple>
    </div>
  )
}
export default OutlineButtons
  `}
    </code>
  </pre>
)

export const flatButtons = (
  <pre>
    <code className='language-jsx'>
      {`

import { Button } from 'reactstrap'

const FlatButtons = () => {
  return (
    <div className='demo-inline-spacing'>
      <Button.Ripple color='flat-primary'>Primary</Button.Ripple>
      <Button.Ripple color='flat-secondary'>Secondary</Button.Ripple>
      <Button.Ripple color='flat-success'>Success</Button.Ripple>
      <Button.Ripple color='flat-danger'>Danger</Button.Ripple>
      <Button.Ripple color='flat-warning'>Warning</Button.Ripple>
      <Button.Ripple color='flat-info'>Info</Button.Ripple>
      <Button.Ripple color='flat-dark'>Dark</Button.Ripple>
    </div>
  )
}
export default FlatButtons
    `}
    </code>
  </pre>
)

export const gradientButtons = (
  <pre>
    <code className='language-jsx'>
      {`

import { Button } from 'reactstrap'

const GradientButtons = () => {
  return (
    <div className='demo-inline-spacing'>
      <Button color='gradient-primary'>Primary</Button>
      <Button color='gradient-secondary'>Secondary</Button>
      <Button color='gradient-success'>Success</Button>
      <Button color='gradient-danger'>Danger</Button>
      <Button color='gradient-warning'>Warning</Button>
      <Button color='gradient-info'>Info</Button>
      <Button color='gradient-dark'>Dark</Button>
    </div>
  )
}
export default GradientButtons
      `}
    </code>
  </pre>
)

export const reliefButtons = (
  <pre>
    <code className='language-jsx'>
      {`

import { Button } from 'reactstrap'

const ReliefButtons = () => {
  return (
    <div className='demo-inline-spacing'>
      <Button color='relief-primary'>Primary</Button>
      <Button color='relief-secondary'>Secondary</Button>
      <Button color='relief-success'>Success</Button>
      <Button color='relief-danger'>Danger</Button>
      <Button color='relief-warning'>Warning</Button>
      <Button color='relief-info'>Info</Button>
      <Button color='relief-dark'>Dark</Button>
    </div>
  )
}
export default ReliefButtons`}
    </code>
  </pre>
)

export const roundButtons = (
  <pre>
    <code className='language-jsx'>
      {`

import { Button } from 'reactstrap'

const RoundButtons = () => {
  return (
    <div className='demo-inline-spacing'>
      <Button.Ripple className='round' color='primary' outline>
        Primary
      </Button.Ripple>
      <Button.Ripple className='round' color='secondary' outline>
        Secondary
      </Button.Ripple>
      <Button.Ripple className='round' color='success' outline>
        Success
      </Button.Ripple>
      <Button.Ripple className='round' color='danger' outline>
        Danger
      </Button.Ripple>
      <Button.Ripple className='round' color='warning' outline>
        Warning
      </Button.Ripple>
      <Button.Ripple className='round' color='info' outline>
        Info
      </Button.Ripple>
      <Button.Ripple className='round' color='dark' outline>
        Dark
      </Button.Ripple>
    </div>
  )
}
export default RoundButtons`}
    </code>
  </pre>
)

export const iconButtons = (
  <pre>
    <code className='language-jsx'>
      {`

import { Button } from 'reactstrap'
import { Home, Star, Check } from 'react-feather'

const ButtonsIcon = () => {
  return (
    <div className='demo-inline-spacing'>
      <Button.Ripple outline color='primary'>
        <Home size={14} />
        <span className='align-middle ml-25'>Home</span>
      </Button.Ripple>
      <Button.Ripple color='warning'>
        <Star size={14} />
        <span className='align-middle ml-25'>Star</span>
      </Button.Ripple>
      <Button.Ripple color='flat-success'>
        <Check size={14} />
        <span className='align-middle ml-25'>Done</span>
      </Button.Ripple>
      <Button.Ripple outline color='primary' disabled>
        <Home size={14} />
        <span className='align-middle ml-25'>Home</span>
      </Button.Ripple>
    </div>
  )
}
export default ButtonsIcon
              `}
    </code>
  </pre>
)

export const iconOnlyButtons = (
  <pre>
    <code className='language-jsx'>
      {`

import { Button } from 'reactstrap'
import { Search, Inbox, Camera } from 'react-feather'

const ButtonsIconOnly = () => {
  return (
    <div className='demo-inline-spacing'>
      <Button.Ripple className='btn-icon' outline color='primary'>
        <Search size={16} />
      </Button.Ripple>
      <Button.Ripple className='btn-icon' color='warning'>
        <Inbox size={16} />
      </Button.Ripple>
      <Button.Ripple className='btn-icon' color='flat-success'>
        <Camera size={16} />
      </Button.Ripple>
      <Button.Ripple className='btn-icon' outline color='primary' disabled>
        <Search size={16} />
      </Button.Ripple>
      <Button.Ripple className='btn-icon rounded-circle' outline color='primary'>
        <Search size={16} />
      </Button.Ripple>
      <Button.Ripple className='btn-icon rounded-circle' color='warning'>
        <Inbox size={16} />
      </Button.Ripple>
      <Button.Ripple className='btn-icon rounded-circle' color='flat-success'>
        <Camera size={16} />
      </Button.Ripple>
      <Button.Ripple className='btn-icon rounded-circle' outline color='primary' disabled>
        <Search size={16} />
      </Button.Ripple>
    </div>
  )
}
export default ButtonsIconOnly`}
    </code>
  </pre>
)

export const buttonGroup = (
  <pre>
    <code className='language-jsx'>
      {`

import { Button, ButtonGroup, Row, Col } from 'reactstrap'
import { Facebook, Twitter, Instagram } from 'react-feather'

const ButtonGroups = () => {
  return (
    <React.Fragment>
      <Row>
        <Col md={6} sm={12}>
          <ButtonGroup className='mb-1'>
            <Button color='primary'>Left</Button>
            <Button color='primary'>Middle</Button>
            <Button color='primary'>Right</Button>
          </ButtonGroup>
        </Col>
        <Col md={6} sm={12}>
          <ButtonGroup className='mb-1'>
            <Button outline color='primary'>
              <Facebook size={15} />
            </Button>
            <Button outline color='primary'>
              <Twitter size={15} />
            </Button>
            <Button outline color='primary'>
              <Instagram size={15} />
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </React.Fragment>
  )
}
export default ButtonGroups`}
    </code>
  </pre>
)

export const buttonCBRadio = (
  <pre>
    <code className='language-jsx'>
      {`
import React, { useState } from 'react'
import { Button, ButtonGroup, Row, Col, CardText } from 'reactstrap'

const ButtonCheckboxRadio = () => {
  const [cSelected, setCSelected] = useState([])
  const [rSelected, setRSelected] = useState(null)

  const onCheckboxBtnClick = selected => {
    const index = cSelected.indexOf(selected)
    if (index < 0) {
      cSelected.push(selected)
    } else {
      cSelected.splice(index, 1)
    }
    setCSelected([...cSelected])
  }

  return (
    <Row>
      <Col md='12' lg='6'>
        <ButtonGroup className='mb-1'>
          <Button color='primary' onClick={() => onCheckboxBtnClick(1)} active={cSelected.includes(1)}>
            Active
          </Button>
          <Button color='primary' onClick={() => onCheckboxBtnClick(2)} active={cSelected.includes(2)}>
            Checkbox
          </Button>
          <Button color='primary' onClick={() => onCheckboxBtnClick(3)} active={cSelected.includes(3)}>
            Checkbox
          </Button>
        </ButtonGroup>
        <CardText>Selected: {JSON.stringify(cSelected)}</CardText>
      </Col>
      <Col md='12' lg='6'>
        <ButtonGroup className='mb-1'>
          <Button color='primary' onClick={() => setRSelected(1)} active={rSelected === 1}>
            Active
          </Button>
          <Button color='primary' onClick={() => setRSelected(2)} active={rSelected === 2}>
            Radio
          </Button>
          <Button color='primary' onClick={() => setRSelected(3)} active={rSelected === 3}>
            Radio
          </Button>
        </ButtonGroup>
        <CardText>Selected: {rSelected}</CardText>
      </Col>
    </Row>
  )
}

export default ButtonCheckboxRadio`}
    </code>
  </pre>
)

export const buttonSizes = (
  <pre>
    <code className='language-jsx'>
      {`

import { Button, Row, Col } from 'reactstrap'

const ButtonSizes = () => {
  return (
    <React.Fragment>
      <Row>
        <Col md={6} sm={12}>
          <div className='d-inline-block mr-1 mb-1'>
            <Button.Ripple color='primary' size='lg'>
              Large
            </Button.Ripple>
          </div>
          <div className='d-inline-block mr-1 mb-1'>
            <Button.Ripple color='primary'>Default</Button.Ripple>
          </div>
          <div className='d-inline-block mb-1'>
            <Button.Ripple color='primary' size='sm'>
              Small
            </Button.Ripple>
          </div>
        </Col>
        <Col md={6} sm={12}>
          <div className='d-inline-block mr-1 mb-1'>
            <Button.Ripple
              outline
              className='mr-1 mb-1'
              color='primary'
              size='lg'
            >
              Large
            </Button.Ripple>
          </div>
          <div className='d-inline-block mr-1 mb-1'>
            <Button.Ripple outline color='primary'>
              Default
            </Button.Ripple>
          </div>
          <div className='d-inline-block mb-1'>
            <Button.Ripple outline color='primary' size='sm'>
              Small
            </Button.Ripple>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  )
}
export default ButtonSizes
              `}
    </code>
  </pre>
)

export const buttonBlock = (
  <pre>
    <code className='language-jsx'>
      {`

import { Button, Row, Col } from 'reactstrap'

const ButtonBlock = () => {
  return (
    <React.Fragment>
      <Row>
        <Col lg={6} md={12}>
          <Button.Ripple block color='primary'>
            Block Level Button
          </Button.Ripple>
        </Col>
        <Col lg={6} md={12}>
          <Button.Ripple block outline color='primary'>
            Block Level Button
          </Button.Ripple>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default ButtonBlock`}
    </code>
  </pre>
)

export const buttonTags = (
  <pre>
    <code className='language-jsx'>
      {`

import { Button } from 'reactstrap'

const ButtonTags = () => {
  return (
    <React.Fragment>
      <a
        className='mr-1 mb-1 btn btn-primary'
        color='primary'
        href='https://pixinvent.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Link
      </a>
      <Button className='mr-1 mb-1' color='primary' tag='button'>
        Button
      </Button>
      <input
        className='mr-1 mb-1 btn btn-primary'
        type='button'
        value='Input'
      />
      <input
        className='mr-1 mb-1 btn btn-primary'
        type='submit'
        value='Submit'
      />
    </React.Fragment>
  )
}
export default ButtonTags
              `}
    </code>
  </pre>
)
