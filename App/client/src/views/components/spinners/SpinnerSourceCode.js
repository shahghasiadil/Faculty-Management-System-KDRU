export const spinnerBorder = (
  <pre>
    <code className='language-jsx'>
      {`

import { Spinner } from 'reactstrap'

const SpinnerBorder = () => {
  return <Spinner />
}
export default SpinnerBorder
`}
    </code>
  </pre>
)

export const spinnerColors = (
  <pre>
    <code className='language-jsx'>
      {`

import { Spinner } from 'reactstrap'

const SpinnerColors = () => {
  return (
    <React.Fragment>
      <Spinner color='primary' />
      <Spinner color='secondary' />
      <Spinner color='success' />
      <Spinner color='danger' />
      <Spinner color='warning' />
      <Spinner color='info' />
      <Spinner color='light' />
      <Spinner color='dark' />
    </React.Fragment>
  )
}
export default SpinnerColors
`}
    </code>
  </pre>
)

export const spinnerGrowing = (
  <pre>
    <code className='language-jsx'>
      {`

import { Spinner } from 'reactstrap'

const SpinnerGrowing = () => {
  return <Spinner type='grow' color='primary' />
}
export default SpinnerGrowing
`}
    </code>
  </pre>
)

export const spinnerGrowColors = (
  <pre>
    <code className='language-jsx'>
      {`

import { Spinner } from 'reactstrap'

const SpinnerGrowColors = () => {
  return (
    <React.Fragment>
      <Spinner type='grow' color='primary' />
      <Spinner type='grow' color='secondary' />
      <Spinner type='grow' color='success' />
      <Spinner type='grow' color='danger' />
      <Spinner type='grow' color='warning' />
      <Spinner type='grow' color='info' />
      <Spinner type='grow' color='light' />
      <Spinner type='grow' color='dark' />
    </React.Fragment>
  )
}
export default SpinnerGrowColors`}
    </code>
  </pre>
)

export const spinnerFlex = (
  <pre>
    <code className='language-jsx'>
      {`

import { Spinner } from 'reactstrap'

const SpinnerFlex = () => {
  return (
    <React.Fragment>
      <div className='d-flex justify-content-center my-1'>
        <Spinner />
      </div>

      <div className='d-flex justify-content-between align-items-center'>
        <strong>Loading...</strong>
        <Spinner />
      </div>
    </React.Fragment>
  )
}
export default SpinnerFlex
`}
    </code>
  </pre>
)

export const spinnerFloat = (
  <pre>
    <code className='language-jsx'>
      {`

import { Spinner } from 'reactstrap'

const SpinnerFloat = () => {
  return <Spinner className='float-right mb-2' />
}
export default SpinnerFloat
`}
    </code>
  </pre>
)

export const spinnerTextAlignment = (
  <pre>
    <code className='language-jsx'>
      {`

import { Spinner } from 'reactstrap'

const SpinnerTextAlignment = () => {
  return (
    <div className='text-center'>
      <Spinner />
    </div>
  )
}
export default SpinnerTextAlignment
`}
    </code>
  </pre>
)

export const spinnerSizes = (
  <pre>
    <code className='language-jsx'>
      {`

import { Spinner } from 'reactstrap'

const SpinnerSizes = () => {
  return (
    <div className='demo-inline-spacing'>
      <div>
        <Spinner className='mr-25' size='sm' />
        <Spinner type='grow' size='sm' />
      </div>
      <div>
        <Spinner className='mr-25' />
        <Spinner type='grow' />
      </div>
      <div>
        <Spinner className='mr-25' size='lg' />
        <Spinner type='grow' size='lg' />
      </div>
    </div>
  )
}
export default SpinnerSizes
`}
    </code>
  </pre>
)

export const spinnerButton = (
  <pre>
    <code className='language-jsx'>
      {`

import { Button, Spinner } from 'reactstrap'

const SpinnerButton = () => {
  return (
    <div className='demo-inline-spacing'>
      <Button.Ripple color='primary'>
        <Spinner color='white' size='sm' />
      </Button.Ripple>

      <Button.Ripple color='primary'>
        <Spinner color='white' size='sm' />
        <span className='ml-50'>Loading...</span>
      </Button.Ripple>

      <Button.Ripple color='primary'>
        <Spinner color='white' size='sm' type='grow' />
      </Button.Ripple>

      <Button.Ripple color='primary'>
        <Spinner color='white' size='sm' type='grow' />
        <span className='ml-50'>Loading...</span>
      </Button.Ripple>
    </div>
  )
}
export default SpinnerButton
`}
    </code>
  </pre>
)
