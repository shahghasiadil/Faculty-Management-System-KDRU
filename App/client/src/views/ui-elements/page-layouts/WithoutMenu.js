import { Fragment } from 'react'
import { Alert } from 'reactstrap'
import Breadcrumbs from '@components/breadcrumbs'
import Ecommerce from '../../dashboard/ecommerce'

const WithoutMenu = () => {
  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle='Layout without menu'
        breadCrumbParent='Layouts'
        breadCrumbActive='Layout without menu'
      />
      <Alert color='primary'>
        <div className='alert-body'>
          <span className='font-weight-bold'>Info: </span>
          <span>
            Please check the{' '}
            <a
              href='https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/development/page-layouts'
              target='_blank'
            >
              Layout without menu documentation
            </a>{' '}
            for more details.
          </span>
        </div>
      </Alert>
      <Ecommerce />
    </Fragment>
  )
}

export default WithoutMenu
