import { Card, CardHeader, CardTitle, CardBody, Row, Col } from 'reactstrap'
import ReactPaginate from 'react-paginate'

const PaginationSizes = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Sizes</CardTitle>
      </CardHeader>
      <CardBody>
        <Row>
          <Col lg='4' sm='12'>
            <ReactPaginate
              pageCount={5}
              nextLabel={''}
              breakLabel={'...'}
              activeClassName={'active'}
              pageClassName={'page-item'}
              previousLabel={''}
              nextLinkClassName={'page-link'}
              nextClassName={'page-item next'}
              previousClassName={'page-item prev'}
              previousLinkClassName={'page-link'}
              pageLinkClassName={'page-link'}
              breakClassName='page-item'
              breakLinkClassName='page-link'
              containerClassName={'pagination react-paginate pagination-lg'}
            />
          </Col>
          <Col lg='4' sm='12'>
            <ReactPaginate
              pageCount={5}
              nextLabel={''}
              breakLabel={'...'}
              activeClassName={'active'}
              pageClassName={'page-item'}
              previousLabel={''}
              nextLinkClassName={'page-link'}
              nextClassName={'page-item next'}
              previousClassName={'page-item prev'}
              previousLinkClassName={'page-link'}
              pageLinkClassName={'page-link'}
              breakClassName='page-item'
              breakLinkClassName='page-link'
              containerClassName={'pagination react-paginate'}
            />
          </Col>
          <Col lg='4' sm='12'>
            <ReactPaginate
              pageCount={5}
              nextLabel={''}
              breakLabel={'...'}
              activeClassName={'active'}
              pageClassName={'page-item'}
              previousLabel={''}
              nextLinkClassName={'page-link'}
              nextClassName={'page-item next'}
              previousClassName={'page-item prev'}
              previousLinkClassName={'page-link'}
              pageLinkClassName={'page-link'}
              breakClassName='page-item'
              breakLinkClassName='page-link'
              containerClassName={'pagination react-paginate pagination-sm'}
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}
export default PaginationSizes
