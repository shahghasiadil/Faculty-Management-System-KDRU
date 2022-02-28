// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Third Party Components
import { Row, Col } from 'reactstrap'

// ** Tables
import TableServerSide from './TableServerSide'
import TableAdvSearch from './TableAdvSearch'

// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'

const Tables = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Datatables' breadCrumbParent='Home' breadCrumbActive='Datatables Advance' />
      <Row>
        <Col sm='12'>
          <TableServerSide />
        </Col>
        <Col sm='12'>
          <TableAdvSearch />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Tables
