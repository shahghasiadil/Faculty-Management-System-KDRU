import { Card, CardHeader, CardTitle, CardBody, Row, Col } from 'reactstrap'
import ReactPaginate from 'react-paginate'

const PaginationPositions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Positions</CardTitle>
      </CardHeader>{' '}
      <CardBody>
        <Row>
          <Col xl='4' md='12'>
            <h5 className='text-left'>Left Aligned</h5>
            <ReactPaginate
              pageCount={5}
              nextLabel={''}
              breakLabel={'...'}
              breakClassName='page-item'
              breakLinkClassName='page-link'
              activeClassName={'active'}
              pageClassName={'page-item'}
              previousLabel={''}
              nextLinkClassName={'page-link'}
              nextClassName={'page-item next'}
              previousClassName={'page-item prev'}
              previousLinkClassName={'page-link'}
              pageLinkClassName={'page-link'}
              containerClassName={'pagination react-paginate justify-content-start'}
            />
          </Col>
          <Col xl='4' md='12'>
            <h5 className='text-center'>Center Aligned</h5>
            <ReactPaginate
              pageCount={5}
              nextLabel={''}
              breakLabel={'...'}
              breakClassName='page-item'
              breakLinkClassName='page-link'
              activeClassName={'active'}
              pageClassName={'page-item'}
              previousLabel={''}
              nextLinkClassName={'page-link'}
              nextClassName={'page-item next'}
              previousClassName={'page-item prev'}
              previousLinkClassName={'page-link'}
              pageLinkClassName={'page-link'}
              containerClassName={'pagination react-paginate justify-content-center'}
            />
          </Col>
          <Col xl='4' md='12'>
            <h5 className='text-right'>Right Aligned</h5>
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
              containerClassName={'pagination react-paginate justify-content-end'}
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}
export default PaginationPositions
