import { Fragment } from 'react'
import { ArrowDown, Star, Check, XCircle, Clock } from 'react-feather'

const DividerIcon = () => {
  return (
    <Fragment>
      <div className='divider divider-left'>
        <div className='divider-text'>
          <ArrowDown size={15} />
        </div>
      </div>

      <div className='divider divider-left-center'>
        <div className='divider-text'>
          <Star size={15} />
        </div>
      </div>

      <div className='divider'>
        <div className='divider-text'>
          <Check size={15} />
        </div>
      </div>

      <div className='divider divider-right-center'>
        <div className='divider-text'>
          <XCircle size={15} />
        </div>
      </div>

      <div className='divider divider-right'>
        <div className='divider-text'>
          <Clock size={15} />
        </div>
      </div>
    </Fragment>
  )
}
export default DividerIcon
