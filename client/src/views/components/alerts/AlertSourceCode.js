export const defaultAlert = (
  <pre className='language-jsx'>
    <code className='language-jsx'>
      {`

import { Alert } from 'reactstrap'

const DefaultAlert = () => {
  return (
    <React.Fragment>
      <Alert color='primary'>
        <div className='alert-body'>
          <span className='font-weight-bold'>Good Morning!</span>
          <span> Start your day with some alerts.</span>
        </div>
      </Alert>
    </React.Fragment>
  )
}
export default DefaultAlert
  `}
    </code>
  </pre>
)

export const alertTitle = (
  <pre>
    <code className='language-jsx'>
      {`

import { Alert } from 'reactstrap'

const AlertTitle = () => {
  return (
      <Alert color='warning'>
        <h4 className='alert-heading'>Lorem ipsum dolor sit amet</h4>
        <div className='alert-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, laborum!.</div>
      </Alert>
  )
}
export default AlertTitle
`}
    </code>
  </pre>
)

export const alertColors = (
  <pre>
    <code className='language-jsx'>
      {`

import { Alert } from 'reactstrap'

const AlertColors = () => {
  return (
    <React.Fragment>
      <Alert color='primary'>
        <h4 className='alert-heading'>Primary</h4>
        <div className='alert-body'>
          Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love
          cupcake cupcake.
        </div>
      </Alert>
      <Alert color='secondary'>
        <h4 className='alert-heading'>Secondary</h4>
        <div className='alert-body'>
          Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love
          cupcake cupcake.
        </div>
      </Alert>
      <Alert color='success'>
        <h4 className='alert-heading'>Success</h4>
        <div className='alert-body'>
          Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love
          cupcake cupcake.
        </div>
      </Alert>
      <Alert color='danger'>
        <h4 className='alert-heading'>Danger</h4>
        <div className='alert-body'>
          Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love
          cupcake cupcake.
        </div>
      </Alert>
      <Alert color='warning'>
        <h4 className='alert-heading'>Warning</h4>
        <div className='alert-body'>
          Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love
          cupcake cupcake.
        </div>
      </Alert>
      <Alert color='info'>
        <h4 className='alert-heading'>Info</h4>
        <div className='alert-body'>
          Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love
          cupcake cupcake.
        </div>
      </Alert>
      <Alert color='dark'>
        <h4 className='alert-heading'>Dark</h4>
        <div className='alert-body'>
          Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love
          cupcake cupcake.
        </div>
      </Alert>
    </React.Fragment>
  )
}
export default AlertColors
`}
    </code>
  </pre>
)

export const alertDismissable = (
  <pre>
    <code className='language-jsx'>
      {`
import React, { useState } from 'react'
import { Alert } from 'reactstrap'

const AlertDismissable = () => {
  const [visible, setVisible] = useState(true)

  return (
    <React.Fragment>
      <Alert color='info' isOpen={visible} toggle={() => setVisible(false)}>
        <div className='alert-body'>
          Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.
        </div>
      </Alert>
    </React.Fragment>
  )
}
export default AlertDismissable
    `}
    </code>
  </pre>
)

export const alertUncontrolled = (
  <pre>
    <code className='language-jsx'>
      {`

import { UncontrolledAlert } from 'reactstrap'

const AlertUncontrolled = () => {
  return (
    <React.Fragment>
      <UncontrolledAlert color='danger'>
        <div className='alert-body'>
          Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.
        </div>
      </UncontrolledAlert>
    </React.Fragment>
  )
}
export default AlertUncontrolled
      `}
    </code>
  </pre>
)

export const alertIcon = (
  <pre>
    <code className='language-jsx'>
      {`

import { Alert } from 'reactstrap'
import { Star } from 'react-feather'

const AlertIcon = () => {
  return (
    <React.Fragment>
      <Alert color='primary'>
        <div className='alert-body'>
          <Star size={15} />
          <span className='ml-1'>
            Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.
          </span>
        </div>
      </Alert>
    </React.Fragment>
  )
}
export default AlertIcon
        `}
    </code>
  </pre>
)

export const alertExample = (
  <pre>
    <code className='language-jsx'>
      {`
import React, { useState } from 'react'
import { Alert, FormGroup, Label, Input } from 'reactstrap'
import { AlertCircle } from 'react-feather'

const AlertExample = () => {
  const [inputTerm, setInputTerm] = useState('')
  const [visible, setVisible] = useState('')

  const handleInput = e => {
    setInputTerm(e.target.value)

    if (e.target.value.length > 0 && isNaN(e.target.value)) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  return (
    <React.Fragment>
      <FormGroup>
        <Label htmlFor='numbers'>Enter numbers only</Label>
        <Input
          className='w-25 h-25 pl-1'
          placeholder='0123456789'
          value={inputTerm}
          onChange={e => handleInput(e)}
        />
      </FormGroup>
      <Alert color='danger' isOpen={visible}>
        <div className='alert-body'>
          <AlertCircle size={15} />{' '}
          <span className='ml-1'>
            the value is <strong>invalid</strong> you can only enter numbers
          </span>
        </div>
      </Alert>
    </React.Fragment>
  )
}
export default AlertExample
        `}
    </code>
  </pre>
)
