import { Fragment } from 'react'
import { Alert } from 'reactstrap'

const LayoutBlank = () => {
  return (
    <Fragment>
      <div className='row'>
        <div className='col-12 p-4'>
          <h4 className='mb-2'>Layout Blank</h4>
          <Alert color='primary'>
            <div className='alert-body'>
              <span className='font-weight-bold'>Info: </span>
              <span>
                This layout is used in Authentication & Miscellaneous page. Please check the{' '}
                <a
                  href='https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/development/page-layouts'
                  target='_blank'
                >
                  Layout blank documentation
                </a>
                for more details.
              </span>
            </div>
          </Alert>
        </div>
      </div>
    </Fragment>
  )
}

export default LayoutBlank
