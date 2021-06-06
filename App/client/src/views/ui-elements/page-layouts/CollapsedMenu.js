import { Fragment } from 'react'
import { Alert } from 'reactstrap'
import Breadcrumbs from '@components/breadcrumbs'
import Ecommerce from '../../dashboard/ecommerce'

const CollapsedMenu = () => {
  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle='Layout collapsed menu'
        breadCrumbParent='Layouts'
        breadCrumbActive='Collapsed menu'
      />
      <Alert color='primary'>
        <div className='alert-body'>
          <span className='font-weight-bold'>Info: </span>
          <span>
            Use this layout to set menu (navigation) default collapsed. Please check{' '}
            <a
              href='https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/development/page-layouts'
              target='_blank'
            >
              the Layout collapsed menu documentation
            </a>{' '}
            for more details.
          </span>
        </div>
      </Alert>
      <Ecommerce />
    </Fragment>
  )
}

export default CollapsedMenu
