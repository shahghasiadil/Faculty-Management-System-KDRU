import { Fragment } from 'react'
import ExtensionsHeader from '@components/extensions-header'
import { Row, Col } from 'reactstrap'
import BasicPagination from './BasicPagination'
import SepratedPagination from './SepratedPagination'
import PaginationIconText from './PaginationIconText'
import PaginationIcon from './PaginationIcon'
import PaginationSuccess from './PaginationSuccess'
import PaginationDanger from './PaginationDanger'
import PaginationInfo from './PaginationInfo'
import PaginationWarning from './PaginationWarning'
import PaginationPositions from './PaginationPositions'
import PaginationSizes from './PaginationSizes'

const ReactPaginate = () => {
  return (
    <Fragment>
      <ExtensionsHeader
        title='React Paginate'
        subTitle='A ReactJS component that creates a pagination'
        link='https://github.com/AdeleD/react-paginate'
      />

      <Row>
        <Col lg='6' md='12' sm='12'>
          <BasicPagination />
        </Col>
        <Col lg='6' md='12' sm='12'>
          <SepratedPagination />
        </Col>
        <Col lg='6' md='12' sm='12'>
          <PaginationIconText />
        </Col>
        <Col lg='6' md='12' sm='12'>
          <PaginationIcon />
        </Col>
        <Col lg='6' md='12' sm='12'>
          <PaginationSuccess />
        </Col>
        <Col lg='6' md='12' sm='12'>
          <PaginationDanger />
        </Col>
        <Col lg='6' md='12' sm='12'>
          <PaginationInfo />
        </Col>
        <Col lg='6' md='12' sm='12'>
          <PaginationWarning />
        </Col>
        <Col sm='12'>
          <PaginationPositions />
        </Col>
        <Col sm='12'>
          <PaginationSizes />
        </Col>
      </Row>
    </Fragment>
  )
}

export default ReactPaginate
