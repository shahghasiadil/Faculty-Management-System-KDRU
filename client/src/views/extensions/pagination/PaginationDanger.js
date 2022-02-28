import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import ReactPaginate from 'react-paginate'

const PaginationDanger = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Danger</CardTitle>
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
          breakClassName='page-item'
          breakLinkClassName='page-link'
          nextLinkClassName={'page-link'}
          nextClassName={'page-item next'}
          previousClassName={'page-item prev'}
          previousLinkClassName={'page-link'}
          pageLinkClassName={'page-link'}
          containerClassName={'pagination react-paginate pagination-danger'}
        />
      </CardBody>
    </Card>
  )
}
export default PaginationDanger
