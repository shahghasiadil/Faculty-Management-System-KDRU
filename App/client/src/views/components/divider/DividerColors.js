import { Fragment } from 'react'

const DividerColors = () => {
  return (
    <Fragment>
      <div className='divider'>
        <div className='divider-text'>Default</div>
      </div>
      <div className='divider divider-primary'>
        <div className='divider-text'>Primary</div>
      </div>
      <div className='divider divider-secondary'>
        <div className='divider-text'>Secondary</div>
      </div>
      <div className='divider divider-success'>
        <div className='divider-text'>Success</div>
      </div>
      <div className='divider divider-danger'>
        <div className='divider-text'>Danger</div>
      </div>
      <div className='divider divider-warning'>
        <div className='divider-text'>Warning</div>
      </div>
      <div className='divider divider-info'>
        <div className='divider-text'>Info</div>
      </div>
      <div className='divider divider-dark'>
        <div className='divider-text'>Dark</div>
      </div>
    </Fragment>
  )
}
export default DividerColors
