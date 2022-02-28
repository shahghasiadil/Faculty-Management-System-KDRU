import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import ReactPaginate from 'react-paginate'

const PaginationInfo = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Info</CardTitle>
      </CardHeader>
      <CardBody>
        <ReactPaginate
          pageCount={10}
          nextLabel={''}
          breakLabel={'...'}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
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
          containerClassName={'pagination react-paginate pagination-info'}
        />
      </CardBody>
    </Card>
  )
}
export default PaginationInfo
