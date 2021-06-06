import { Fragment } from 'react'
import { Alert } from 'reactstrap'
import Breadcrumbs from '@components/breadcrumbs'
import Ecommerce from '../../dashboard/ecommerce'

const BoxedLayout = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Layout Boxed' breadCrumbParent='Layouts' breadCrumbActive='Layout Boxed' />
      <Alert color='primary'>
        <div className='alert-body'>
          <span className='font-weight-bold'>Info: </span>
          <span>
            Please check the{' '}
            <a
              href='https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/development/page-layouts'
              target='_blank'
            >
              Layout boxed documentation
            </a>{' '}
            for more details.
          </span>
        </div>
      </Alert>
      <Ecommerce />
    </Fragment>
  )
}

export default BoxedLayout
