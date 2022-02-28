import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Button, Alert } from 'reactstrap'

const ButtonTags = () => {
  return (
    <Fragment>
      <Alert color='warning'>
        <div className='alert-body'>
          <strong>Note:</strong> Link button will redirect you to another page
        </div>
      </Alert>

      <div className='demo-inline-spacing'>
        <a
          className='btn btn-primary'
          color='primary'
          href='https://pixinvent.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Link
        </a>
        <Button color='primary' tag={Link} to='/'>
          Router
        </Button>
        <Button color='primary' tag='button'>
          Button
        </Button>
        <input className='btn btn-primary' type='button' value='Input' />
        <input className='btn btn-primary' type='submit' value='Submit' />
      </div>
    </Fragment>
  )
}
export default ButtonTags
