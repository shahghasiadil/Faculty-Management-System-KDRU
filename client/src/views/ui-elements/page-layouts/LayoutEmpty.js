import { Fragment } from 'react'

import Breadcrumbs from '@components/breadcrumbs'
import { Alert } from 'reactstrap'

const LayoutEmpty = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Layout Empty' breadCrumbParent='Layouts' breadCrumbActive='Layout Empty' />
      <Alert color='primary'>
        <div className='alert-body'>
          <span className='font-weight-bold'>Info: </span>
          <span>
            This layout can be useful for getting started with empty content section. Please check the{' '}
            <a
              href='https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/development/page-layouts'
              target='_blank'
            >
              Layout empty documentation
            </a>{' '}
            for more details.
          </span>
        </div>
      </Alert>
    </Fragment>
  )
}

export default LayoutEmpty
